// pages/Tech.jsx
import React, { useState } from 'react';
import { useTechTransfer } from '../hooks/useTechTransfer';
import SearchBar from '../components/TechTransfer/SearchBar';
import TabNavigation from '../components/TechTransfer/TabNavigation';
import TechCard from '../components/TechTransfer/TechCard';
import TechModal from '../components/TechTransfer/TechModal';
import LoadingSpinner from '../components/TechTransfer/LoadingSpinner';
import ErrorMessage from '../components/TechTransfer/ErrorMessage';
import StatsOverview from '../components/TechTransfer/StatsOverview';
import DataCharts from '../components/TechTransfer/DataCharts';
const Tech = () => {
  const {
    data,
    loading,
    error,
    searchQuery,
    activeTab,
    setActiveTab,
    handleSearch,
    getActiveData,
    getDataStats,
    refetch
  } = useTechTransfer();

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchQuery);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSearchSubmit = (query) => {
    handleSearch(query);
  };

  const stats = getDataStats();
  const activeData = getActiveData();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            NASA Tech Transfer
          </h1>
          <ErrorMessage message={error} onRetry={() => refetch()} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            NASA Tech Transfer
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore NASA's innovative technologies, patents, software, and spinoffs that are available for licensing and commercialization.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar
          onSearch={handleSearchSubmit}
          value={searchInput}
          onChange={setSearchInput}
          placeholder="Search technologies, patents, software..."
        />

        {/* Statistics Overview */}
        <StatsOverview stats={stats} />

        {/* Data Visualization */}
        {stats.total > 0 && <DataCharts data={data} />}

        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          stats={stats}
        />

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Results */}
        {!loading && activeData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeData.map((item) => (
              <TechCard
                key={item.id}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && activeData.length === 0 && stats.total === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No Technologies Found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all categories.</p>
          </div>
        )}

        {/* Modal */}
        <TechModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Tech;