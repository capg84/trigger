import { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import CreateListing from "../Components/create-pet";
import ManageListing from "../Components/manage-listings";
import Favourites from "../Components/favourites";
import Messages from "../Components/messages";
import Account from "../Components/user-account";
//import DashboardNav from "../Components/dashboard-nav";
import "../assets/styles/dashboard.css";
import { MY_PROFILE } from "../Utils/queries";
import EditListing from "../Components/edit-listing";

const Dashboard = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(MY_PROFILE);
  //const userPets = Auth.getProfile().data?.userPets;

  // Check if data is returning from the `MY_PROFILE` query
  const user = data?.me || {};
  console.log('data:', data);
  
  console.log('user:', user)
  console.log('userPets:', user.userPets)
/*   const onePet = user.userPets[0] */


  // Use React Router's `<Redirect />` component to redirect to user dashboard if username is yours
/*   if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to={`/dashboard/${userId}`}/>;
  }
  
  if (!user?.fullname) {
    return (
      <h4>
        You need to be logged in to see the dashboard. Use the links above to sign up or log in!
      </h4>
    );
  } */

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="currentPageIdentifier">
        <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
          <a
            style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}
            className="item-link"
            href="/"
          >
            HOME
          </a>
          / MY TRIGGER
        </p>
      </div>
      <div className="dashboard-container">
        <nav className="dashboard-nav">
          <div
            className="links"
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            {/*           <Link to={`${pathname}/create`} className="item-link-nav">
                CREATE A LISTING
            </Link> */}
            <Link to={`/dashboard/${userId}/create`} className="item-link-nav">
              CREATE A LISTING
            </Link>
            <Link to={`/dashboard/${userId}/manage`} className="item-link-nav">
              MANAGE A LISTING
            </Link>
            <Link to={`/dashboard/${userId}/favourites`} className="item-link-nav">
              ♡ FAVOURITES
            </Link>
            <Link to={`/dashboard/${userId}/messages`} className="item-link-nav">
              MY MESSAGES
            </Link>
            <Link to={`/dashboard/${userId}/account`} className="item-link-nav">
              UPDATE ACCOUNT DETAILS
            </Link>
{/*             <Link to={`/dashboard/${userId}/edit`} className="item-link-nav">
              EDIT
            </Link> */}
{/*             <Link to="/dashboard/:userId/account" className="item-link-nav">
              UPDATE ACCOUNT DETAILS
            </Link> */}
          </div>
        </nav>
        <div className="dashboard-component">
          <Routes>
            <Route path="/create" element={<CreateListing />} />
            <Route path="/manage" element={<ManageListing pets={user.userPets}/>} />
            <Route path="/edit/:petId" element={<EditListing />} />
            <Route path="/favourites" element={<Favourites likedPets={user.likedPets}/>} />
            <Route path="/messages" element={<Messages messages={user.messages}/>} />
            <Route path="/account" element={<Account user={user}/>} />
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
