import React from "react";
const CirclePattern = () => {
  return (
    <div className="relative flex items-center ">
      <div className="bg-green-500 w-24 h-24 rounded-r-full absolute left-0 z-30"></div>
      <div className="bg-green-300 w-24 h-24 rounded-r-full absolute left-12 z-20"></div>
      <div className="bg-green-200 w-24 h-24 rounded-r-full absolute left-24 z-10"></div>
    </div>
  );
};


const DashboardCard = () => {
  return (
    <div className="bg-slightygreen text-white rounded-xl   h-24 flex items-center relative">
      <CirclePattern   className=""/>
      <div className="absolute left-24 transform -translate-x-1/2 top-8 z-40 mt-2">
        <h1 className="text-xl text-white font-bold">Dashboard</h1>
      </div>
      <div className="ml-auto flex items-center space-x-8">
        <div className="flex items-center">
          <div className="relative">
            <svg className="w-16 h-16 text-purple-600" viewBox="0 0 36 36">
              <path
                className="text-purple-500"
                d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.8"
                strokeDasharray="70, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-purple-500 font-bold">
                50%
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-black font-bold">
              40/50 suggestions
            </div>
            <div className="text-sm text-gray-400 font-bold">
              Organization posts
            </div>
          </div>
        </div>

        <div className="flex items-center px-12">
          <div className="relative">
            <svg className="w-16 h-16 text-purple-600" viewBox="0 0 36 36">
              <path
                className="text-purple-500"
                d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.8"
                strokeDasharray="30, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center mr-12">
              <span className="text-xl font-semibold text-purple-500 font-bold">
                30%
              </span>
            </div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-sm text-black font-bold">
              10/50 suggestions
            </div>
            <div className="text-sm text-gray-400 font-bold">
              Organization posts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
