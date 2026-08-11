import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
    return (
        <div className="flex bg-slate-950 min-h-screen overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">

                <Navbar />

                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default MainLayout;