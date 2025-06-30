import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Jan', users: 840, sales: 12400 },
  { name: 'Feb', users: 1020, sales: 14700 },
  { name: 'Mar', users: 1300, sales: 16900 },
  { name: 'Apr', users: 1580, sales: 18600 },
  { name: 'May', users: 1735, sales: 19200 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">

      {/* Cards */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Total Users</h3>
        <p className="text-4xl font-bold">8,475</p>
        <p className="text-sm opacity-80 mt-1">↑ 12.5% from last month</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Monthly Revenue</h3>
        <p className="text-4xl font-bold">₹1,92,000</p>
        <p className="text-sm opacity-80 mt-1">↑ 18.1% this quarter</p>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Tasks Completed</h3>
        <p className="text-4xl font-bold">1,207</p>
        <p className="text-sm opacity-80 mt-1">↑ 22.3% efficiency boost</p>
      </div>

      {/* Line Chart */}
      <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">📈 User Growth Over Months</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">💰 Revenue by Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#10b981" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart with Legend */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">📊 Revenue Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-gray-700 dark:text-gray-300">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
