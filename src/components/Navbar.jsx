function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-700">📝 Task Manager</h1>
      <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
