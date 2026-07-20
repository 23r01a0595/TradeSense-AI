import AnalyticsCard from "./AnalyticsCard";

function PortfolioAnalytics({ portfolio }) {

    const totalInvestment = portfolio.reduce(
        (sum, item) => sum + item.quantity * item.averageBuyPrice,
        0
    );

    const currentValue = portfolio.reduce(
        (sum, item) => sum + item.quantity * item.currentPrice,
        0
    );

    const profit = currentValue - totalInvestment;

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <AnalyticsCard
                title="Current Value"
                value={`₹${currentValue.toFixed(2)}`}
                color="text-blue-400"
            />

            <AnalyticsCard
                title="Total Investment"
                value={`₹${totalInvestment.toFixed(2)}`}
                color="text-green-400"
            />

            <AnalyticsCard
                title="Overall Profit"

                value={`₹${profit.toFixed(2)}`}

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