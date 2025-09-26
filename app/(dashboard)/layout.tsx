import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabaseClient = await createClient();
  const { data } = await supabaseClient.auth.getUser();

  return (
    <>
      <Navbar user={data.user} />
      <main className="flex min-h-screen flex-col">{children}</main>
      <Footer />
    </>
  );
}
