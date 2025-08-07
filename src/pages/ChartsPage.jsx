import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";

// This is the single source of truth for all charts
const data = [
  { name: 'Jan', users: 840, sales: 12400, tasks: 150 },
  { name: 'Feb', users: 1020, sales: 14700, tasks: 210 },
  { name: 'Mar', users: 1300, sales: 16900, tasks: 280 },
  { name: 'Apr', users: 1580, sales: 18600, tasks: 345 },
  { name: 'May', users: 1735, sales: 19200, tasks: 400 },
];

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

const ChartsPage = () => {
  // Generate data for the pie chart from the main data array
  const pieChartData = data.map(entry => ({
    name: entry.name,
    value: entry.sales,
  }));

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          📈 User Growth (Line Chart)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          💰 Monthly Sales (Bar Chart)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#10b981" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart (now showing sales breakdown) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow md:col-span-2">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          📊 Monthly Sales Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieChartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsPage;