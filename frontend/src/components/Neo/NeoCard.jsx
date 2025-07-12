// src/pages/Neo/components/NeoCard.jsx
import React from 'react';

const NeoCard = ({ neo }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatDistance = (distance) => {
    return parseFloat(distance).toFixed(2);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800">{neo.name}</h3>
        {neo.is_potentially_hazardous_asteroid && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            Potentially Hazardous
          </span>
        )}
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Diameter:</span>
          <span className="font-medium">
            {formatDistance(neo.estimated_diameter?.kilometers?.estimated_diameter_min)} - 
            {formatDistance(neo.estimated_diameter?.kilometers?.estimated_diameter_max)} km
          </span>
        </div>
        
        {neo.close_approach_data && neo.close_approach_data[0] && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Close Approach Date:</span>
              <span className="font-medium">
                {formatDate(neo.close_approach_data[0].close_approach_date)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Miss Distance:</span>
              <span className="font-medium">
                {formatDistance(neo.close_approach_data[0].miss_distance?.kilometers)} km
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Velocity:</span>
              <span className="font-medium">
                {formatDistance(neo.close_approach_data[0].relative_velocity?.kilometers_per_hour)} km/h
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NeoCard;