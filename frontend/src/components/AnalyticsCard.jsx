function AnalyticsCard({

    title,
    value,
    icon,
    color = "text-white"

}) {

    return (

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all">

            <div className="flex items-center justify-between">

                <h3 className="text-slate-400 text-lg">
                    {title}
                </h3>

                <div className="text-3xl">
                    {icon}
                </div>

            </div>

            <h2 className={`mt-5 text-4xl font-bold ${color}`}>
                {value}
            </h2>

        </div>

    );

}

export default AnalyticsCard;