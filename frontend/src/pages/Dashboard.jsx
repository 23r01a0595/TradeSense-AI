import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard(5);
        setDashboard(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);

  if (!dashboard) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-[80vh] text-white text-xl">
          Loading...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <DashboardCard
          title="Investment"
          value={`₹${dashboard.totalInvestment.toFixed(2)}`}
          color="text-green-400"
        />

        <DashboardCard
          title="Current Value"
          value={`₹${dashboard.currentValue.toFixed(2)}`}
          color="text-blue-400"
        />

        <DashboardCard
          title="Profit"
          value={`₹${dashboard.profitLoss.toFixed(2)}`}
          color="text-yellow-400"
        />

        <DashboardCard
          title="Profit %"
          value={`${dashboard.profitPercentage.toFixed(2)}%`}
          color="text-purple-400"
        />

        <DashboardCard
          title="Stocks Owned"
          value={dashboard.stocksOwned}
          color="text-white"
        />

        <DashboardCard
          title="Watchlist"
          value={dashboard.watchlistCount}
          color="text-white"
        />
      </div>
    </MainLayout>
  );
}

export default Dashboard;