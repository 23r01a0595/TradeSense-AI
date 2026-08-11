import { useEffect, useState } from "react";
import {
    Wallet,
    TrendingUp,
    BarChart3,
    Star
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import AnalyticsCard from "../components/AnalyticsCard";
import PortfolioChart from "../components/PortfolioChart";
import PortfolioPieChart from "../components/PortfolioPieChart";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const userId = Number(localStorage.getItem("userId"));

                const data = await getDashboard(userId);

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

                <div className="flex justify-center items-center h-screen text-white text-2xl">

                    Loading Dashboard...

                </div>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="mb-10">

                <h1 className="
    text-3xl
    md:text-5xl
    font-bold
    text-white
">
    TradeSense AI Dashboard
</h1>

<p className="
    text-slate-400
    mt-2
    text-base
    md:text-xl
">
                    Monitor your portfolio with live market insights and AI.

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <AnalyticsCard
                    title="Portfolio Value"
                    value={`₹${Number(dashboard.portfolioValue || 0).toFixed(2)}`}
                    icon={<Wallet className="text-blue-400" />}
                    color="text-blue-400"
                />

                <AnalyticsCard
                    title="Investment"
                    value={`₹${Number(dashboard.totalInvestment || 0).toFixed(2)}`}
                    icon={<BarChart3 className="text-green-400" />}
                    color="text-green-400"
                />

                <AnalyticsCard
                    title="Profit / Loss"
                    value={`₹${Number(dashboard.profitLoss || 0).toFixed(2)}`}
                    icon={<TrendingUp className="text-emerald-400" />}
                    color={
                        dashboard.profitLoss >= 0
                            ? "text-green-400"
                            : "text-red-400"
                    }
                />

                <AnalyticsCard
                    title="Return"
                    value={`${Number(dashboard.profitLossPercentage || 0).toFixed(2)}%`}
                    icon={<TrendingUp className="text-yellow-400" />}
                    color={
                        dashboard.profitLossPercentage >= 0
                            ? "text-green-400"
                            : "text-red-400"
                    }
                />

                <AnalyticsCard
                    title="Holdings"
                    value={dashboard.totalHoldings}
                    icon={<Wallet className="text-cyan-400" />}
                    color="text-cyan-400"
                />

                <AnalyticsCard
                    title="Watchlist"
                    value={dashboard.watchlistCount}
                    icon={<Star className="text-yellow-400" />}
                    color="text-yellow-400"
                />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

                <PortfolioChart />

                <PortfolioPieChart />

            </div>

        </MainLayout>

    );

}

export default Dashboard;