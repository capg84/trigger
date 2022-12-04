import { useState } from "react";
import Home from "../Pages/home";
import Navigation from "./navigation";
import About from "../Pages/about";
import Search from "../Pages/rehomePet";
import Advice from "../Pages/Advice";
import Contact from "../Pages/contact";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "../Pages/myTrigger";

const PageContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Search") {
      return <Search />;
    }
    if (currentPage === "Advice") {
      return <Advice />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
};

export default PageContainer;
