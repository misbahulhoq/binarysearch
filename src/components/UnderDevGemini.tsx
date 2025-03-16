import React from "react";

const UnderDevelopmentGemini = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="animate-pulse flex space-x-4 justify-center mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
        </div>
        <p className="text-sm text-gray-500">
          We expect to be live soon. Please check back later.
        </p>

        {/* Optional: Add a subscription form or contact info */}
        {/*
        <div className="mt-8">
          <p className="text-gray-600 mb-2">
            Get notified when we launch:
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="border rounded px-4 py-2 mr-2"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Notify Me
          </button>
        </div>
        */}
      </div>
    </div>
  );
};

export default UnderDevelopmentGemini;
