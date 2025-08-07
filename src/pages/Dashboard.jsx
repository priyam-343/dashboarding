import React from 'react';

const data = [
  { name: 'Jan', users: 840, sales: 12400, tasks: 150 },
  { name: 'Feb', users: 1020, sales: 14700, tasks: 210 },
  { name: 'Mar', users: 1300, sales: 16900, tasks: 280 },
  { name: 'Apr', users: 1580, sales: 18600, tasks: 345 },
  { name: 'May', users: 1735, sales: 19200, tasks: 400 },
];

const latestMonthUsers = data[data.length - 1].users;
const previousMonthUsers = data[data.length - 2].users;
const userGrowthPercentage = ((latestMonthUsers - previousMonthUsers) / previousMonthUsers) * 100;

const cumulativeRevenue = data.reduce((sum, entry) => sum + entry.sales, 0);
const latestMonthRevenue = data[data.length - 1].sales;
const previousMonthRevenue = data[data.length - 2].sales;
const revenueGrowthPercentage = ((latestMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100;

const latestMonthTasks = data[data.length - 1].tasks;
const previousMonthTasks = data[data.length - 2].tasks;
const tasksGrowthPercentage = ((latestMonthTasks - previousMonthTasks) / previousMonthTasks) * 100;

const studentInfo = {
  studentName: 'Priyam Kumar',
  startDate: '28/01/2025',
  domain: 'React JS',
  stream: 'B.tech',
  passingOutYear: '2026',
  collegeName: 'MBM University Jodhpur',
  batch: 'Batch Alpha',
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">

      {/* Cards */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Latest Month Users</h3>
        <p className="text-4xl font-bold">{latestMonthUsers.toLocaleString()}</p>
        <p className="text-sm opacity-80 mt-1">
          ↑ {userGrowthPercentage.toFixed(1)}% from last month
        </p>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Cumulative Revenue</h3>
        <p className="text-4xl font-bold">₹{cumulativeRevenue.toLocaleString()}</p>
        <p className="text-sm opacity-80 mt-1">
          ↑ {revenueGrowthPercentage.toFixed(1)}% from last month
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Latest Tasks Completed</h3>
        <p className="text-4xl font-bold">{latestMonthTasks.toLocaleString()}</p>
        <p className="text-sm opacity-80 mt-1">
          ↑ {tasksGrowthPercentage.toFixed(1)}% efficiency boost
        </p>
      </div>

      {/* Basic Information Section */}
      <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Basic Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          <div>
            <p className="font-semibold text-gray-500">Student Name</p>
            <p className="text-lg font-medium">{studentInfo.studentName}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Start Date</p>
            <p className="text-lg font-medium">{studentInfo.startDate}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Domain</p>
            <p className="text-lg font-medium">{studentInfo.domain}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Stream</p>
            <p className="text-lg font-medium">{studentInfo.stream}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Passing Out Year</p>
            <p className="text-lg font-medium">{studentInfo.passingOutYear}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">College Name</p>
            <p className="text-lg font-medium">{studentInfo.collegeName}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Batch</p>
            <p className="text-lg font-medium">{studentInfo.batch}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
