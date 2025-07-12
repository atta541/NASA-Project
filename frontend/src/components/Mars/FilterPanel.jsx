// src/components/Mars/FilterPanel.jsx
import React from 'react';

const FilterPanel = ({ filters, cameras, onFilterChange, onSearch, selectedRover }) => {
  const handleInputChange = (field, value) => {
    // Clear the opposite field when one is selected
    if (field === 'sol' && value) {
      onFilterChange({ [field]: value, earth_date: '' });
    } else if (field === 'earth_date' && value) {
      onFilterChange({ [field]: value, sol: '' });
    } else {
      onFilterChange({ [field]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const clearFilters = () => {
    onFilterChange({
      sol: '',
      earth_date: '',
      camera: '',
      page: 1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Search Filters
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Sol Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sol (Martian Day)
          </label>
          <input
            type="number"
            value={filters.sol}
            onChange={(e) => handleInputChange('sol', e.target.value)}
            placeholder="e.g., 1000"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
          />
          <p className="text-xs text-gray-500 mt-1">
            Mars mission day number
          </p>
        </div>

        {/* Earth Date Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Earth Date
          </label>
          <input
            type="date"
            value={filters.earth_date}
            onChange={(e) => handleInputChange('earth_date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="2004-01-01"
            max={new Date().toISOString().split('T')[0]}
          />
          <p className="text-xs text-gray-500 mt-1">
            Use either Sol or Earth Date
          </p>
        </div>

        {/* Camera Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Camera
          </label>
          <select
            value={filters.camera}
            onChange={(e) => handleInputChange('camera', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Cameras</option>
            {cameras.map((camera) => (
              <option key={camera.id} value={camera.id}>
                {camera.id} - {camera.name}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Search Photos
          </button>
          
          <button
            type="button"
            onClick={clearFilters}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
          >
            Clear Filters
          </button>
        </div>
      </form>

      {/* Search Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">
          Search Tips:
        </h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Use either Sol or Earth Date, not both</li>
          <li>• Try Sol 1000 for {selectedRover}</li>
          <li>• Leave camera blank to see all cameras</li>
          <li>• Some days may have no photos</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPanel;