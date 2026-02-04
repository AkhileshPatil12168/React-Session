import { useState } from "react";

//form
//submit and show data

const Card = ({ data }) => {
  return (
    <div className={`w-fit ${data?.id % 2 == 0 ? "bg-gray-200" : "bg-white"}`}>
      <p>Client: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Amount: {data.amount}</p>
      <p>Stauts: {data.status}</p>
      <br />
    </div>
  );
};

function Body() {
  const invoices = [
     { id: 1, name: "User 11", email: "user11@mail.com", amount: 120000000, status: "Paid" },
  { id: 2, name: "User 2", email: "user2@mail.com", amount: 15000, status: "Pending" },
  { id: 3, name: "User 3", email: "user3@mail.com", amount: 18000, status: "Unpaid" },
  { id: 4, name: "User 4", email: "user4@mail.com", amount: 22000, status: "Paid" },
  { id: 5, name: "User 5", email: "user5@mail.com", amount: 26000, status: "Pending" },
  { id: 6, name: "User 6", email: "user6@mail.com", amount: 30000, status: "Unpaid" },
  { id: 7, name: "User 7", email: "user7@mail.com", amount: 34000, status: "Paid" },
  { id: 8, name: "User 8", email: "user8@mail.com", amount: 38000, status: "Pending" },
  { id: 9, name: "User 9", email: "user9@mail.com", amount: 42000, status: "Unpaid" },
  { id: 10, name: "User 10", email: "user10@mail.com", amount: 46000, status: "Paid" },

  { id: 11, name: "User 11", email: "user11@mail.com", amount: 14000, status: "Pending" },
  { id: 12, name: "User 12", email: "user12@mail.com", amount: 17000, status: "Unpaid" },
  { id: 13, name: "User 13", email: "user13@mail.com", amount: 21000, status: "Paid" },
  { id: 14, name: "User 14", email: "user14@mail.com", amount: 25000, status: "Pending" },
  { id: 15, name: "User 15", email: "user15@mail.com", amount: 29000, status: "Unpaid" },
  { id: 16, name: "User 16", email: "user16@mail.com", amount: 33000, status: "Paid" },
  { id: 17, name: "User 17", email: "user17@mail.com", amount: 37000, status: "Pending" },
  { id: 18, name: "User 18", email: "user18@mail.com", amount: 41000, status: "Unpaid" },
  { id: 19, name: "User 19", email: "user19@mail.com", amount: 45000, status: "Paid" },
  { id: 20, name: "User 20", email: "user20@mail.com", amount: 49000, status: "Pending" },

  { id: 21, name: "User 21", email: "user21@mail.com", amount: 13000, status: "Unpaid" },
  { id: 22, name: "User 22", email: "user22@mail.com", amount: 16000, status: "Paid" },
  { id: 23, name: "User 23", email: "user23@mail.com", amount: 20000, status: "Pending" },
  { id: 24, name: "User 24", email: "user24@mail.com", amount: 24000, status: "Unpaid" },
  { id: 25, name: "User 25", email: "user25@mail.com", amount: 28000, status: "Paid" },
  { id: 26, name: "User 26", email: "user26@mail.com", amount: 32000, status: "Pending" },
  { id: 27, name: "User 27", email: "user27@mail.com", amount: 36000, status: "Unpaid" },
  { id: 28, name: "User 28", email: "user28@mail.com", amount: 40000, status: "Paid" },
  { id: 29, name: "User 29", email: "user29@mail.com", amount: 44000, status: "Pending" },
  { id: 30, name: "User 30", email: "user30@mail.com", amount: 48000, status: "Unpaid" },

  { id: 31, name: "User 31", email: "user31@mail.com", amount: 13500, status: "Paid" },
  { id: 32, name: "User 32", email: "user32@mail.com", amount: 17500, status: "Pending" },
  { id: 33, name: "User 33", email: "user33@mail.com", amount: 21500, status: "Unpaid" },
  { id: 34, name: "User 34", email: "user34@mail.com", amount: 25500, status: "Paid" },
  { id: 35, name: "User 35", email: "user35@mail.com", amount: 29500, status: "Pending" },
  { id: 36, name: "User 36", email: "user36@mail.com", amount: 33500, status: "Unpaid" },
  { id: 37, name: "User 37", email: "user37@mail.com", amount: 37500, status: "Paid" },
  { id: 38, name: "User 38", email: "user38@mail.com", amount: 41500, status: "Pending" },
  { id: 39, name: "User 39", email: "user39@mail.com", amount: 45500, status: "Unpaid" },
  { id: 40, name: "User 40", email: "user40@mail.com", amount: 49500, status: "Paid" },

  { id: 41, name: "User 41", email: "user41@mail.com", amount: 14500, status: "Pending" },
  { id: 42, name: "User 42", email: "user42@mail.com", amount: 18500, status: "Unpaid" },
  { id: 43, name: "User 43", email: "user43@mail.com", amount: 22500, status: "Paid" },
  { id: 44, name: "User 44", email: "user44@mail.com", amount: 26500, status: "Pending" },
  { id: 45, name: "User 45", email: "user45@mail.com", amount: 30500, status: "Unpaid" },
  { id: 46, name: "User 46", email: "user46@mail.com", amount: 34500, status: "Paid" },
  { id: 47, name: "User 47", email: "user47@mail.com", amount: 38500, status: "Pending" },
  { id: 48, name: "User 48", email: "user48@mail.com", amount: 42500, status: "Unpaid" },
  { id: 49, name: "User 49", email: "user49@mail.com", amount: 46500, status: "Paid" },
  { id: 50, name: "User 50", email: "user50@mail.com", amount: 50500, status: "Pending" },
  ];

  const [selected, setSelected ] = useState("All")

  return (
    <div className="min-h-screen">
      <div className="my-10">
      <label>filter : </label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)} >
        <option value={"Paid"}>Paid</option>
        <option value={"Unpaid"}>Unpaid</option>{" "}
        <option value={"Pending"}>Pending</option>
      </select></div>
      {/* //Fragment */}

      <div className="grid grid-cols-5  gap-3.5">
        {invoices
          .filter((element) => element.status == selected)
          .map((element, index) => (
            <Card data={element} key={index} />
          ))}
      </div>
    </div>
  );
}



export default Body;
