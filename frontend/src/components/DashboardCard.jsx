function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;