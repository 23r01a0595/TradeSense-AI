import { Star, TrendingUp, TrendingDown, Bot } from "lucide-react";

function StockCard({
    stock,
    onBuy,
    onWatchlist,
    onAnalyze
}) {

    const livePrice = stock.livePrice ?? stock.currentPrice;
    const change = stock.change ?? 0;
    const changePercent = stock.changePercent ?? 0;

    const isPositive = change >= 0;

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        {stock.companyName}
                    </h2>

                    <p className="text-gray-400 mt-1">
                        {stock.symbol}
                    </p>

                </div>

                <button
                    onClick={() => onWatchlist(stock)}
                    className="p-2 rounded-full hover:bg-slate-700 transition"
                >
                    <Star
                        size={22}
                        className="text-yellow-400"
                    />
                </button>

            </div>

            <p className="text-gray-400 mt-5">
                Sector
            </p>

            <p className="text-white font-semibold">
                {stock.sector}
            </p>

            <div className="mt-6">

                <p className="text-gray-400">
                    Live Price
                </p>

                <h2 className="text-3xl font-bold text-green-400 mt-1">
                    ₹{Number(livePrice).toFixed(2)}
                </h2>

                <div
                    className={`flex items-center gap-2 mt-3 ${
                        isPositive ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {isPositive
                        ? <TrendingUp size={18}/>
                        : <TrendingDown size={18}/>
                    }

                    <span className="font-semibold">
                        {change.toFixed(2)} ({changePercent.toFixed(2)}%)
                    </span>

                </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

                <button
                    onClick={onBuy}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 text-white py-3 rounded-xl font-semibold"
                >
                    Buy Stock
                </button>

                <button
                    onClick={() => onAnalyze(stock)}
                    className="bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                    <Bot size={18} />

                    AI Analyze
                </button>

            </div>

        </div>

    );

}

export default StockCard;