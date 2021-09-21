import React from 'react';
import { GiDinosaurBones } from 'react-icons/gi';

const MainDashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="text-blue-900 flex items-center justify-center p-4 rounded-full bg-white">
          <GiDinosaurBones fontSize="20rem" />
        </div>
        <div className="text-xl">
          Buried in file. Dig me plz
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
