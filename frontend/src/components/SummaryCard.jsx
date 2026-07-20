import { TrendingUp } from "lucide-react";

function SummaryCard({ title, value, color = "text-white", icon }) {

    const Icon = icon || TrendingUp;

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-400 text-sm">
                        {title}
                    </p>

                    <h2 className={`text-3xl font-bold mt-2 ${color}`}>
                        {value}
                    </h2>

                </div>

                <Icon size={36} className={color} />

            </div>

        </div>

    );
}

export default SummaryCard;