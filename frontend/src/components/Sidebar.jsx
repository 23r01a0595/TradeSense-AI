import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">
        TradeSense AI
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/stocks" className="hover:text-blue-400">
          Stocks
        </Link>

        <Link to="/portfolio" className="hover:text-blue-400">
          Portfolio
        </Link>

        <Link to="/watchlist" className="hover:text-blue-400">
          Watchlist
        </Link>

        <Link to="/ai" className="hover:text-blue-400">
          AI Recommendation
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;