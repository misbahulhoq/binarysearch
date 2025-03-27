import React from "react";

const UnderDevelopmentGemini = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Under Construction
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mb-8 flex animate-pulse justify-center space-x-4">
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          <div className="h-8 w-8 rounded-full bg-green-500"></div>
          <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
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
