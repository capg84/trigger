import { useState } from "react";
import Home from "./home";
import CreateListing from "../Components/create-pet";
import ManageListing from "../Components/manage-listings";
import Favourites from "../Components/favourites";
import Messages from "../Components/messages";
import Account from "../Components/user-account";
import DashboardNav from "../Components/dashboard-nav";

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
          HOME{" "}
        </a>
        <p>/ MY TRIGGER</p>
      </div>
      <DashboardNav
        currentComponent={currentComponent}
        handleComponentChange={handleComponentChange}
      />
      {renderComponent()}
    </div>
  );
};

export default Dashboard;
