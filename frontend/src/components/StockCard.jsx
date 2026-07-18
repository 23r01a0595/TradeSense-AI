function StockCard({ stock }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white">
        {stock.companyName}
      </h2>

      <p className="text-gray-400 mt-2">
        {stock.symbol}
      </p>

      <p className="text-gray-300 mt-2">
        Sector: {stock.sector}
      </p>

      <p className="text-green-400 text-2xl font-bold mt-4">
        ₹{stock.currentPrice}
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-5">
        Buy
      </button>
    </div>
  );
}

export default StockCard;