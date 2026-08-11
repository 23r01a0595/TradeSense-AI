import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import AIRecommendationCard from "../components/AIRecommendationCard";

import { getAIRecommendation } from "../services/aiService";
import { getStocks } from "../services/stocksService";

function AIRecommendation() {

    const [stocks, setStocks] = useState([]);
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadStocks();
    }, []);

    const loadStocks = async () => {

        try {

            const data = await getStocks();

            setStocks(data);

        } catch (error) {

            console.error(error);

            toast.error("Unable to load stocks");

        }

    };

    const handleAnalyze = async (stock) => {

        try {

            setLoading(true);

            const data = await getAIRecommendation({

                companyName: stock.companyName,
                sector: stock.sector,
                currentPrice: stock.currentPrice

            });

            setRecommendation(data);

        } catch (error) {

            console.error(error);

            toast.error("Unable to generate AI recommendation");

        } finally {

            setLoading(false);

        }

    };

    return (

        <MainLayout>

            <div className="mb-10">

                <h1 className="text-4xl font-bold text-white">

                    🤖 AI Recommendation

                </h1>

                <p className="text-slate-400 mt-2">

                    Analyze any stock using TradeSense AI.

                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-1">

                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

                        <h2 className="text-xl font-bold text-white mb-5">

                            Available Stocks

                        </h2>

                        <div className="space-y-4">

                            {stocks.map((stock) => (

                                <div
                                    key={stock.id}
                                    className="bg-slate-900 rounded-xl p-4 border border-slate-700"
                                >

                                    <h3 className="text-white font-semibold">

                                        {stock.companyName}

                                    </h3>

                                    <p className="text-slate-400 text-sm">

                                        {stock.symbol}

                                    </p>

                                    <p className="text-green-400 mt-2 font-semibold">

                                        ₹{Number(stock.currentPrice || 0).toFixed(2)}

                                    </p>

                                    <button
                                        onClick={() => handleAnalyze(stock)}
                                        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold transition"
                                    >

                                        🤖 Analyze AI

                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                <div className="lg:col-span-2">

                    {loading ? (

                        <div className="bg-slate-800 rounded-2xl p-10 text-center">

                            <h2 className="text-white text-2xl">

                                🤖 AI is analyzing...

                            </h2>

                        </div>

                    ) : recommendation ? (

                        <AIRecommendationCard
                            recommendation={recommendation}
                        />

                    ) : (

                        <div className="bg-slate-800 rounded-2xl p-10 text-center">

                            <h2 className="text-2xl text-white">

                                Select a stock to analyze

                            </h2>

                            <p className="text-slate-400 mt-3">

                                Choose any stock from the left panel to receive an AI-powered investment recommendation.

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </MainLayout>

    );

}

export default AIRecommendation;