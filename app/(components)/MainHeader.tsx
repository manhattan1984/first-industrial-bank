"use client";
import Header from "@/components/Header";
import React from "react";
import { useSupabase } from "../(context)/supabase-provider";
import { useRouter } from "next/navigation";

const MainHeader = ({
  signedIn,
  userId,
}: {
  signedIn: boolean;
  userId: string | undefined;
}) => {
  const { supabase } = useSupabase();
  const router = useRouter();
  return (
    <>
      <Header
        signedIn={signedIn}
        dashboardUrl={`/dashboard/${userId}`}
        signOut={async () => {
          await supabase.auth.signOut();
          router.push("/");
        }}
      />
    </>
  );
};

export default MainHeader;
