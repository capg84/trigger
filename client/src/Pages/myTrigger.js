import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
  useLocation
} from "react-router-dom";
import Home from "./home";
import CreateListing from "../Components/create-pet";
import ManageListing from "../Components/manage-listings";
import Favourites from "../Components/favourites";
import Messages from "../Components/messages";
import Account from "../Components/user-account";
//import DashboardNav from "../Components/dashboard-nav";
import "../Assets/Styles/dashboard.css";


const Dashboard = () => {
  let { pathname } = useLocation();
  return (
    <div>
      <div className="currentPageIdentifier">
        <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
          <a style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }} className="item-link" href="/">HOME</a>/ MY TRIGGER</p>
      </div>
      <div className="dashboard-container">
        <nav className="dashboard-nav">
          <div className="links" style={{ width:"100%", display: "flex", flexWrap: "wrap", textAlign: "center" }}>
{/*           <Link to={`${pathname}/create`} className="item-link-nav">
                CREATE A LISTING
            </Link> */}
            <Link to="/dashboard/:userId/create" className="item-link-nav">
                CREATE A LISTING
            </Link>
            <Link to="/dashboard/:userId/manage" className="item-link-nav">
                MANAGE A LISTING
            </Link>
            <Link to="/dashboard/:userId/favourites" className="item-link-nav">
            ♡ FAVOURITES
            </Link>
            <Link to="/dashboard/:userId/messages" className="item-link-nav">
            MY MESSAGES
            </Link>
            <Link to="/dashboard/:userId/account" className="item-link-nav">
            UPDATE ACCOUNT DETAILS
            </Link>
          </div>
        </nav>
        <div className="dashboard-component">
          <Routes>
            <Route path="/create" element={<CreateListing />} />
            <Route path="manage" element={<ManageListing />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

  /*   const [currentComponent, setCurrentComponent] = useState("Create");

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
*/