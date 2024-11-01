import {
  LineChart as LChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
const LineChart = () => {
  const saleHistory = [
    { month: "Jan", sales: 4000, signups: 2400, uv: 3000 },
    { month: "Feb", sales: 3000, signups: 1398, uv: 2500 },
    { month: "Mar", sales: 5000, signups: 2210, uv: 4200 },
    { month: "Apr", sales: 4780, signups: 2900, uv: 3900 },
    { month: "May", sales: 5890, signups: 2000, uv: 4500 },
    { month: "Jun", sales: 4390, signups: 2780, uv: 3600 },
    { month: "Jul", sales: 5490, signups: 1890, uv: 4000 },
    { month: "Aug", sales: 6000, signups: 3200, uv: 5000 },
    { month: "Sep", sales: 7000, signups: 4000, uv: 6200 },
    { month: "Oct", sales: 8000, signups: 3500, uv: 7000 },
    { month: "Nov", sales: 6700, signups: 2800, uv: 5300 },
    { month: "Dec", sales: 7300, signups: 3100, uv: 6100 },
  ];

  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold text-center my-5">
        this is our sales history of last year with line chart :-
      </h3>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div>
          <LChart width={800} height={400} data={saleHistory}>
            <Line type="monotone" dataKey="uv" stroke="blue"></Line>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis dataKey="sales" />
          </LChart>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Monthly Performance Overview</h3>
          <p className="text-lg font-medium">
            This line chart illustrates the monthly performance metrics for the
            year, showcasing key data points across sales revenue, user signups,
            and unique visitors.
          </p>
          <ul className="text-gray-500 font-medium list-disc ml-10">
            <li>
              Sales: The blue line represents total monthly sales in dollars,
              highlighting revenue growth and seasonal trends.
            </li>
            <li>
              User Signups: The green line tracks new user signups, giving
              insights into customer acquisition efforts and promotional
              effectiveness.
            </li>
            <li>
              Unique Visitors (UV): The purple line shows the number of unique
              visitors, offering a view of website traffic and engagement
              levels.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LineChart;
