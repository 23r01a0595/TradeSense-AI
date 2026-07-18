import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaMinus, FaPlus } from "react-icons/fa";

function BuyStockModal({ stock, onClose, onBuy }) {
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    return quantity * stock.currentPrice;
  }, [quantity, stock]);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-slate-800 rounded-3xl shadow-2xl w-[420px] p-8 border border-slate-700"
      >

        <div className="flex items-center gap-3 mb-6">
          <FaChartLine className="text-green-400 text-3xl" />
          <div>
            <h2 className="text-2xl font-bold text-white">
              Buy Stock
            </h2>
            <p className="text-slate-400">
              {stock.companyName} ({stock.symbol})
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 mb-6">
          <p className="text-slate-400 text-sm">
            Current Price
          </p>

          <h3 className="text-3xl font-bold text-green-400 mt-2">
            ₹{stock.currentPrice}
          </h3>
        </div>

        <div className="mb-6">
          <p className="text-slate-300 mb-3">
            Quantity
          </p>

          <div className="flex items-center justify-center gap-5">

            <button
              onClick={decrease}
              className="bg-slate-700 hover:bg-slate-600 w-12 h-12 rounded-full flex justify-center items-center transition"
            >
              <FaMinus className="text-white" />
            </button>

            <span className="text-3xl font-bold text-white w-16 text-center">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="bg-green-600 hover:bg-green-500 w-12 h-12 rounded-full flex justify-center items-center transition"
            >
              <FaPlus className="text-white" />
            </button>

          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 mb-7">
          <p className="text-slate-400 text-sm">
            Total Investment
          </p>

          <h3 className="text-3xl font-bold text-blue-400 mt-2">
            ₹{total.toFixed(2)}
          </h3>
        </div>

        <div className="flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition"
          >
            Cancel
          </button>

          <button
            onClick={() => onBuy(stock.id, quantity)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition transform text-white font-bold shadow-lg"
          >
            Buy Stock
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default BuyStockModal;