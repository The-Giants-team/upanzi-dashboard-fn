import { Routes, Route } from "react-router-dom";
import  HomePage from "../pages/index";
 
let allRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default allRoutes;
 