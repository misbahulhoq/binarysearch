export default function UnderDevelopmentGPT() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Background Candle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-24 h-48">
          <div className="absolute inset-x-0 bottom-0 w-10 h-20 bg-yellow-500 rounded-t-lg mx-auto"></div>
          <div className="absolute inset-x-0 top-0 w-6 h-10 bg-orange-400 rounded-full animate-flicker mx-auto"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Website Under Development
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-4">
          <span className="inline-block w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></span>
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
