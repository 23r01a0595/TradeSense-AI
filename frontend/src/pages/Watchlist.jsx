import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import WatchlistCard from "../components/WatchlistCard";

import {
    getWatchlist,
    removeFromWatchlist
} from "../services/watchlistService";

function Watchlist() {

    const [watchlist, setWatchlist] = useState([]);

    const userId = Number(localStorage.getItem("userId"));

    const loadWatchlist = async () => {

        try {

            const data = await getWatchlist(userId);

            setWatchlist(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load watchlist");

        }

    };

    useEffect(() => {

        loadWatchlist();

    }, []);

    const handleRemove = async (stockId) => {

        try {

            await removeFromWatchlist(userId, stockId);

            toast.success("Removed from Watchlist");

            loadWatchlist();

        } catch (error) {

            console.error(error);

            toast.error("Unable to remove stock");

        }

    };

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-white">
                    My Watchlist
                </h1>

                <p className="text-slate-400 mt-2">
                    Track your favourite stocks.
                </p>

            </div>

            {watchlist.length === 0 ? (

                <div className="bg-slate-800 rounded-2xl p-10 text-center">

                    <h2 className="text-2xl text-white font-bold">
                        No Stocks Added
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Add stocks from the Market page.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {watchlist.map((stock) => (

                        <WatchlistCard
                            key={stock.id}
                            stock={stock}
                            onRemove={handleRemove}
                        />

                    ))}

                </div>

            )}

        </MainLayout>

    );
}

export default Watchlist;