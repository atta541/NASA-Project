const StatsOverview = ({ stats }) => {
  const statItems = [
    { label: 'Total Technologies', value: stats.total, color: 'bg-blue-500', icon: '🚀' },
    { label: 'Patents', value: stats.patents, color: 'bg-green-500', icon: '📋' },
    { label: 'Patents Issued', value: stats.patentsIssued, color: 'bg-purple-500', icon: '✅' },
    { label: 'Software', value: stats.software, color: 'bg-orange-500', icon: '💻' },
    { label: 'Spinoffs', value: stats.spinoffs, color: 'bg-red-500', icon: '🌟' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className={`text-3xl font-bold text-white p-2 rounded-lg ${item.color} mb-2`}>
            {item.value}
          </div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;