import {
    Brain,
    TrendingUp,
    Shield,
    Target
} from "lucide-react";

function AIRecommendationCard({ recommendation }) {

    const buy =
        recommendation.recommendation === "BUY";

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">

            <div className="flex items-center gap-3 mb-8">

                <Brain
                    className="text-cyan-400"
                    size={34}
                />

                <div>

                    <h2 className="text-3xl font-bold text-white">
                        {recommendation.companyName}
                    </h2>

                    <p className="text-slate-400">
                        {recommendation.stockSymbol}
                    </p>

                </div>

            </div>

            <div className="space-y-6">

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Recommendation
                    </span>

                    <span
                        className={`font-bold ${
                            buy
                                ? "text-green-400"
                                : "text-red-400"
                        }`}
                    >
                        {recommendation.recommendation}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Confidence
                    </span>

                    <span className="text-blue-400 font-semibold">
                        {recommendation.confidence}%
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Risk
                    </span>

                    <span className="text-orange-400 font-semibold">
                        {recommendation.risk}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Target Price
                    </span>

                    <span className="text-green-400 font-semibold">
                        ₹{recommendation.targetPrice.toFixed(2)}
                    </span>

                </div>

                <div className="border-t border-slate-700 pt-6">

                    <h3 className="text-white font-semibold mb-3">
                        AI Analysis
                    </h3>

                    <p className="text-slate-300 leading-7">
                        {recommendation.reason}
                    </p>

                </div>

            </div>

        </div>

    );
}

export default AIRecommendationCard;