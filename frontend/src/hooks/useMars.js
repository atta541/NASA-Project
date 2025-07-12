import { useState } from 'react';
import marsService from '../services/marsService';

export const useMars = () => {
  const [photos, setPhotos] = useState([]);
  const [manifest, setManifest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRoverPhotos = async (rover, params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await marsService.getRoverPhotos(rover, params);
      setPhotos(response.photos || []);
      return response;
    } catch (err) {
      setError(err.message);
      setPhotos([]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchRoverManifest = async (rover) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await marsService.getRoverManifest(rover);
      setManifest(response.photo_manifest || response);
      return response;
    } catch (err) {
      setError(err.message);
      setManifest(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    photos,
    manifest,
    loading,
    error,
    fetchRoverPhotos,
    fetchRoverManifest,
    clearError
  };
};

export default useMars;