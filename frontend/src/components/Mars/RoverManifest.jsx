// src/components/Mars/RoverManifest.jsx
import React from 'react';

const RoverManifest = ({ manifest, roverName }) => {
  if (!manifest) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Mission Data</h3>
        <p className="text-gray-600">
          Unable to load mission manifest for {roverName}.
        </p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined) return 'N/A';
    return num.toLocaleString();
  };

  const calculateMissionDuration = (landingDate, maxDate) => {
    if (!landingDate || !maxDate) return 'N/A';
    
    const landing = new Date(landingDate);
    const max = new Date(maxDate);
    const diffTime = Math.abs(max - landing);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 365) {
      const years = Math.floor(diffDays / 365);
      const remainingDays = diffDays % 365;
      return `${years} year${years > 1 ? 's' : ''} ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    }
    
    return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white capitalize">
            {manifest.name} Mission Manifest
          </h2>
        </div>
        
        <div className="p-6">
          {/* Mission Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Total Photos</h3>
              <p className="text-2xl font-bold text-blue-600">
                {formatNumber(manifest.total_photos)}
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-900 mb-2">Mission Status</h3>
              <p className="text-lg font-semibold text-green-600 capitalize">
                {manifest.status}
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-purple-900 mb-2">Max Sol</h3>
              <p className="text-2xl font-bold text-purple-600">
                {formatNumber(manifest.max_sol)}
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-orange-900 mb-2">Mission Duration</h3>
              <p className="text-lg font-semibold text-orange-600">
                {calculateMissionDuration(manifest.landing_date, manifest.max_date)}
              </p>
            </div>
          </div>

          {/* Mission Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mission Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Launch Date:</span>
                  <span className="font-medium">{formatDate(manifest.launch_date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Landing Date:</span>
                  <span className="font-medium">{formatDate(manifest.landing_date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Photo Date:</span>
                  <span className="font-medium">{formatDate(manifest.max_date)}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Photos:</span>
                  <span className="font-medium">{formatNumber(manifest.total_photos)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sol Range:</span>
                  <span className="font-medium">0 - {formatNumber(manifest.max_sol)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Cameras:</span>
                  <span className="font-medium">{manifest.photos ? manifest.photos.length : 0}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photos by Sol */}
          {manifest.photos && manifest.photos.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Photo Activity (Last 10 Sols)
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {manifest.photos.slice(-10).reverse().map((photo, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          Sol {photo.sol}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(photo.earth_date)}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <p className="mb-1">
                          <span className="font-medium">{photo.total_photos}</span> photos
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {photo.cameras.map((camera, camIndex) => (
                            <span
                              key={camIndex}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {camera}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoverManifest;