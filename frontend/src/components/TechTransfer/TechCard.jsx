const TechCard = ({ item, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200 overflow-hidden"
      onClick={() => onClick(item)}
    >
      {item.imageUrl && (
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {item.title}
          </h3>
          {item.score > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {item.score.toFixed(1)}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.code && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {item.code}
            </span>
          )}
          {item.center && (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
              {item.center}
            </span>
          )}
          {item.category && (
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
              {item.category}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-blue-600 text-sm font-medium">View Details →</span>
          {item.tags && (
            <span className="text-gray-400 text-xs">
              {item.tags}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechCard;