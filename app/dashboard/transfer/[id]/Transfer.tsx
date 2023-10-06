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

  const otpRef = useRef();

  const [showOTP, setShowOTP] = useState(false);

  const sendOTP = async () => {
    // setLoading(true);

    const { data: user, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      },
    });
    setShowOTP(true);

    if (error) {
      toast.error(`Error`);
      console.log("error", error);
    }

    // setLoading(false);
  };

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
    // @ts-ignore
    const amount = +amountRef.current.value;
    // @ts-ignore
    const accountNumber = accountNumberRef.current.value;
    // @ts-ignore
    const name = nameRef.current.value;
    // @ts-ignore
    const description = descriptionRef.current.value;
    // @ts-ignore
    const bank = bankRef.current.value;

    if (amount && accountNumber && name && description && bank) {
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
      toast.success("Your transaction is being processed.");
      setTimeout(() => {
        router.push(`/dashboard/${user_id}`);
        console.log("timeout");
      }, 3000);

      return;
    }

    toast.error("Fill the form completely.");
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
              onClick={() => setShowOTP(true)}
              className="text-blue-600 py-1 px-3"
            >
              Transfer
            </button>
          </div>

          {showOTP ? (
            <div className="">
              <div className="">
                <p className="capitalize mb-2 text-sm">Transfer Pin</p>
                <input
                  // @ts-ignore
                  ref={otpRef}
                  placeholder="OTP"
                  className="border w-full p-2 rounded text-sm mb-2"
                  type="password"
                />
              </div>
              <button className="text-blue-600" onClick={completeTransaction()}>
                Verify
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );

  function completeTransaction():
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined {
    return () => {
      // @ts-ignore
      if (otpRef.current.value !== "0094") {
        toast.error("Incorrect Pin");
        return;
      }
      // @ts-ignore
      if (+amountRef.current.value <= balance) {
        processTransaction();
        return;
      }
      toast.error("You have insufficient funds.");
    };
  }
};

export default Transfer;
