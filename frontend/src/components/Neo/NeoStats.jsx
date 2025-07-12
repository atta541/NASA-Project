// src/pages/Neo/components/NeoStats.jsx
import React from 'react';

const NeoStats = ({ data }) => {
  if (!data) return null;

  const totalObjects = data.element_count || 0;
  const hazardousCount = data.near_earth_objects ? 
    Object.values(data.near_earth_objects)
      .flat()
      .filter(neo => neo.is_potentially_hazardous_asteroid).length : 0;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 mb-6 text-white">
      <h2 className="text-2xl font-bold mb-4">NEO Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="text-3xl font-bold">{totalObjects}</div>
          <div className="text-sm opacity-90">Total Objects</div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="text-3xl font-bold">{hazardousCount}</div>
          <div className="text-sm opacity-90">Potentially Hazardous</div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="text-3xl font-bold">{totalObjects - hazardousCount}</div>
          <div className="text-sm opacity-90">Safe Objects</div>
        </div>
      </div>
    </div>
  );
};

export default NeoStats;