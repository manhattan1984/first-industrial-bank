import React from "react";

// @ts-ignore
const Transaction = ({
  created_at,
  plan,
  amount,
  status,
  id,
  user_id,
  type,
  account_number,
  name,
  description,
  bank
}: {
  created_at: Date;
  plan: string;
  amount: number;
  status: boolean;
  id: string;
  user_id: string;
  type: string;
  account_number: string;
  name: string;
  description: string;
  bank: string;
}) => {
  const date = new Date(created_at).toLocaleDateString();
  return (
    <div className="bg-white border py-2 grid my-2 grid-cols-8 gap-4 text-center overflow-x-auto">
      <p className="text-xs">{date}</p>

      <p className="text-xs uppercase">{description}</p>
      <p className="text-xs">{`${type === "deposit" ? "" : "-"}$${amount}`}</p>
      <p className="capitalize text-xs">{plan || type}</p>
      <p className="text-xs">{status ? "Successful" : "Pending"}</p>
      <p className="text-xs">{account_number}</p>
      <p className="text-xs">{name}</p>
      <p className="text-xs">{bank}</p>
    </div>
  );
};

export default Transaction;
