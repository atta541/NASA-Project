import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DataCharts = ({ data }) => {
  
  const categoryData = [
    { name: 'Patents', value: data.patents.length, color: '#3B82F6' },
    { name: 'Patents Issued', value: data.patentsIssued.length, color: '#8B5CF6' },
    { name: 'Software', value: data.software.length, color: '#F59E0B' },
    { name: 'Spinoffs', value: data.spinoffs.length, color: '#EF4444' }
  ];

  
  const getCenterData = () => {
    const centers = {};
    Object.values(data).flat().forEach(item => {
      if (item.center) {
        centers[item.center] = (centers[item.center] || 0) + 1;
      }
    });
    return Object.entries(centers)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10); 
  };

  const centerData = getCenterData();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Data Visualization</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Distribution Pie Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Technology Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Centers Bar Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top NASA Centers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={centerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DataCharts;