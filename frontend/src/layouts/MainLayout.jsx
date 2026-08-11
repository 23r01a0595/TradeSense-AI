import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Sidebar />

            <div className="lg:ml-72 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;