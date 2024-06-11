 import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Menu, MenuItem } from '@mui/material';

const DatasetMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('Alphabetically');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (filter) => {
    setSelectedFilter(filter);
    handleClose();
  };

  const filters = ['Alphabetically', 'Date Added', 'Popularity'];

  return (
    <div className="flex items-center space-x-12 p-4 bg-white ml-8 mt-4">
      <div
        className="flex items-center space-x-1 bg-white p-2 rounded hover:bg-green-200 cursor-pointer"
        onClick={handleClick}
      >
        <FilterAltIcon className="text-gray-300" />
        <span>{selectedFilter}</span>
        <ArrowDropDownIcon />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {filters.map((filter) => (
          <MenuItem
            key={filter}
            selected={filter === selectedFilter}
            onClick={() => handleMenuItemClick(filter)}
          >
            {filter}
          </MenuItem>
        ))}
      </Menu>
      <div className="flex items-center space-x-1 bg-green-100 text-black p-2 rounded hover:bg-green-200">
        <FilterAltIcon className="text-gray-300" />
        <span>Individuals(150)</span>
      </div>
      <div className="flex items-center space-x-1 bg-white p-2 rounded hover:bg-green-200">
        <FilterAltIcon className="text-gray-300" />
        <span>Organization(3)</span>
      </div>
      <div className="flex items-center bg-white p-2 right-0 border rounded">
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
