function Navbar() {
  return (
    <nav className="bg-slate-800 h-16 flex items-center justify-between px-8 shadow-md">
      <h1 className="text-2xl font-bold text-white">
        TradeSense AI
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-300">
          Welcome, Manikanta
        </span>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;