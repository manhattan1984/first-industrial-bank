"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { sendEmailToUser } from "@/utils/emailSender";
import { useRouter } from "next/navigation";
import mjml2html from "mjml";

const Transfer = ({
  user_id,
  wallets,
  email,
  profile: { balance },
}: {
  user_id: string;
  email: string;
  wallets: {
    name: string;
  }[];
  profile: {
    balance: number;
  };
}) => {
  const { supabase } = useSupabase();

  const router = useRouter();

  const amountRef = useRef(0);

  const descriptionRef = useRef("");

  const nameRef = useRef("");

  const accountNumberRef = useRef("");

  const bankRef = useRef("");

  const addTransactionToDatabase = async (
    type: string,
    amount: number,
    account_number: string,
    name: string,
    description: string,
    bank: string
  ) => {
    const { data, error } = await supabase
      .from("transactions")
      .insert([
        { user_id, amount, type, account_number, name, description, bank },
      ]);

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ balance: balance - amount })
      .eq("id", user_id);
    if (error || updateError) {
      toast.error(error || updateError);
      return;
    }

    toast.success("Processing Your Transaction");
  };

  function processTransaction() {
    addTransactionToDatabase(
      "Transfer",
      // @ts-ignore
      +amountRef.current.value,
      // @ts-ignore
      accountNumberRef.current.value,
      // @ts-ignore
      nameRef.current.value,
      // @ts-ignore
      descriptionRef.current.value,
      // @ts-ignore
      bankRef.current.value
    );
    // sendEmailToUser(
    //   email,
    //   "Withdrawal",
    //   // @ts-ignore
    //   `We have been notified of your recent request of $${amountRef.current.value}. It is currently being processed. Thank you.`
    // );
    toast.success("Your transaction is being processed.");
    setTimeout(() => {
      router.push(`/dashboard/${user_id}`);
      console.log("timeout");
    }, 3000);
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center h-full py-8">
        <div className="bg-white flex flex-col gap-4 shadow p-8 rounded">
          <p className="font-bold">Transfer</p>

          <div className="">
            <p className="font-light text-sm">Bank</p>
            <input
              //   @ts-ignore
              ref={bankRef}
              className="border p-1 rounded w-full my-2"
              type="text"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Account Number</p>
            <input
              //   @ts-ignore
              ref={accountNumberRef}
              className="border p-1 rounded w-full my-2"
              type="number"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Name</p>
            <input
              //   @ts-ignore
              ref={nameRef}
              className="border p-1 rounded w-full my-2"
              placeholder=""
              type="text"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Amount ($)</p>
            <input
              //   @ts-ignore
              ref={amountRef}
              className="border p-1 rounded w-full my-2"
              placeholder="USD"
              type="number"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Description</p>
            <input
              //   @ts-ignore
              ref={descriptionRef}
              className="border p-1 rounded w-full my-2"
              placeholder=""
              type="text"
            />
          </div>
          <p className="text-xs">
            Ensure the account details provided are correct.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                // @ts-ignore
                if (+amountRef.current.value <= balance) {
                  processTransaction();
                  return;
                }
                toast.error("You have insufficient funds.");
              }}
              className="text-blue-600 py-1 px-3"
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
