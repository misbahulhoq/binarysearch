import React from "react";

const UnderDevelopmentDeepSeek = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">
        🚧 Under Development 🚧
      </h1>
      <p className="text-xl mb-8">
        Our website is currently under construction. We&apos;re working hard to
        bring you an amazing experience!
      </p>
      <div className="space-x-4">
        <a
          href="mailto:support@example.com"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Notify Me
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default UnderDevelopmentDeepSeek;
