import {  useCallback,  } from 'react';
import { Calendar, Image, Video, Clock, ExternalLink, Volume2, VolumeX, Pause, User } from 'lucide-react';
import  useTextToSpeech  from '../../hooks/Text-to-Speech';
import LoadingSpinner from '../LoadingSpinner'


const ApodDisplay = ({ data, loading, error }) => {
  const { speak, stop, isPlaying, isSupported } = useTextToSpeech();

  const handleTextToSpeech = useCallback((text) => {
    if (isPlaying) {
      stop();
    } else {
      speak(text);
    }
  }, [speak, stop, isPlaying]);

  const renderMedia = (item) => {
    if (item.media_type === 'video') {
      return (
        <div className="relative w-full mb-6">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={item.url}
              title={item.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Video size={16} />
            <span className="text-sm font-medium">Video</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full mb-6">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={item.hdurl || item.url}
              alt={item.title}
              className="w-full h-auto max-h-96 object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Image size={16} />
            <span className="text-sm font-medium">Image</span>
          </div>
          {item.hdurl && (
            <a
              href={item.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 transition-colors duration-200 shadow-md"
            >
              <ExternalLink size={14} />
              <span className="text-sm font-medium">View HD</span>
            </a>
          )}
        </div>
      );
    }
  };

  const renderAPODItem = (item) => (
    <div key={item.date} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="text-blue-500 flex-shrink-0" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {item.title}
            </h2>
          </div>
          {isSupported && (
            <button
              onClick={() => handleTextToSpeech(item.explanation)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-gray-700"
              title={isPlaying ? 'Stop reading' : 'Read description aloud'}
            >
              {isPlaying ? (
                <>
                  <Pause size={16} />
                  <span className="text-sm font-medium">Stop</span>
                </>
              ) : (
                <>
                  <Volume2 size={16} />
                  <span className="text-sm font-medium">Listen</span>
                </>
              )}
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 mb-6 text-gray-600">
          <Clock size={16} />
          <span className="text-sm font-medium">
            {new Date(item.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        {renderMedia(item)}

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            Description
            {isSupported && (
              <button
                onClick={() => handleTextToSpeech(item.explanation)}
                className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                title={isPlaying ? 'Stop reading' : 'Read description aloud'}
              >
                {isPlaying ? <VolumeX size={16} className="text-red-500" /> : <Volume2 size={16} className="text-gray-400" />}
              </button>
            )}
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            {item.explanation}
          </p>
        </div>

        {item.copyright && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <User size={14} />
              <span className="font-semibold">Copyright:</span> {item.copyright}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
        <p className="font-semibold">Error:</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="text-gray-400" size={32} />
        </div>
        <p className="text-gray-600">No APOD data available.</p>
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