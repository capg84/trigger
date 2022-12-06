import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import About from "./Pages/about";
import Advice from "./Pages/Advice";
import AllPets from "./Pages/rehomePet";
import Contact from "./Pages/contact";
import Dashboard from "./Pages/myTrigger";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Pet from "./Components/pet";
//import EditPet from "./Components/edit-listing";
import CreateListing from "./Components/create-pet";
import ManageListing from "./Components/manage-listings";
import Favourites from "./Components/favourites";
import Messages from "./Components/messages";
import Account from "./Components/user-account";
import "./Assets/Styles/instruction.css";
import Navigation from "./Components/navigation";
import CreatePet from "./Components/create-pet";





const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Navigation />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pets" element={<AllPets />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pets/:petId" element={<Pet />} />
              <Route path="/dashboard/:userId/*" element={<Dashboard />} />
              {/* <Route path="/dashboard/:userId/edit/:petId" element={<EditPet />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
