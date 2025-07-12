// src/pages/Neo.jsx
import React, { useState } from 'react';
import { useNeoFeed } from '../../hooks/useNeo';
import NeoFilters from '../../components/Neo/NeoFilters';
import NeoStats from '../../components/Neo/NeoStats';
import NeoCard from '../../components/Neo/NeoCard';

const Neo = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [hazardousOnly, setHazardousOnly] = useState(false);

  const { data, loading, error } = useNeoFeed(
    searchTrigger ? startDate : null, 
    searchTrigger ? endDate : null
  );

  const handleSearch = () => {
    setSearchTrigger(true);
  };

  const getAllNeos = () => {
    if (!data?.near_earth_objects) return [];
    
    const allNeos = Object.values(data.near_earth_objects).flat();
    
    if (hazardousOnly) {
      return allNeos.filter(neo => neo.is_potentially_hazardous_asteroid);
    }
    
    return allNeos;
  };

  const neos = getAllNeos();

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Near Earth Objects (NEO)
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover and explore near-Earth objects tracked by NASA. 
            Search for asteroids and comets that come close to Earth's orbit.
          </p>
        </div>

        {/* Filters */}
        <NeoFilters
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onSearch={handleSearch}
          loading={loading}
          hazardousOnly={hazardousOnly}
          onHazardousToggle={setHazardousOnly}
        />

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading NEO data...</p>
          </div>
        )}

        {/* Results */}
        {data && !loading && (
          <>
            <NeoStats data={data} />
            
            {neos.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {hazardousOnly ? 'Potentially Hazardous Asteroids' : 'Near Earth Objects'} 
                  ({neos.length})
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {neos.map((neo) => (
                    <NeoCard key={neo.id} neo={neo} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  {hazardousOnly 
                    ? 'No potentially hazardous asteroids found for the selected date range.'
                    : 'No near-Earth objects found for the selected date range.'
                  }
                </p>
              </div>
            )}
          </>
        )}

        {/* Welcome Message */}
        {!searchTrigger && !loading && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🌍</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to NEO Explorer
              </h2>
              <p className="text-gray-600 mb-6">
                Select a date range above to discover near-Earth objects 
                and learn about asteroids that pass close to our planet.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> You can search up to 7 days in advance 
                  and filter for potentially hazardous asteroids.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Neo;