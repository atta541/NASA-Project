// src/hooks/useNeo.js
import { useState, useEffect } from 'react';
import neoService from '../services/neoService';

export const useNeoFeed = (startDate, endDate) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!startDate) return;

    const fetchNeoFeed = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await neoService.getNeoFeed(startDate, endDate);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNeoFeed();
  }, [startDate, endDate]);

  return { data, loading, error };
};

export const useNeoLookup = (asteroidId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!asteroidId) return;

    const fetchNeoLookup = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await neoService.getNeoLookup(asteroidId);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNeoLookup();
  }, [asteroidId]);

  return { data, loading, error };
};

export const useNeoBrowse = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNeoBrowse = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await neoService.getNeoBrowse();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNeoBrowse();
  }, []);

  return { data, loading, error, refetch: fetchNeoBrowse };
};