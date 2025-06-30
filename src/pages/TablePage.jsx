const TablePage = () => {
  const users = [
    { id: 1, name: "Sarthak Acharjee", email: "sarthak.acharjee@celebaltech.com", role: "Mentor" },
    { id: 2, name: "Akash Aggarwal", email: "akash.agarwal@celebaltech.com", role: "Mentor" },
    { id: 3, name: "Priyanshi Jain", email: "priyanshi.jain1@celebaltech.com", role: "Mentor" },
    { id: 4, name: "Prerna Kamat", email: "prerna.kamat@celebaltech.com", role: "HR" }
  ];

  const getRoleBadge = (role) => {
    const base = "px-3 py-1 rounded-full text-xs font-bold inline-block";
    switch (role) {
      case "Mentor":
        return `${base} bg-indigo-100 text-indigo-700 dark:bg-indigo-600 dark:text-white`;
      case "HR":
        return `${base} bg-pink-100 text-pink-700 dark:bg-pink-600 dark:text-white`;
      case "Admin":
        return `${base} bg-red-100 text-red-700 dark:bg-red-700 dark:text-white`;
      case "Editor":
        return `${base} bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white`;
      case "Viewer":
        return `${base} bg-green-100 text-green-700 dark:bg-green-700 dark:text-white`;
      default:
        return `${base} bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white`;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Users Table</h1>
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-white bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <span className={getRoleBadge(user.role)}>{user.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;