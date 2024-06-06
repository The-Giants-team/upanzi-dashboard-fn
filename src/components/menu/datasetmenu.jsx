import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const DatasetMenu = () => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-white ml-8 mt-4">
      <div className="flex items-center space-x-1 bg-white p-2 rounded">
        <FilterAltIcon   className='text-gray-300'/>
        <span>Alphabetically</span>
        <ArrowDropDownIcon />
      </div>
      <div className="flex items-center space-x-1 bg-green-100 text-black p-2 rounded">
        <FilterAltIcon  className='text-gray-300' />
        <span>Individuals(150)</span>
      </div>
      <div className="flex items-center space-x-1 bg-white p-2 rounded">
        <FilterAltIcon  className='text-gray-300'/>
        <span>Organization(3)</span>
      </div>
      <div className="flex items-center bg-white p-2  mr-12 rounded">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Search user..."
          className="outline-none pl-2"
        />
      </div>
    </div>
  );
};

export default DatasetMenu;
