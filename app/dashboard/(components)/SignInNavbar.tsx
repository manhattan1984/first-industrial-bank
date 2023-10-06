"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SignInNavbar = ({ id }: { id: string | undefined }) => {
  const { supabase } = useSupabase();

  // const id = (await supabase.auth.getUser()).data.user?.id;

  const pathname = usePathname();
  const NavLink = ({ href, title }: { href: string; title: string }) => {
    return (
      <Link
        className={`${pathname === href ? "text-blue-900" : ""}`}
        href={href}
      >
        {title}
      </Link>
    );
  };

  const links = [
    { href: `/dashboard/${id}`, title: "Dashboard" },
    {
      href: `/dashboard/transfer/${id}`,
      title: "Transfer",
    },
    
    // {
    //   href: `/dashboard/transactionlog/${id}`,
    //   title: "Transactions",
    // },
    {
      href: `/dashboard/profile/${id}`,
      title: "Profile",
    },

    // {
    //   href: `/dashboard/change-password/${id}`,
    //   title: "Change Password",
    // },
  ];

  console.log("pathname", pathname?.split("/"));

  return (
    <nav className="w-full flex items-start shadow-lg gap-2 p-2 overflow-x-auto text-gray-400 text-xs bg-white">
      {/* @ts-ignore */}
      {links.map(({ href, title }) => (
        // @ts-ignore
        <NavLink href={href} title={title} />
      ))}
    </nav>
  );
};

export default SignInNavbar;
