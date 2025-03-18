import React from "react";

interface Container {
  title: string;
}

interface ContainerGridProps {
  containers: Container[];
}

const ContainerGrid: React.FC<ContainerGridProps> = ({ containers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {containers.map((container, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg font-semibold mb-2">{container.title}</h2>
          {/* You can add more content here if needed */}
        </div>
      ))}
    </div>
  );
};

const Courses: React.FC = () => {
  const containers: Container[] = [
    { title: "Dashboard" },
    { title: "User Management" },
    { title: "Reports" },
    { title: "Settings" },
    { title: "Products" },
    { title: "Orders" },
    { title: "Analytics" },
    { title: "Integrations" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <ContainerGrid containers={containers} />
    </div>
  );
};

export default Courses;
