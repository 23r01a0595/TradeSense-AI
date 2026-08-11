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

            weekday: "short",
            day: "numeric",
            month: "short",
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

        <nav className="bg-slate-900 border-b border-slate-800 px-4 md:px-8 py-4">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                    <h2 className="text-xl md:text-3xl font-bold text-white">

                        {greeting}, {userName} 👋

                    </h2>

                    <p className="text-slate-400 text-sm md:text-base mt-1">

                        {currentDate}

                    </p>

                </div>

                <div className="flex flex-wrap items-center gap-3">

                    <div className="relative flex-1 min-w-[180px]">

                        <Search
                            size={18}
                            className="absolute left-4 top-3 text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search Stocks..."
                            className="
                                bg-slate-800
                                text-white
                                pl-11
                                pr-4
                                py-2
                                rounded-xl
                                w-full
                                md:w-72
                                border
                                border-slate-700
                                focus:outline-none
                                focus:border-cyan-500
                            "
                        />

                    </div>

                    <div
                        className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold ${
                            marketOpen
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                        }`}
                    >
                        {marketOpen
                            ? "🟢 Open"
                            : "🔴 Closed"}
                    </div>

                    <button className="bg-slate-800 p-2 md:p-3 rounded-xl hover:bg-slate-700 transition">

                        <Bell
                            className="text-white"
                            size={18}
                        />

                    </button>

                    <button className="bg-slate-800 p-2 md:p-3 rounded-xl hover:bg-slate-700 transition">

                        {
                            currentHour >= 18
                                ? <Moon className="text-yellow-400" size={18} />
                                : <Sun className="text-yellow-400" size={18} />
                        }

                    </button>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;