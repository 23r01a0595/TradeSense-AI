function PortfolioCard({ item }) {

    return (

        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-xl font-bold text-white">
                        {item.companyName}
                    </h2>

                    <p className="text-gray-400">
                        {item.stockSymbol}
                    </p>

                </div>

                <div className="text-right">

                    <p className="text-blue-400 font-semibold">
                        {item.quantity} Shares
                    </p>

                    <p className="text-green-400 font-semibold">
                        Avg ₹{item.averageBuyPrice.toFixed(2)}
                    </p>

                </div>

            </div>

            <div className="mt-6">

                <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                >
                    Sell Stock
                </button>

            </div>

        </div>

    );
}

export default PortfolioCard;