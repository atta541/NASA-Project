const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <p className="ml-4 text-gray-600 font-medium">Loading data...</p>
  </div>
);

export default LoadingSpinner;