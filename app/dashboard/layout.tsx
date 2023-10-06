import "server-only";
import { createClient } from "@/utils/supabase-server";
import React from "react";
import SignInNavbar from "./(components)/SignInNavbar";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const id = (await supabase.auth.getUser()).data.user?.id;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: {casted},
    error,
  } = await supabase.from("profiles").select("*").eq("id", id).single();

  console.log("casted", casted);
  

  if (!session) {
    redirect("/signin");
  }

  if (casted) {
    redirect("/unauthorized");
  }

  return (
    <section className="bg-gray-100">
      {/* Include shared UI here e.g. a header or sidebar */}

      <SignInNavbar id={id} />
      <div className="">{children}</div>
    </section>
  );
}
