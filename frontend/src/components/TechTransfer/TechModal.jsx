const TechModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          {item.imageUrl && (
            <div className="mb-6">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <div className="space-y-2">
                <p><strong>Code:</strong> {item.code || 'N/A'}</p>
                <p><strong>Center:</strong> {item.center || 'N/A'}</p>
                <p><strong>Category:</strong> {item.category || 'N/A'}</p>
                <p><strong>Score:</strong> {item.score || 'N/A'}</p>
                {item.tags && <p><strong>Tags:</strong> {item.tags}</p>}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Additional Info</h3>
              <div className="space-y-2">
                {item.secondaryCode && <p><strong>Secondary Code:</strong> {item.secondaryCode}</p>}
                {item.field1 && <p><strong>Field 1:</strong> {item.field1}</p>}
                {item.field2 && <p><strong>Field 2:</strong> {item.field2}</p>}
                {item.field3 && <p><strong>Field 3:</strong> {item.field3}</p>}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechModal;