import { useState, useEffect, useCallback } from 'react';
import techTransferService from '../services/techTransferService';

export const useTechTransfer = () => {
  const [data, setData] = useState({
    patents: [],
    patentsIssued: [],
    software: [],
    spinoffs: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('patents');

  const fetchData = useCallback(async (query = '') => {
    setLoading(true);
    setError(null);
    
    try {
      const [patents, patentsIssued, software, spinoffs] = await Promise.all([
        techTransferService.getPatents(query),
        techTransferService.getPatentsIssued(query),
        techTransferService.getSoftware(query),
        techTransferService.getSpinoffs(query)
      ]);

      setData({
        patents: techTransferService.parseResults(patents.results),
        patentsIssued: techTransferService.parseResults(patentsIssued.results),
        software: techTransferService.parseResults(software.results),
        spinoffs: techTransferService.parseResults(spinoffs.results)
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    fetchData(query);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getActiveData = () => {
    return data[activeTab] || [];
  };

  const getDataStats = () => {
    return {
      patents: data.patents.length,
      patentsIssued: data.patentsIssued.length,
      software: data.software.length,
      spinoffs: data.spinoffs.length,
      total: data.patents.length + data.patentsIssued.length + data.software.length + data.spinoffs.length
    };
  };

  return {
    data,
    loading,
    error,
    searchQuery,
    activeTab,
    setActiveTab,
    handleSearch,
    getActiveData,
    getDataStats,
    refetch: fetchData
  };
};