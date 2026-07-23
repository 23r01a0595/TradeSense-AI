import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function PortfolioChart({ portfolio = [] }) {

    const totalValue = portfolio.reduce(
    (sum, item) => sum + item.quantity * item.currentPrice,
    0
);

const totalInvestment = portfolio.reduce(
    (sum, item) => sum + item.quantity * item.averageBuyPrice,
    0
);

const profit = totalValue - totalInvestment;
    const data = [

        {
            name: "Investment",
            value: Number(totalInvestment.toFixed(2))
        },
        {
            name: "Current",
            value: Number(totalValue.toFixed(2))
        },
        {
            name: "Profit",
            value: Number(profit.toFixed(2))
        }

    ];

    return (

        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mt-8">

            <h2 className="text-2xl font-bold text-white mb-6">

                Portfolio Performance

            </h2>

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PortfolioChart;