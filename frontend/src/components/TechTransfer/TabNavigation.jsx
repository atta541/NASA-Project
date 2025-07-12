const TabNavigation = ({ activeTab, setActiveTab, stats }) => {
  const tabs = [
    { id: 'patents', label: 'Patents', count: stats.patents },
    { id: 'patentsIssued', label: 'Patents Issued', count: stats.patentsIssued },
    { id: 'software', label: 'Software', count: stats.software },
    { id: 'spinoffs', label: 'Spinoffs', count: stats.spinoffs }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
          }`}
        >
          {tab.label}
          <span className="ml-2 text-sm opacity-75">({tab.count})</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;