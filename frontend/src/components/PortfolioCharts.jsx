import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";

const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#8B5CF6",
    "#EF4444"
];

function PortfolioCharts({ portfolio }) {

    const pieData = portfolio.map((item) => ({
        name: item.stockSymbol,
        value: item.quantity * item.currentPrice
    }));

    const lineData = [
        { month: "Jan", value: 85000 },
        { month: "Feb", value: 91000 },
        { month: "Mar", value: 97000 },
        { month: "Apr", value: 101000 },
        { month: "May", value: 104000 },
        { month: "Jun", value: 108000 }
    ];

    return (

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

                <h2 className="text-xl font-bold text-white mb-6">
                    Portfolio Allocation
                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <PieChart>

                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            label
                        >

                            {pieData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

                <h2 className="text-xl font-bold text-white mb-6">
                    Portfolio Growth
                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <LineChart data={lineData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3B82F6"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>

    );
}

export default PortfolioCharts;