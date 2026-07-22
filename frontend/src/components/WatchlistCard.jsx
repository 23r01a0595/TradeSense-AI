import { Trash2, Star } from "lucide-react";

function WatchlistCard({ stock, onRemove }) {

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <div className="flex items-center gap-2">

                        <Star
                            size={20}
                            className="text-yellow-400 fill-yellow-400"
                        />

                        <h2 className="text-2xl font-bold text-white">
                            {stock.companyName}
                        </h2>

                    </div>

                    <p className="text-slate-400 mt-1">
                        {stock.stockSymbol}
                    </p>

                </div>

                <button
                    onClick={() => onRemove(stock.stockId)}
                    className="text-red-400 hover:text-red-500 transition"
                >
                    <Trash2 size={22} />
                </button>

            </div>

            <div className="mt-6 space-y-3">

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Sector
                    </span>

                    <span className="text-white">
                        {stock.sector}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Current Price
                    </span>

                    <span className="text-green-400 font-semibold">
                        ₹{stock.currentPrice.toFixed(2)}
                    </span>

                </div>

            </div>

        </div>

    );
}

export default WatchlistCard;