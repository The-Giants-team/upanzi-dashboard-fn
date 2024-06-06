import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GetAppIcon from "@mui/icons-material/GetApp";
import DeleteIcon from "@mui/icons-material/Delete";
import unionicon from "../../assets/Union.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const DatasetTable = () => {
  const datasets = [
    {
      name: "Education indicators for Rwanda",
      author: "CBot",
      created: "Jul 09 2023",
      updated: "Mar 15 2024",
      time: "12:13:41 PM",
      views: 100,
      accessibility: "Private",
    },
    {
      name: "Education indicators for Rwanda",
      author: "CBot",
      created: "Jul 09 2023",
      updated: "Mar 15 2024",
      time: "12:13:41 PM",
      views: 100,
      accessibility: "Private",
    },
    {
      name: "Education indicators for Rwanda",
      author: "CBot",
      created: "Jul 09 2023",
      updated: "Mar 15 2024",
      time: "12:13:41 PM",
      views: 100,
      accessibility: "Private",
    },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Datasets</h2>
      <div className="flex justify-between p-4 bg-gray-100 rounded-md mb-4">
        <div className="flex space-x-2">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">Category<ArrowDropDownIcon/></button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">Accessibility<ArrowDropDownIcon/></button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">Most recent</button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">Most viewed</button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">Most downloaded</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Dataset name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Author</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Updated</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Views</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Accessibility</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {datasets.map((dataset, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img src={unionicon} alt="icon" className="mr-2" />
                  <span className="text-sm font-medium text-gray-900">{dataset.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.created}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.updated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.views}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 bg-gray-100 py-1 px-3 rounded-full">{dataset.accessibility}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="text-green-500">
                      <VisibilityIcon />
                    </button>
                    <button className="text-gray-500">
                      <GetAppIcon />
                    </button>
                    <button className="text-gray-500">
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 text-gray-500">
        Click to expand the list <span className="text-gray-700">↓</span>
      </div>
    </div>
  );
};

export default DatasetTable;
