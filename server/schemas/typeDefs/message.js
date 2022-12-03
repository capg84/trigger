const { gql } = require("apollo-server-express");
module.exports = gql`
  type Message {
    _id: ID!
    messageText: String!
    read: Boolean
    dateCreated: String
    from: User!
    to: User!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    messages(from: String!): [Message]!
  }
  type Mutation {
    sendMessage(to: ID!, messageText: String!): Message
  }
`