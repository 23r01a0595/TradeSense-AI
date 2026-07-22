import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import StockCard from "../components/StockCard";
import BuyStockModal from "../components/BuyStockModal";

import { getStocks } from "../services/stocksService";
import { buyStock } from "../services/portfolioService";
import { addToWatchlist } from "../services/watchlistService";

function Stocks() {

    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

    const fetchStocks = async () => {

        try {

            const data = await getStocks();

            setStocks(data);

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
                buyPrice: selectedStock.currentPrice
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

        } catch (error) {

            console.error(error);

            toast.error("Stock already exists in Watchlist");

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
                        Buy stocks and build your portfolio.
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {stocks.map((stock) => (

                    <StockCard
                        key={stock.id}
                        stock={stock}
                        onBuy={() => setSelectedStock(stock)}
                        onWatchlist={handleWatchlist}
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

        </MainLayout>

    );
}

export default Stocks;