function TransactionCard({ transaction }) {

    return (

        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        {transaction.companyName}
                    </h2>

                    <p className="text-slate-400">
                        {transaction.stockSymbol}
                    </p>

                </div>

                <span
                    className={`px-4 py-2 rounded-full font-semibold ${
                        transaction.type === "BUY"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                    }`}
                >
                    {transaction.type}
                </span>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

                <div>

                    <p className="text-slate-400">Quantity</p>

                    <h3 className="text-white text-xl">
                        {transaction.quantity}
                    </h3>

                </div>

                <div>

                    <p className="text-slate-400">Price</p>

                    <h3 className="text-green-400 text-xl">
                        ₹{transaction.price}
                    </h3>

                </div>

            </div>

            <p className="mt-6 text-slate-500 text-sm">
                {new Date(transaction.transactionTime).toLocaleString()}
            </p>

        </div>

    );

}

export default TransactionCard;