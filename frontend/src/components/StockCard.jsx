import { Star } from "lucide-react";

function StockCard({ stock, onBuy, onWatchlist }) {

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
                    Current Price
                </p>

                <h2 className="text-3xl font-bold text-green-400 mt-1">
                    ₹{stock.currentPrice.toFixed(2)}
                </h2>

            </div>

            <button
                onClick={onBuy}
                className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 text-white py-3 rounded-xl font-semibold shadow-lg"
            >
                Buy Stock
            </button>

        </div>

    );
}

export default StockCard;