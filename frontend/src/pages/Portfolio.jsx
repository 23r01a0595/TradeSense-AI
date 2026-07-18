import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import PortfolioCard from "../components/PortfolioCard";
import { getPortfolio } from "../services/portfolioService";

function Portfolio() {

    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadPortfolio = async () => {

            try {

                const userId = Number(localStorage.getItem("userId"));

                const data = await getPortfolio(userId);

                setPortfolio(data);

            } catch (error) {

                console.error(error);

                toast.error("Failed to load portfolio");

            } finally {

                setLoading(false);
            }
        };

        loadPortfolio();

    }, []);

    const totalHoldings = portfolio.length;

    const totalShares = portfolio.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalInvestment = portfolio
        .reduce(
            (sum, item) =>
                sum + item.quantity * item.averageBuyPrice,
            0
        )
        .toFixed(2);

    if (loading) {

        return (

            <MainLayout>

                <h1 className="text-4xl font-bold text-white mb-8">
                    My Portfolio
                </h1>

                <p className="text-gray-400">
                    Loading portfolio...
                </p>

            </MainLayout>

        );
    }

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-white">
                    My Portfolio
                </h1>

                <p className="text-gray-400 mt-2">
                    Track your investments.
                </p>

            </div>

            {/* Summary Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">

                    <h3 className="text-gray-400 text-sm">
                        Holdings
                    </h3>

                    <p className="text-3xl font-bold text-white mt-2">
                        {totalHoldings}
                    </p>

                </div>

                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">

                    <h3 className="text-gray-400 text-sm">
                        Total Shares
                    </h3>

                    <p className="text-3xl font-bold text-blue-400 mt-2">
                        {totalShares}
                    </p>

                </div>

                <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">

                    <h3 className="text-gray-400 text-sm">
                        Investment
                    </h3>

                    <p className="text-3xl font-bold text-green-400 mt-2">
                        ₹{totalInvestment}
                    </p>

                </div>

            </div>

            {portfolio.length === 0 ? (

                <div className="bg-slate-800 rounded-2xl p-10 text-center border border-slate-700">

                    <h2 className="text-2xl font-bold text-white">
                        No Investments Yet
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Buy some stocks to build your portfolio.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {portfolio.map((item) => (

                        <PortfolioCard
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            )}

        </MainLayout>

    );
}

export default Portfolio;