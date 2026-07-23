import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import StockCard from "../components/StockCard";
import BuyStockModal from "../components/BuyStockModal";
import AIRecommendationModal from "../components/AIRecommendationModal";

import { getStocks } from "../services/stocksService";
import { buyStock } from "../services/portfolioService";
import { addToWatchlist } from "../services/watchlistService";
import { getLivePrice } from "../services/liveStockService";
import { getAIRecommendation } from "../services/aiService";

function Stocks() {

    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

    const [aiRecommendation, setAiRecommendation] = useState(null);
    const [loadingAI, setLoadingAI] = useState(false);

    const fetchStocks = async () => {

        try {

            const data = await getStocks();

            const updatedStocks = await Promise.all(

                data.map(async (stock) => {

                    try {

                        const live = await getLivePrice(stock.symbol);

                        return {

                            ...stock,
                            livePrice: live.price,
                            change: live.change,
                            changePercent: live.changePercent

                        };

                    } catch {

                        return stock;

                    }

                })

            );

            setStocks(updatedStocks);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load stocks");

        }

    };

    useEffect(() => {

        fetchStocks();

    }, []);

    const handleBuy = async (stockId, quantity) => {

        try {

            const userId = Number(localStorage.getItem("userId"));

            await buyStock({

                userId,
                stockId,
                quantity,
                buyPrice: selectedStock.livePrice ?? selectedStock.currentPrice

            });

            toast.success("Stock purchased successfully 🎉");

            setSelectedStock(null);

            fetchStocks();

        } catch (error) {

            console.error(error);

            toast.error("Failed to purchase stock");

        }

    };

    const handleWatchlist = async (stock) => {

        try {

            const userId = Number(localStorage.getItem("userId"));

            await addToWatchlist({

                userId,
                stockId: stock.id

            });

            toast.success(`${stock.companyName} added to Watchlist ⭐`);

        } catch {

            toast.error("Stock already exists in Watchlist");

        }

    };

    const handleAnalyze = async (stock) => {

        try {

            setLoadingAI(true);

            const recommendation = await getAIRecommendation({

                companyName: stock.companyName,
                sector: stock.sector,
                currentPrice: stock.livePrice ?? stock.currentPrice

            });

            setAiRecommendation(recommendation);

        } catch (error) {

            console.error(error);

            toast.error("Failed to generate AI recommendation");

        } finally {

            setLoadingAI(false);

        }

    };

    return (

        <MainLayout>

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-4xl font-bold text-white">
                        Market Stocks
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Live market prices with AI-powered investment insights.
                    </p>

                </div>

            </div>

            {loadingAI && (

                <div className="mb-6 text-center text-blue-400 font-semibold">

                    🤖 AI is analyzing the selected stock...

                </div>

            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {stocks.map((stock) => (

                    <StockCard

                        key={stock.id}
                        stock={stock}

                        onBuy={() => setSelectedStock(stock)}

                        onWatchlist={handleWatchlist}

                        onAnalyze={handleAnalyze}

                    />

                ))}

            </div>

            <AnimatePresence>

                {selectedStock && (

                    <BuyStockModal

                        stock={selectedStock}

                        onClose={() => setSelectedStock(null)}

                        onBuy={handleBuy}

                    />

                )}

            </AnimatePresence>

            <AnimatePresence>

                {aiRecommendation && (

                    <AIRecommendationModal

                        recommendation={aiRecommendation}

                        onClose={() => setAiRecommendation(null)}

                    />

                )}

            </AnimatePresence>

        </MainLayout>

    );

}

export default Stocks;