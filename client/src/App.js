import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// 


import Header from "./Components/header"
import Footer from './Components/footer';
import Navbar from './Components/navigation';

import Navigation from './Components/navigation';

import InstructionProvider from './Utils/instruction';
import Instruction from './Components/instruction';


import './Assets/Styles/instruction.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <InstructionProvider>
          <Instruction />
        </InstructionProvider>
        <div>
        <Routes>
          <Route path="/" element ={<Home />}/>
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

