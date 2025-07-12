import { useState, useCallback } from 'react';
import { getApod, getApodRange } from '../services/apodService';


const useApod = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSingle = useCallback(async (date = '') => {
    setLoading(true);
    setError(null);

    try {
      const result = await getApod(date);
      
      setData(Array.isArray(result) ? result : [result]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

 
  const fetchRange = useCallback(async (start, end) => {
    if (!start || !end) {
      setError('Both start and end dates are required.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await getApodRange(start, end);
      setData(Array.isArray(result) ? result : [result]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchSingle, fetchRange };
};

export default useApod;
