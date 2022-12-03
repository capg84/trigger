import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from "./Pages/navigation"
import Header from "./Pages/header"
import Messages from "./Pages/messages"
import Pets from "./Pages/pet"
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import User from "./Pages/user"
import Comments from "./Pages/comments"




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
          <Header>
            <Nav />
            <Routes>
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/pets"
                element={<Pets />}
              />
              <Route
                path="/user"
                element={<User />}
              />
              <Route
                path="/comments/:userId"
                element={<Comments />}
              />
              <Route
                path="/messages/to/:userId/from/:userId"
                element={<Messages />}
              />
            </Routes>
          </Header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

