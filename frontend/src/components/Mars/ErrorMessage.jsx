// src/components/Mars/ErrorMessage.jsx

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-red-800 font-medium">Error</span>
        </div>
        
        <button
          onClick={onClose}
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <p className="text-red-700 mt-2">{message}</p>
    </div>
  );
};

export default ErrorMessage;