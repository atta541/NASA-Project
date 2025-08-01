import { useEffect } from 'react';
import useApod from '../../hooks/useApod';
import ApodControls from '../../components/Apod/ApodControls';
import ApodDisplay from '../../components/Apod/ApodDisplay';
import ApodStats from '../../components/Apod/ApodStats';

const Apod = () => {
  const {
    data: apodData,
    loading,
    error,
    fetchSingle,
    fetchRange,
  } = useApod();

  useEffect(() => {
    fetchSingle();
  }, [fetchSingle]);

  return (
    <div className="max-w-7xl mx-auto p-4">

      <ApodControls
        onFetchSingle={fetchSingle}
        onFetchRange={fetchRange}
        loading={loading}
      />

      {apodData && apodData.length > 1 && <ApodStats data={apodData} />}

      <ApodDisplay data={apodData} loading={loading} error={error} />
    </div>
  );
};

export default Apod;
