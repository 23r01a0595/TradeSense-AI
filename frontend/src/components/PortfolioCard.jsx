import { Landmark, TrendingUp } from "lucide-react";

function PortfolioCard({ item, onSell })  {

    const investment =
        (item.quantity * item.averageBuyPrice).toFixed(2);

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">

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

                    <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full">

                        <TrendingUp size={16} />

                        <span className="text-sm font-semibold">
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
                            Average Price
                        </span>

                        <span className="text-green-400 font-semibold">
                            ₹{item.averageBuyPrice.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Investment
                        </span>

                        <span className="text-blue-400 font-semibold">
                            ₹{investment}
                        </span>

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <button
                        className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold transition"
                    >
                        Buy More
                    </button>

                    <button
    onClick={onSell}
    className="bg-red-500 hover:bg-red-600 rounded-xl py-3 text-white font-semibold transition"
>
    Sell Stock
</button>

                </div>

            </div>

        </div>

    );
}

export default PortfolioCard;