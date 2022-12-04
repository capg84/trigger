import { useState } from "react";
import Home from "./home";
import CreateListing from "../Components/create-pet";
import ManageListing from "../Components/manage-listings";
import Favourites from "../Components/favourites";
import Messages from "../Components/messages";
import Account from "../Components/user-account";
import DashboardNav from "../Components/dashboard-nav";
import '../Assets/Styles/dashboard.css';

const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState("Create");

  const renderComponent = () => {
    if (currentComponent === "Create") {
      return <CreateListing />;
    }
    if (currentComponent === "Manage") {
      return <ManageListing />;
    }
    if (currentComponent === "Favourites") {
      return <Favourites />;
    }
    if (currentComponent === "Messages") {
      return <Messages />;
    }
    return <Account />;
  };

  const handleComponentChange = (component) => setCurrentComponent(component);
  return (
    <div>
      <div className="currentPageIdentifier">
        <a className="item-link" href="/">
          HOME
        </a>
        <p>/ MY TRIGGER</p>
      </div>
      <div className="dashboard-container">
      <DashboardNav
        currentComponent={currentComponent}
        handleComponentChange={handleComponentChange}
      />
      <div className="dashboard-component">
      {renderComponent()}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
