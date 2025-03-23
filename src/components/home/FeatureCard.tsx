import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}
const FeatureCard = ({ props }: { props: Props }) => {
  const { icon, title, description } = props;
  return (
    <div className="flex items-center justify-center p-8">
      <div className="group max-w-80 transform rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-gray-900 p-6">
          <div className="mb-4 flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
              {icon}
            </div>
            <h3 className="ml-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
              {title}
            </h3>
          </div>

          <p className="mb-4 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
            {description}
          </p>

          <div className="mb-4 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
