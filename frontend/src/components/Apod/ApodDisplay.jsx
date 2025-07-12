import { Calendar, Image, Video, Clock, ExternalLink } from 'lucide-react';
import LoadingSpinner from '../Mars/LoadingSpinner'

const ApodDisplay = ({ data, loading, error }) => {
  const renderMedia = (item) => {
    if (item.media_type === 'video') {
      return (
        <div className="relative aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src={item.url}
            title={item.title}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center gap-1">
            <Video size={16} />
            <span className="text-sm">Video</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src={item.hdurl || item.url}
            alt={item.title}
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center gap-1">
            <Image size={16} />
            <span className="text-sm">Image</span>
          </div>
          {item.hdurl && (
            <a
              href={item.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors"
            >
              <ExternalLink size={14} />
              <span className="text-sm">HD</span>
            </a>
          )}
        </div>
      );
    }
  };

  const renderAPODItem = (item) => (
    <div key={item.date} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-blue-600" size={20} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h2>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300">
          <Clock size={16} />
          <span className="text-sm">
            {new Date(item.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        {renderMedia(item)}

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.explanation}
          </p>
        </div>

        {item.copyright && (
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Copyright:</span> {item.copyright}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      // <div className="text-center py-12">
      //   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      //   <p className="mt-4 text-gray-600 dark:text-gray-300">Loading APOD data...</p>
      // </div>
      <LoadingSpinner />
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-8">
        <p className="font-semibold">Error:</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">No APOD data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {data.map((item) => renderAPODItem(item))}
    </div>
  );
};

export default ApodDisplay;