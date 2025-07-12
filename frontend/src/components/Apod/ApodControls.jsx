import { useState } from 'react';

const ApodControls = ({ onFetchSingle, onFetchRange, loading }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [viewMode, setViewMode] = useState('single');

  const today = new Date().toISOString().split('T')[0];

  const handleSingleDateFetch = () => {
    onFetchSingle(selectedDate);
  };

  const handleRangeFetch = () => {
    onFetchRange(startDate, endDate);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setViewMode('single')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'single'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Single Date
        </button>
        <button
          onClick={() => setViewMode('range')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'range'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Date Range
        </button>
      </div>

      {viewMode === 'single' ? (
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              max={today}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={handleSingleDateFetch}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md transition-colors"
          >
            {loading ? 'Loading...' : 'Get APOD'}
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={today}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex-1 min-w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              max={today}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={handleRangeFetch}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md transition-colors"
          >
            {loading ? 'Loading...' : 'Get Range'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ApodControls;