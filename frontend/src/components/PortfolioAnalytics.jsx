import {
    Wallet,
    TrendingUp,
    TrendingDown
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

function PortfolioAnalytics({ portfolio = [] }) {

    const totalInvestment = portfolio.reduce(
        (sum, item) =>
            sum + (item.quantity || 0) * (item.averageBuyPrice || 0),
        0
    );

    const currentValue = portfolio.reduce(
        (sum, item) =>
            sum + (item.quantity || 0) * (item.currentPrice || 0),
        0
    );

    const profit = currentValue - totalInvestment;

    const profitPercentage =
        totalInvestment === 0
            ? 0
            : (profit / totalInvestment) * 100;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

            <AnalyticsCard
                title="Current Value"
                value={`₹${currentValue.toFixed(2)}`}
                icon={<Wallet className="text-blue-400" />}
                color="text-blue-400"
            />

            <AnalyticsCard
                title="Investment"
                value={`₹${totalInvestment.toFixed(2)}`}
                icon={<Wallet className="text-green-400" />}
                color="text-green-400"
            />

            <AnalyticsCard
                title="Profit"
                value={`₹${profit.toFixed(2)}`}
                icon={
                    profit >= 0
                        ? <TrendingUp className="text-green-400" />
                        : <TrendingDown className="text-red-400" />
                }
                color={
                    profit >= 0
                        ? "text-green-400"
                        : "text-red-400"
                }
            />

            <AnalyticsCard
                title="Return"
                value={`${profitPercentage.toFixed(2)} %`}
                icon={
                    profit >= 0
                        ? <TrendingUp className="text-green-400" />
                        : <TrendingDown className="text-red-400" />
                }
                color={
                    profit >= 0
                        ? "text-green-400"
                        : "text-red-400"
                }
            />

        </div>
    );
}

export default PortfolioAnalytics;