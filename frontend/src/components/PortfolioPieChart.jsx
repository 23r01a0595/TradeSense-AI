import {

    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer

} from "recharts";

const COLORS = [

    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#ef4444",
    "#a855f7"

];

function PortfolioPieChart() {

    const data = [

        { name: "INFY", value: 92653 }

    ];

    return (

        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

            <h2 className="text-white text-2xl font-bold mb-6">

                Portfolio Allocation

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={110}
                        label
                    >

                        {data.map((entry, index) => (

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

    );

}

export default PortfolioPieChart;