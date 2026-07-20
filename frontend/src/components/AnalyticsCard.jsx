function AnalyticsCard({ title, value, color = "text-white" }) {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

            <p className="text-slate-400 text-sm">
                {title}
            </p>

            <h2 className={`text-3xl font-bold mt-3 ${color}`}>
                {value}
            </h2>

        </div>
    );
}

export default AnalyticsCard;