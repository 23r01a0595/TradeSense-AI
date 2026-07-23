import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Stocks from "../pages/Stocks";
import Portfolio from "../pages/Portfolio";
import Watchlist from "../pages/Watchlist";
import AIRecommendation from "../pages/AIRecommendation";
import TransactionHistory from "../pages/TransactionHistory";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/ai" element={<AIRecommendation />} />
      <Route
    path="/transactions"
    element={<TransactionHistory />}
/>
    </Routes>
  );
}

export default AppRoutes;