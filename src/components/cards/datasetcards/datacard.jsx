import React from "react";
import avatal from "../../../assets/avatallogo.png";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DataCard = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 border-2 w-52 ml-12 mt-2">
      <div className="absolute top-2 right-2">
        <MoreVertIcon className="text-gray-500 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
          <img src={avatal} alt="Avatar" className="w-8 h-8 rounded-full" />
        </div>
        <div  >
          <h2 className="text-lg font-semibold">Cbot</h2>
          <p className="text-gray-600">Author</p>
        </div>
      </div>
      <div className="mt-4 ">
        <p className="text-gray-800 text-left">
          Education is one of the most powerful instruments.
        </p>
        <button className="bg-slightygreen  w-44  h-8  text-green-500 px-2 py-2 rounded-md  hover:bg-green-500 hover:text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default DataCard;
