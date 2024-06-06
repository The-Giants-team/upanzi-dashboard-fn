import React from "react";
import { NavLink } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import GroupIcon from "@mui/icons-material/Group";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`h-screen bg-white shadow-md transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{
        position: "fixed",
        left: isCollapsed ? "0" : "0", // Adjust this value as needed
        top: "0",
        bottom: "0",
        zIndex: "1000",
      }}
    >
      <div className="p-4 text-gray-600 border-b border-gray-200 flex justify-between items-center ">
        {isCollapsed ? <span></span> : <span>Show menu</span>}
        <button onClick={toggleSidebar} className="text-green-500">
          {isCollapsed ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        </button>
      </div>
      <ul className="mt-4">
        <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
          <NavLink
            to="/"
            exact
            activeClassName="bg-green-100"
            className="flex items-center"
          >
            <SpeedIcon className="mr-3" />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
          <NavLink
            to="/datasets"
            activeClassName="bg-green-100"
            className="flex items-center"
          >
            <StorageIcon className="mr-3" />
            {!isCollapsed && <span>Datasets</span>}
          </NavLink>
        </li>
        <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
          <NavLink
            to="/user-roles"
            activeClassName="bg-green-100"
            className="flex items-center"
          >
            <GroupIcon className="mr-3" />
            {!isCollapsed && <span>User Roles</span>}
          </NavLink>
        </li>
        <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
          <NavLink
            to="/suggestions"
            activeClassName="bg-green-100"
            className="flex items-center"
          >
            <FeedbackIcon className="mr-3" />
            {!isCollapsed && <span>Suggestions</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;