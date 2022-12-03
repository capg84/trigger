const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    _id: ID!
    fullname: String!
    email: String!
    city: String
    country: String
    description: String
    likedCount: Int
    messageCount: Int
    userPets: [Pet]
    likedPets: [Pet]
    messages: [Message]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(fullname: String!, email: String!, password: String!): Auth
    aboutMe(id: ID!, description: String!, city: String!, country: String!): User
  }
`