import { useMemo } from "react";
import {
    Bell,
    Search,
    Sun,
    Moon
} from "lucide-react";

function Navbar() {

    const storedName = localStorage.getItem("fullName");

const userName =
    storedName && storedName !== "undefined"
        ? storedName
        : "Manikanta";

    const currentDate = useMemo(() => {

        return new Date().toLocaleDateString("en-IN", {

            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"

        });

    }, []);

    const currentHour = new Date().getHours();

    const greeting =
        currentHour < 12
            ? "Good Morning"
            : currentHour < 17
            ? "Good Afternoon"
            : "Good Evening";

    const marketOpen =
        currentHour >= 9 && currentHour < 16;

    return (

        <nav className="h-20 bg-slate-900 border-b border-slate-800 px-8 flex items-center justify-between">

            <div>

                <h2 className="text-3xl font-bold text-white">

                    {greeting}, {userName} 👋

                </h2>

                <p className="text-slate-400 mt-1">

                    {currentDate}

                </p>

            </div>

            <div className="flex items-center gap-5">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-3 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search Stocks..."
                        className="bg-slate-800 text-white pl-11 pr-4 py-2 rounded-xl w-72 border border-slate-700 focus:outline-none focus:border-cyan-500"
                    />

                </div>

                <div
                    className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                        marketOpen
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                    }`}
                >
                    {marketOpen ? "🟢 Market Open" : "🔴 Market Closed"}
                </div>

                <button className="bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition">

                    <Bell className="text-white" size={20} />

                </button>

                <button className="bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition">

                    {currentHour >= 18
                        ? <Moon className="text-yellow-400" size={20}/>
                        : <Sun className="text-yellow-400" size={20}/>
                    }

                </button>


            </div>

        </nav>

    );

}

export default Navbar;