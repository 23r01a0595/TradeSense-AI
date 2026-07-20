import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import PortfolioCard from "../components/PortfolioCard";
import { getPortfolio } from "../services/portfolioService";
import SummaryCard from "../components/SummaryCard";
import SellStockModal from "../components/SellStockModal";
import { sellStock } from "../services/portfolioService";

import {
    Briefcase,
    Package,
    IndianRupee,
    TrendingUp
} from "lucide-react";
function Portfolio() {

    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStock, setSelectedStock] = useState(null);

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

useEffect(() => {

    loadPortfolio();
}, []);
    
    const handleSell = async (quantity) => {

    try {

        const userId = Number(localStorage.getItem("userId"));

        await sellStock({
            userId,
            stockId: selectedStock.stockId,
            quantity,
            buyPrice: selectedStock.averageBuyPrice
        });

        toast.success("Stock Sold Successfully");

        setSelectedStock(null);

        loadPortfolio();

    } catch (error) {

        console.error(error);

        toast.error("Unable to sell stock");

    }

};

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

            {/* Summary Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

    <SummaryCard
        title="Holdings"
        value={totalHoldings}
        color="text-blue-400"
        icon={Briefcase}
    />

    <SummaryCard
        title="Total Shares"
        value={totalShares}
        color="text-purple-400"
        icon={Package}
    />

    <SummaryCard
        title="Investment"
        value={`₹${totalInvestment}`}
        color="text-green-400"
        icon={IndianRupee}
    />

    <SummaryCard
        title="Growth"
        value="0%"
        color="text-orange-400"
        icon={TrendingUp}
    />

</div>

{/* Portfolio Cards */}

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
    onSell={() => setSelectedStock(item)}
/>

        ))}

    </div>

)}

            
{selectedStock && (

    <SellStockModal
        item={selectedStock}
        onClose={() => setSelectedStock(null)}
        onSell={handleSell}
    />

)}
        </MainLayout>

    );
}

export default Portfolio;