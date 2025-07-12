// src/components/Mars/PhotoGrid.jsx
import React, { useState } from 'react';

const PhotoGrid = ({ photos, loading, onPageChange, currentPage }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageLoadingStates, setImageLoadingStates] = useState({});

  const handleImageLoad = (photoId) => {
    setImageLoadingStates(prev => ({ ...prev, [photoId]: false }));
  };

  const handleImageError = (photoId) => {
    setImageLoadingStates(prev => ({ ...prev, [photoId]: false }));
  };

  const handleImageStart = (photoId) => {
    setImageLoadingStates(prev => ({ ...prev, [photoId]: true }));
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Photos Found</h3>
        <p className="text-gray-600">
          Try adjusting your search parameters or selecting a different date.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Found {photos.length} photos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <div className="relative">
              {imageLoadingStates[photo.id] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={photo.img_src}
                alt={`Mars photo by ${photo.rover.name}`}
                className="w-full h-48 object-cover"
                onLoadStart={() => handleImageStart(photo.id)}
                onLoad={() => handleImageLoad(photo.id)}
                onError={() => handleImageError(photo.id)}
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {photo.camera.full_name}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {photo.camera.name}
                </span>
              </div>
              
              <div className="space-y-1 text-xs text-gray-600">
                <p>Sol: {photo.sol}</p>
                <p>Earth Date: {photo.earth_date}</p>
                <p>Rover: {photo.rover.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {photos.length > 0 && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <span className="flex items-center px-4 py-2 text-sm text-gray-700">
              Page {currentPage}
            </span>
            
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {selectedPhoto.camera.full_name}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedPhoto.img_src}
                alt={`Mars photo by ${selectedPhoto.rover.name}`}
                className="w-full h-auto rounded-lg mb-4"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Photo Details</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium">ID:</span> {selectedPhoto.id}</p>
                    <p><span className="font-medium">Sol:</span> {selectedPhoto.sol}</p>
                    <p><span className="font-medium">Earth Date:</span> {selectedPhoto.earth_date}</p>
                    <p><span className="font-medium">Camera:</span> {selectedPhoto.camera.name}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Rover Details</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium">Name:</span> {selectedPhoto.rover.name}</p>
                    <p><span className="font-medium">Status:</span> {selectedPhoto.rover.status}</p>
                    <p><span className="font-medium">Landing Date:</span> {selectedPhoto.rover.landing_date}</p>
                    <p><span className="font-medium">Launch Date:</span> {selectedPhoto.rover.launch_date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;