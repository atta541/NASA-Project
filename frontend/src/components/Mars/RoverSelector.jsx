// src/components/Mars/RoverSelector.jsx
import React from 'react';

const RoverSelector = ({ rovers, selectedRover, onRoverChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Select Mars Rover
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {rovers.map((rover) => (
          <div
            key={rover.id}
            onClick={() => onRoverChange(rover.id)}
            className={`
              cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg
              ${selectedRover === rover.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
              }
            `}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {rover.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {rover.name}
              </h3>
              
              <span className={`
                px-3 py-1 rounded-full text-sm font-medium
                ${rover.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {rover.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoverSelector;