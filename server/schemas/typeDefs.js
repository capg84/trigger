const { gql } = require("apollo-server-express");
const typeDefs = gql`
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
  type Pet {
    _id: ID!
    name: String!
    age: String!
    gender: String!
    species: String!
    description: String!
    city: String!
    country: String!
    breed: String
    medicalHistory: String!
    colour: String
    image: String
    dateCreated: String
    userLikes: [User]
    userlikeCount: Int
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    userId: User
    commentBody: String!
    dateCreated: String
  }
  input PetInput {
    _id: ID
    name: String!
    age: String!
    gender: String!
    species: String!
    description: String!
    city: String!
    country: String!
    breed: String
    medicalHistory: String!
    colour: String
    image: String
    dateCreated: String
  }
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
    me: User
    users: [User]
    pets: [Pet]!
    pet(petId: ID!): Pet
    getmessages(from: ID!): [Message]!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(fullname: String!, email: String!, password: String!): Auth
    savePet(pet: PetInput!): User
    addPet(input: PetInput!): User
    updatePet(petId: ID!, input: PetInput!): Pet
    removePet(petId: ID!): Pet
    removeLikedPet(petId: ID!): User
    addComment(petId: ID!, commentBody: String!): Pet
    removeComment(petId: ID!, commentId: ID!): Pet
    aboutMe(id: ID!, description: String!, city: String!, country: String!): User
    sendMessage(to: ID!, messageText: String!): Message
  }
`;

module.exports = typeDefs;