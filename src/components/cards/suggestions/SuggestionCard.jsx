import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatal from "../../../assets/avatallogo.png";

const SuggestionCard = () => {
  return (
    <div className="flex items-center justify-between  p-4 border rounded-lg shadow-sm">
      <div className="flex items-center">
        <img 
          src={avatal}
          alt="Profile" 
          className="w-10 h-10 rounded-full mr-4" 
        />
        <div>
          <div className="font-semibold">Frederic Simson</div>
          <div className="text-sm text-gray-600">fredsim@gmail.com</div>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Posted: Apr 18 2024
      </div>
      <MoreVertIcon className="text-gray-600" />
    </div>
  );
};

export default SuggestionCard;
