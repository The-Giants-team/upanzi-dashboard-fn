import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/SideBar";
import Routes from "./routes/index";
import Header from "./components/cards/HeaderCard";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 overflow-y-auto transition-all ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <div className="m-4">
           <div className="mt-6">
           <Header />
           </div>
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
