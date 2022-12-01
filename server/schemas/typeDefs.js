const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    fullname: String!
    email: String!
    city: String!
    country: String!
    description: String
    likedCount: Int
    userPets: [Pet]
    likedPets: [Pet]
    messages: [Message]
  }
  type Pet {
    petId: ID!
    name: String!
    age: String!
    gender: String!
    species: String!
    description: String!
    city: String!
    country: String!
    breed: string
    medicalHistory: String!
    colour: String
    image: String
    dateCreated: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    userId: User
    commentBody: String!
    dateCreated: String
  }
  input PetInput {
    petId: ID!
    name: String!
    age: String!
    gender: String!
    species: String!
    description: String!
    city: String!
    country: String!
    breed: string
    medicalHistory: String!
    colour: String
    image: String
    dateCreated: String
    comments: [Comment]
  }
  type Message {
    from: {
        userId: User
        fullName: String
        read: Bolean
        dateReceived: String
    }
    to: {
        userId: User
        fullName: String
        read: Bolean
        messageText: String!
        dateCreated: String
    }
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    pets: [Pet]!
    pet(petId: ID!): Pet
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(fullname: String!, email: String!, password: String!, city: String!, country: String!): Auth
    savePet(pet: petInput!): User
    addPet(input: petInput!): Pet
    updatePet(petId: ID!, input: petInput!): Pet
    removePet(petId: ID!): Pet
    removeLikedPet(petId: ID!): User
    addComment(petId: ID!, commentBody: String!): Pet
    removeComment(petId: ID!, commentId: ID!): Pet
    aboutMe(_id: ID!, description: String!): User
    sendMessage(userId: ID!, messageText: String!): User
  }
`;

module.exports = typeDefs;