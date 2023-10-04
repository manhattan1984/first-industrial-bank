import { createClient } from "@/utils/supabase-server";
import React from "react";

import Transfer from "./Transfer";

// @ts-ignore
const page = async ({ params: { id } }) => {
  const supabase = createClient();
  const email = (await supabase.auth.getSession()).data.session?.user.email;
  let { data: wallets, error } = await supabase.from("wallets").select("name");

  let { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id).single();

    console.log('profiles', profile);
    

  // @ts-ignore
  return <Transfer email={email} wallets={wallets} user_id={id} profile={profile} />;
};

export default page;
