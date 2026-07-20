import { Landmark, TrendingUp, TrendingDown } from "lucide-react";

function PortfolioCard({ item, onSell }) {

    const investment = item.quantity * item.averageBuyPrice;

    const currentValue = item.quantity * item.currentPrice;

    const profit = currentValue - investment;

    const profitColor =
        profit >= 0 ? "text-green-400" : "text-red-400";

    const ProfitIcon =
        profit >= 0 ? TrendingUp : TrendingDown;

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300">

            <div className="p-6">

                <div className="flex justify-between items-start">

                    <div>

                        <div className="flex items-center gap-2">

                            <Landmark
                                size={22}
                                className="text-blue-400"
                            />

                            <h2 className="text-2xl font-bold text-white">
                                {item.companyName}
                            </h2>

                        </div>

                        <p className="text-slate-400 mt-1">
                            {item.stockSymbol}
                        </p>

                    </div>

                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">

                        <TrendingUp
                            size={16}
                            className="text-green-400"
                        />

                        <span className="text-green-400 text-sm font-semibold">
                            ACTIVE
                        </span>

                    </div>

                </div>

                <div className="mt-8 space-y-4">

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Shares
                        </span>

                        <span className="text-white font-semibold">
                            {item.quantity}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Avg Price
                        </span>

                        <span className="text-green-400 font-semibold">
                            ₹{item.averageBuyPrice.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Current Price
                        </span>

                        <span className="text-blue-400 font-semibold">
                            ₹{item.currentPrice.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Investment
                        </span>

                        <span className="text-white font-semibold">
                            ₹{investment.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Current Value
                        </span>

                        <span className="text-white font-semibold">
                            ₹{currentValue.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between items-center">

                        <span className="text-slate-400">
                            Profit / Loss
                        </span>

                        <div className={`flex items-center gap-2 ${profitColor}`}>

                            <ProfitIcon size={18} />

                            <span className="font-bold">
                                ₹{profit.toFixed(2)}
                            </span>

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
                    >
                        Buy More
                    </button>

                    <button
                        onClick={onSell}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-semibold transition"
                    >
                        Sell Stock
                    </button>

                </div>

            </div>

        </div>

    );
}

export default PortfolioCard;