import React from "react";
import Transaction from "../../(components)/Transaction";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-white rounded p-4 my-4 text-center w-full m-4">
        <p className="text-left my-2 text-xl mb-6">Transaction History</p>

        <div className="border grid grid-cols-8 gap-4 text-center text-sm py-2">
          <p className="text-xs">Date</p>
          <p className="text-xs">Narration</p>
          <p className="text-xs">Amount</p>
          <p className="text-xs">Type</p>
          <p className="text-xs">Status</p>
          <p className="text-xs">A/C Number</p>
          <p className="text-xs">A/C Name</p>
          <p className="text-xs">{bank}</p>
        </div>
        {/* <div className="border p-8"> */}
        {transactions ? (
          <>
            {transactions.map((transaction, index) => (
              <Transaction {...transaction} key={index} />
            ))}
          </>
        ) : (
          <p>No Recent Transactions</p>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TransactionHistory;
