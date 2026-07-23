import { motion } from "framer-motion";

function AIRecommendationModal({ recommendation, onClose }) {

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-slate-900 rounded-2xl p-8 w-[500px] border border-slate-700"
            >

                <h2 className="text-3xl font-bold text-white mb-6">
                    🤖 AI Stock Analysis
                </h2>

                <div className="space-y-4">

                    <div>
                        <p className="text-slate-400">Recommendation</p>
                        <h3 className="text-green-400 text-2xl font-bold">
                            {recommendation.recommendation}
                        </h3>
                    </div>

                    <div>
                        <p className="text-slate-400">Confidence</p>
                        <h3 className="text-white">
                            {recommendation.confidence}
                        </h3>
                    </div>

                    <div>
                        <p className="text-slate-400">Risk</p>
                        <h3 className="text-red-400">
                            {recommendation.risk}
                        </h3>
                    </div>

                    <div>
                        <p className="text-slate-400">Reason</p>

                        <p className="text-white leading-7">
                            {recommendation.reason}
                        </p>

                    </div>

                </div>

                <button
                    onClick={onClose}
                    className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
                >
                    Close
                </button>

            </motion.div>

        </div>

    );

}

export default AIRecommendationModal;