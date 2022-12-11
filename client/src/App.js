import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./assets/css/App.css"
import { setContext } from "@apollo/client/link/context";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Advice from "./pages/Advice";
import AllPets from "./pages/rehomePet";
import Contact from "./pages/contact";
import Dashboard from "./pages/myTrigger";
import Login from "./components/login";
import Signup from "./components/signup";
import Pet from "./components/pet";
//import EditPet from "./components/edit-listing";
import CreateListing from "./components/create-pet";
import ManageListing from "./components/manage-listings";
import Favourites from "./components/favourites";
import Messages from "./components/messages";
import Account from "./components/user-account";
import "./assets/css/instruction.css";
import Navigation from "./components/navigation";
import CreatePet from "./components/create-pet";
import Species from "./components/species";
import MessageCard from "./components/message-card"


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
        <div className="app-div">
          <Header />
          <Navigation />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pets" element={<AllPets />} />
              <Route path="/pets/species/:species" element={<Species />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pets/:userId/:petId" element={<Pet />} />
              <Route path="dashboard/message-form/:userId" element={<MessageCard />}/>

{/*               <Route path="/dashboard" element={<Dashboard />} /> */}
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
