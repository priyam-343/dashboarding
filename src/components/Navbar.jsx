import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white shadow-md px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold tracking-wide">Welcome, Priyam</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
