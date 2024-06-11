import React from "react";
import DashboardCard from "../cards/DashboardMaincard";
import CategoryCard from "../cards/CategoryCard";
import Welcome from "../dashboard/sections/searchbarwelcome";
import DatasetTable from "../forms/dashboardtables";
import MainusersCard from "../cards/maincardusers";


const Dashboardmain = () => {
  return (
    <div className=" ml-8 ">

      <div className="mb-6 mt-4 ">
        <DashboardCard />
      </div>
      <div className="mb-12">
        <Welcome />
      </div>

      <div className="flex space-x-8  ml-12">
        <CategoryCard />
        <MainusersCard />
      </div>
      <DatasetTable />
    </div>
  );
};

export default Dashboardmain;
