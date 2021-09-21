import React from 'react';
import { GiDinosaurBones } from 'react-icons/gi';

const MainDashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="flex min-h-screen justify-center items-center">
        <div className="bg-blue-900 flex space-x-4 items-center rounded-lg p-6">
          <div className="text-blue-900 flex items-center justify-center text-5xl p-4 rounded-full bg-white">
            <GiDinosaurBones />
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <div className="text-gray-100 font-semibold text-2xl">Welcome to STEGANOSAUR</div>
            <div className="text-center text-sm text-gray-100 font-medium">Hide Your File Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
