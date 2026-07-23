function PremiumCard({

    title,
    value,
    subtitle,
    icon,
    color = "text-white"

}) {

    return (

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-6 shadow-xl hover:border-blue-500 hover:scale-[1.02] transition-all duration-300">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-400 text-sm">

                        {title}

                    </p>

                    <h2 className={`text-3xl font-bold mt-3 ${color}`}>

                        {value}

                    </h2>

                    {subtitle && (

                        <p className="text-slate-500 mt-2">

                            {subtitle}

                        </p>

                    )}

                </div>

                <div className="text-5xl">

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default PremiumCard;