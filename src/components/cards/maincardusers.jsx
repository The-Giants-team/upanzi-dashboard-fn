import React from "react";

const MainusersCard = () => {
  return (
    <div className="bg-white shadow-md  border rounded-lg p-6">
      <div className="flex items-center mb-6 bg-slightygreen rounded-l h-12">
        <div className="bg-green-500 rounded-full h-3 w-3 ml-6"></div>
        <span className="text-green-500 text-3xl font-bold ml-4">150</span>
        <span className="text-gray-700 text-lg ml-2">Users</span>
      </div>
      <div className="border-b border-gray-400 pb-2"></div>
      <div className="flex items-center justify-between mb-6">
        <div className="text-gray-500">Statistics</div>
        <div className="text-gray-500">Individuals(100)</div>
        <div className="text-gray-500">Organizations(20)</div>
        <div className="text-blue-500 hover:underline cursor-pointer">View a list</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2 border-b pb-2">
            <h3 className="text-gray-700 font-semibold">Education</h3>
            <p className="text-green-600 bg-green-200 rounded-full px-2 py-1">+20%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">100 users</p>
            <a href="#" className="text-blue-500 hover:underline">View</a>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2 pb-2 border-b">
            <h3 className="text-gray-700 font-semibold">Health</h3>
            <p className="text-purple-600 bg-purple-200 rounded-full px-2 py-1">+20%</p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-gray-500">10 users</p>
            <a href="#" className="text-blue-500 hover:underline">View</a>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2 pb-2 border-b">
            <h3 className="text-gray-700 font-semibold">Others</h3>
            <p className="text-purple-600 bg-purple-200 rounded-full px-2 py-1">+20%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">10 users</p>
            <a href="#" className="text-blue-500 hover:underline">View</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainusersCard;
