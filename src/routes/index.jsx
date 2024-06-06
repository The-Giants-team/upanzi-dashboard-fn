import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/index";
import Sidebar from "../components/sidebar/SideBar";
import Header from "../components/cards/HeaderCard";
import DashboardCard from "../components/cards/DashboardMaincard";
import CategoryCard from "../components/cards/CategoryCard";
import Welcome from "../components/dashboard/sections/searchbarwelcome";
import DatasetTable from "../components/forms/dashboardtables";
import MainusersCard from "../components/cards/maincardusers";
import Dashboardmain from "../components/dashboard/MainDashBoard";
import DataCard from "../components/cards/datasetcards/datacard";
import Datasetmaincard from "../components/cards/datasetcards/datasetmaincard";
import DatasetMenu from "../components/menu/datasetmenu";
import Dataset from "../components/dashboard/Dataset";
import UserRoles from "../components/dashboard/UserRoles";
import UserCard from "../components/cards/UserRoles/usercard";
import SuggestionCard from "../components/cards/suggestions/SuggestionCard";
import Suggestions from "../components/dashboard/Suggestions";
let allRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboardmain />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/header" element={<Header />} />
      <Route path="/dashboardcard" element={<DashboardCard />} />
      <Route path="/categorycard" element={<CategoryCard />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dataset" element={<DatasetTable />} />
      <Route path="/mainusers" element={<MainusersCard />} />
      <Route path="/datacard" element={<DataCard />} />
      <Route path="/datasetmaincard" element={<Datasetmaincard />} />
      <Route path="/datasetmenu" element={<DatasetMenu />} />
      <Route path="/datasets" element={<Dataset />} />
      <Route path="/user-roles" element={<UserRoles />} />
      <Route path="/usercard" element={<UserCard />} />
      <Route path="/suggestionscard" element={<SuggestionCard />} />
      <Route path="/suggestions" element={<Suggestions />} />
    </Routes>
  );
};

export default allRoutes;
