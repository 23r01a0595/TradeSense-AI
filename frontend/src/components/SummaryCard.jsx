import { TrendingUp } from "lucide-react";

function SummaryCard({ title, value, color = "text-white", icon }) {

    const Icon = icon || TrendingUp;

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-400 text-sm md:text-base">
                        {title}
                    </p>

                    <h2 className={`text-2xl md:text-3xl font-bold mt-2 ${color}`}>
                        {value}
                    </h2>

                </div>

                <Icon
                    size={28}
                    className={color}
                />

            </div>

        </div>

    );
}

export default SummaryCard;