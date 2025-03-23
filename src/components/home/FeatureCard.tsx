import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}
const FeatureCard = ({ props }: { props: Props }) => {
  const { icon, title, description } = props;
  return (
    <div className="flex items-center justify-center p-8 ">
      <div className="group max-w-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col overflow-hidden">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="ml-3 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
