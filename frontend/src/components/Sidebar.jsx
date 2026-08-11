import { useState } from "react";
import {
    LayoutDashboard,
    TrendingUp,
    Briefcase,
    Star,
    ReceiptText,
    Bot,
    LogOut,
    Menu,
    X
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const storedName = localStorage.getItem("fullName");

    const userName =
        storedName &&
        storedName !== "undefined" &&
        storedName !== "null"
            ? storedName
            : "Manikanta";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");

        navigate("/");
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },
        {
            name: "Market",
            path: "/stocks",
            icon: TrendingUp
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            icon: Briefcase
        },
        {
            name: "Watchlist",
            path: "/watchlist",
            icon: Star
        },
        {
            name: "Transactions",
            path: "/transactions",
            icon: ReceiptText
        },
        {
            name: "AI Insights",
            path: "/ai",
            icon: Bot
        }
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-[60] lg:hidden bg-slate-800 p-2 rounded-lg text-white border border-slate-700"
            >
                <Menu size={24} />
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0
                    h-screen w-72
                    bg-slate-950 border-r border-slate-800
                    flex flex-col justify-between
                    z-50
                    transition-transform duration-300
                    overflow-y-auto
                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                    lg:translate-x-0
                `}
            >
                <div>
                    {/* Mobile Close */}
                    <div className="lg:hidden flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="p-6 border-b border-slate-800">
                        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            TradeSense AI
                        </h1>

                        <p className="text-slate-400 mt-2 text-sm">
                            AI Powered Trading Platform
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-6 px-4">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            const active =
                                location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition-all duration-300 ${
                                        active
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`}
                                >
                                    <Icon size={20} />

                                    <span className="font-medium">
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User Section */}
                <div className="p-5 border-t border-slate-800">
                    <div className="bg-slate-900 rounded-xl p-4 mb-4">
                        <p className="text-white font-semibold">
                            {userName}
                        </p>

                        <p className="text-green-400 text-sm mt-1">
                            ● Online
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;