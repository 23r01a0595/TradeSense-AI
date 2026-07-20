import { useState } from "react";
import { X } from "lucide-react";

function SellStockModal({ item, onClose, onSell }) {

    const [quantity, setQuantity] = useState(1);

    return (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-slate-800 rounded-2xl w-[420px] p-8 border border-slate-700">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold text-white">
                        Sell Stock
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        <X />
                    </button>

                </div>

                <h3 className="text-xl text-white">
                    {item.companyName}
                </h3>

                <p className="text-slate-400">
                    {item.stockSymbol}
                </p>

                <p className="mt-6 text-slate-300">
                    Available Shares
                </p>

                <h2 className="text-3xl font-bold text-blue-400">
                    {item.quantity}
                </h2>

                <div className="mt-8">

                    <label className="text-slate-300">
                        Quantity to Sell
                    </label>

                    <input
                        type="number"
                        min="1"
                        max={item.quantity}
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(Number(e.target.value))
                        }
                        className="w-full mt-3 p-3 rounded-xl bg-slate-900 text-white border border-slate-700"
                    />

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <button
                        onClick={onClose}
                        className="bg-slate-700 hover:bg-slate-600 rounded-xl py-3 text-white"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onSell(quantity)}
                        className="bg-red-500 hover:bg-red-600 rounded-xl py-3 text-white font-semibold"
                    >
                        Sell
                    </button>

                </div>

            </div>

        </div>

    );
}

export default SellStockModal;