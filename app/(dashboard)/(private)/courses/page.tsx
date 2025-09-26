import { createClient } from "@/utils/supabase/server";
import CoursesList from "./_components/courses-list";
import { handleSubscribe } from "../../action";
import { Button } from "@/components/ui/button";

const LESSON_MAX_LIMIT = 1000;
const priceId = process.env.NEXT_PUBLIC_PRICE_ID;

export default async function CoursesPage() {
  const supabaseClient = await createClient();
  const user = await supabaseClient.auth.getUser();
  const userEmail = user.data.user?.email;

  let hasActiveSub = false;
  if (userEmail) {
    const { error } = await supabaseClient
      .from("subscriptions")
      .select()
      .eq("email", userEmail)
      .eq("active", true)
      .single();

    if (!error) {
      hasActiveSub = true;
    }
  }

  const maxAvailableLessons = hasActiveSub ? LESSON_MAX_LIMIT : 1;

  const { data } = await supabaseClient
    .from("lessons")
    .select()
    .limit(maxAvailableLessons);

  if (!data) {
    return <p>Non ci sono lezioni</p>;
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Lezioni</h1>
      <CoursesList lessons={data} />
      {!hasActiveSub && (
        <form action={handleSubscribe}>
          <input name="price" value={priceId} hidden readOnly />
          <Button type="submit">Get access</Button>
        </form>
      )}
    </div>
  );
}
