import "./SimpleBarChart";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const SimpleBarChart = () => {
  const performanceData = [
    { page: "Home", pv: 15000, uv: 8000, amt: 5000 },
    { page: "Products", pv: 12000, uv: 6000, amt: 4500 },
    { page: "Services", pv: 8000, uv: 4000, amt: 3000 },
    { page: "Blog", pv: 6000, uv: 3500, amt: 1500 },
    { page: "Contact", pv: 5000, uv: 2000, amt: 1000 },
    { page: "About Us", pv: 7000, uv: 3000, amt: 2500 },
    { page: "FAQ", pv: 4000, uv: 1500, amt: 800 },
  ];

  return (
    <div className="h-[600px]">
      <h3 className="text-3xl font-bold text-center my-8">
        this is our customer response to visit in last year with bar chart :-
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={performanceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="page" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
