import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } md:block w-64 min-h-screen bg-gradient-to-b from-blue-600 to-indigo-800 text-white p-6 shadow-xl rounded-r-lg`}
    >
      <h1 className="text-3xl font-extrabold mb-8 tracking-wide">📊 Dashboard</h1>
      <nav className="flex flex-col gap-5 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-700 transition ${
              isActive ? "bg-blue-900" : ""
            }`
          }
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-700 transition ${
              isActive ? "bg-blue-900" : ""
            }`
          }
        >
          📅 Calendar
        </NavLink>
        <NavLink
          to="/kanban"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-700 transition ${
              isActive ? "bg-blue-900" : ""
            }`
          }
        >
          📋 Kanban
        </NavLink>
        <NavLink
          to="/charts"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-700 transition ${
              isActive ? "bg-blue-900" : ""
            }`
          }
        >
          📈 Charts
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-700 transition ${
              isActive ? "bg-blue-900" : ""
            }`
          }
        >
          👤 Users Table
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
