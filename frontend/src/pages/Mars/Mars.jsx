// src/pages/Mars.jsx
import React, { useState, useEffect } from 'react';
import useMars from '../../hooks/useMars';
import RoverSelector from '../../components/Mars/RoverSelector';
import FilterPanel from '../../components/Mars/FilterPanel';
import PhotoGrid from '../../components/Mars/PhotoGrid';
import RoverManifest from '../../components/Mars/RoverManifest';
import LoadingSpinner from '../../components/Mars/LoadingSpinner';
import ErrorMessage from '../../components/Mars/ErrorMessage';

const Mars = () => {
  const { photos, manifest, loading, error, fetchRoverPhotos, fetchRoverManifest, clearError } = useMars();
  
  const [selectedRover, setSelectedRover] = useState('curiosity');
  const [filters, setFilters] = useState({
    sol: '',
    earth_date: '',
    camera: '',
    page: 1
  });
  const [activeTab, setActiveTab] = useState('photos');

  const rovers = [
    { id: 'curiosity', name: 'Curiosity', status: 'Active' },
    { id: 'opportunity', name: 'Opportunity', status: 'Complete' },
    { id: 'spirit', name: 'Spirit', status: 'Complete' }
  ];

  const cameras = [
    { id: 'FHAZ', name: 'Front Hazard Avoidance Camera' },
    { id: 'RHAZ', name: 'Rear Hazard Avoidance Camera' },
    { id: 'MAST', name: 'Mast Camera' },
    { id: 'CHEMCAM', name: 'Chemistry and Camera Complex' },
    { id: 'MAHLI', name: 'Mars Hand Lens Imager' },
    { id: 'MARDI', name: 'Mars Descent Imager' },
    { id: 'NAVCAM', name: 'Navigation Camera' },
    { id: 'PANCAM', name: 'Panoramic Camera' },
    { id: 'MINITES', name: 'Miniature Thermal Emission Spectrometer' }
  ];

  // Load initial data
  useEffect(() => {
    if (selectedRover) {
      if (activeTab === 'photos') {
        handleSearch();
      } else {
        fetchRoverManifest(selectedRover);
      }
    }
  }, [selectedRover, activeTab]);

  const handleRoverChange = (rover) => {
    setSelectedRover(rover);
    setFilters(prev => ({ ...prev, page: 1 }));
    clearError();
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handleSearch = async () => {
    if (!selectedRover) return;
    
    const searchParams = {};
    
    if (filters.sol) searchParams.sol = filters.sol;
    if (filters.earth_date) searchParams.earth_date = filters.earth_date;
    if (filters.camera) searchParams.camera = filters.camera;
    if (filters.page) searchParams.page = filters.page;
    
    try {
      await fetchRoverPhotos(selectedRover, searchParams);
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  const handlePageChange = (page) => {
    setFilters(prev => ({ ...prev, page }));
    const searchParams = { ...filters, page };
    fetchRoverPhotos(selectedRover, searchParams);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mars Rover Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the Red Planet through the eyes of NASA's Mars rovers. 
            View stunning photographs and mission data from Curiosity, Opportunity, and Spirit.
          </p>
        </div>

        {/* Rover Selection */}
        <RoverSelector 
          rovers={rovers}
          selectedRover={selectedRover}
          onRoverChange={handleRoverChange}
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'photos'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('manifest')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'manifest'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Mission Data
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <ErrorMessage 
            message={error} 
            onClose={clearError}
          />
        )}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner />}

        {/* Content */}
        {!loading && (
          <>
            {activeTab === 'photos' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filter Panel */}
                <div className="lg:col-span-1">
                  <FilterPanel
                    filters={filters}
                    cameras={cameras}
                    onFilterChange={handleFilterChange}
                    onSearch={handleSearch}
                    selectedRover={selectedRover}
                  />
                </div>

                {/* Photo Grid */}
                <div className="lg:col-span-3">
                  <PhotoGrid
                    photos={photos}
                    loading={loading}
                    onPageChange={handlePageChange}
                    currentPage={filters.page}
                  />
                </div>
              </div>
            )}

            {activeTab === 'manifest' && (
              <RoverManifest
                manifest={manifest}
                roverName={selectedRover}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Mars;