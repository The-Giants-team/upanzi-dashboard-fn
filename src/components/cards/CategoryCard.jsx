import React from "react";
import dot from "../../assets/dotsvg.svg";

const CategoryCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border">
      <div className="flex items-center mb-6 bg-slightygreen rounded">
        <div className="bg-green-500 rounded-full ml-8 h-3 w-3 ml-4"></div>
        <span className="text-green-500 text-3xl font-bold ml-4"> 3</span>
        <span className="font-semibold text-lg text-gray-700">Categories</span>
        <div className="flex items-center justify-center ml-auto bg-white border-4 border-green-500 text-green-500 h-14 w-14 rounded-full">
          <span className="text-xl font-bold">180</span>
        </div>
        <p className="text-gray-500 mr-12">Total Uploads</p>
      </div>
      <div className="border-b border-gray-400"></div>
      <div className="flex items-center justify-between mb-6">
        <div className="text-gray-500">Statistics</div>
        <div className="text-blue-500 hover:underline cursor-pointer">
          View a list
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="text-gray-700 font-semibold">Education</h3>
            <p className="text-green-600 text-sm bg-green-200 rounded-full px-2 py-1">
              +20%
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">100 uploads</p>
            <a href="#" className="text-blue-500 hover:underline">
              View
            </a>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="text-gray-700 font-semibold">Health</h3>
            <p className="text-purple-600 bg-purple-200 rounded-full px-2 py-1">
              +5%
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">50 uploads</p>
            <a href="#" className="text-blue-500 hover:underline">
              View
            </a>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="text-gray-700 font-semibold">Others</h3>
            <p className="text-purple-600 bg-purple-100 rounded-full px-2 py-1">
              +3%
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">30 uploads</p>
            <a href="#" className="text-blue-500 hover:underline">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
