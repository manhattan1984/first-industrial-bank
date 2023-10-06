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
    <div className="bg-white border py-2 my-2 gap-2 overflow-x-auto text-center grid grid-cols-8">
      <p className="text-xs truncate">{date}</p>

      <p className="text-xs uppercase truncate">{description}</p>
      <p className="text-xs">{`${type === "deposit" ? "" : "-"}$${amount}`}</p>
      <p className="capitalize text-xs">{plan || type}</p>
      <p className="text-xs">{status ? "✅" : "⏳"}</p>
      <p className="text-xs truncate">{account_number}</p>
      <p className="text-xs">{name}</p>
      <p className="text-xs">{bank}</p>
    </div>
  );
};

export default Transaction;
