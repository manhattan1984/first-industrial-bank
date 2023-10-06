"use client";
import React from "react";
import Balance from "../(components)/Balance";
import { MdOutlineFilterNone } from "react-icons/md";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import Transaction from "../(components)/Transaction";

const Dashboard = ({
  userInfo: {
    first_name,

    balance,
  },
  deposits,
  transactions,
}) => {
  const balances = [
    {
      name: "Balance",
      amount: balance,
    },
  ];

  return (
    <div className="py-4 w-11/12 mx-auto bg-gray-100">
      <p className="text-xl mb-2">Hello {first_name}</p>
      {/* Amounts */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
        {balances.map((balance, index) => (
          <Balance {...balance} key={index} />
        ))}
      </div>

      {/* Transactions */}
      <div className="bg-white rounded p-4 my-4">
        <p className="my-2">Latest Transactions</p>
        <div className="border grid grid-cols-8 gap-4  text-sm py-2">
          {/* <p>Ref Id</p> */}
          <p className="text-xs">Date</p>
          <p className="text-xs truncate">Description</p>
          <p className="text-xs">Amount</p>
          <p className="text-xs">Type</p>
          <p className="text-xs">Status</p>
          <p className="text-xs">Acc No.</p>
          <p className="text-xs">Acc Name</p>
          <p className="text-xs">Bank</p>
        </div>
        {transactions ? (
          <>
            {transactions.map((transaction, index) => (
              <Transaction {...transaction} key={index} />
            ))}
          </>
        ) : (
          <div className="border p-4 flex gap-3 justify-between items-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <MdOutlineFilterNone className="text-blue-900" />
            </div>
            <div className="flex-1">
              <p>No Transaction Done</p>
              <p className="text-xs text-gray-500">
                {" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <p className="text-xs text-gray-500">N/A</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
