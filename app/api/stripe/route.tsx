import { WelcomeEmail } from "@/email/welcome";
import { resend } from "@/utils/resend";
import { stripe } from "@/utils/stripe/stripe";
import { supabaseAdmin } from "@/utils/supabase/admin";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  let event;

  const body = await req.text(); // Otherwise use the basic event deserialized with JSON.parse
  const requestHeaders = new Headers(req.headers);

  // Get the signature sent by Stripe
  const sig = requestHeaders.get("stripe-signature") as string | string[];
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_KEY ?? ""
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    // Handle the event
    switch (event.type) {
      case "invoice.payment_succeeded":
        const paymentInvoiceSucceeded = event.data.object;
        const customerEmail =
          paymentInvoiceSucceeded.customer_email || "roby94.losa@tiscali.it";

        const { error } = await supabaseAdmin.from("subscriptions").upsert(
          {
            email: customerEmail,
            stripeid: paymentInvoiceSucceeded.customer as string,
          },
          { onConflict: "email" }
        );

        if (error) {
          return NextResponse.json({ ok: false }, { status: 500 });
        }

        const customerName =
          paymentInvoiceSucceeded.customer_name || "robylosa";

        try {
          const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: customerEmail,
            subject: "Benvenuto!",
            react: <WelcomeEmail name={customerName} />,
          });

          if (error) {
            return NextResponse.json(
              { success: false, error },
              { status: 400 }
            );
          }
          return NextResponse.json({ success: true, data });
        } catch (err) {
          return NextResponse.json(
            { success: false, error: err },
            { status: 500 }
          );
        }

        break;
      case "customer.subscription.deleted":
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const customerSub = event.data.object as any;
        const customerSubEmail: string =
          customerSub.customer_email || "roby94.losa@tiscali.it";

        const { error: errorSub } = await supabaseAdmin
          .from("subscriptions")
          .upsert(
            {
              email: customerSubEmail,
              stripeid: customerSub.customer as string,
              active: false,
            },
            { onConflict: "email" }
          );

        if (errorSub) {
          return NextResponse.json({ ok: false }, { status: 500 });
        }

        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
