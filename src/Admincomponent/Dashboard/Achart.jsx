import React from "react";
import "./achart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Achart = () => {
  const data = [
    { month: "Jan", donation: 55000 },
    { month: "Feb", donation: 45000 },
    { month: "Mar", donation: 52000 },
    { month: "Apr", donation: 58000 },
    { month: "May", donation: 62000 },
    { month: "Jun", donation: 49000 },
    { month: "Jul", donation: 60000 },
    { month: "Aug", donation: 59000 },
    { month: "Sep", donation: 50000 },
    { month: "Oct", donation: 51000 },
    { month: "Nov", donation: 59000 },
    { month: "Dec", donation: 100000 },
  ];
  return (
    <div className="p-4 rounded-xl shadow-md chart">
      <h2 className="text-xl font-bold mb-4">Monthly Donation Chart</h2>
      <ResponsiveContainer width="95%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar dataKey="donation" fill="#88b235" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Achart;
