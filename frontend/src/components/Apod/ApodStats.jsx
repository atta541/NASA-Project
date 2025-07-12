import { Image, Video, Calendar, User } from 'lucide-react';

const ApodStats = ({ data }) => {
  if (!data || data.length <= 1) return null;

  const stats = {
    total: data.length,
    images: data.filter(item => item.media_type === 'image').length,
    videos: data.filter(item => item.media_type === 'video').length,
    withCopyright: data.filter(item => item.copyright).length,
  };

  const imagePercentage = ((stats.images / stats.total) * 100).toFixed(1);
  const videoPercentage = ((stats.videos / stats.total) * 100).toFixed(1);
  const copyrightPercentage = ((stats.withCopyright / stats.total) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Data Overview
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Total APODs</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Image className="text-green-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Images</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{stats.images}</p>
          <p className="text-sm text-gray-500">{imagePercentage}%</p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Video className="text-purple-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Videos</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{stats.videos}</p>
          <p className="text-sm text-gray-500">{videoPercentage}%</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <User className="text-orange-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Copyrighted</span>
          </div>
          <p className="text-2xl font-bold text-orange-600">{stats.withCopyright}</p>
          <p className="text-sm text-gray-500">{copyrightPercentage}%</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span className="font-medium">Images vs Videos</span>
            <span>{stats.images}/{stats.videos}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-700"
              style={{ width: `${imagePercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span className="font-medium">Copyright Attribution</span>
            <span>{copyrightPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-700"
              style={{ width: `${copyrightPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodStats;