function StockCard({ stock, onBuy }) {
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

      <button
  onClick={onBuy}
  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 text-white py-3 rounded-xl font-semibold shadow-lg"
>
  Buy Stock
</button>
    </div>
  );
}

export default StockCard;