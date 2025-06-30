import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        {}
        <div className="md:hidden p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
          >
            ☰ Menu
          </button>
        </div>

        <Navbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
