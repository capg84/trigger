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
    petCount: Int
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
    image: String!
    dateCreated: String
    owner: User
    userLikes: [User]
    userlikeCount: Int
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commenter: User
    commentBody: String!
    dateCreated: String
  }

  input PetInput {
    _id: ID!
    name: String
    age: String
    gender: String
    species: String
    description: String
    city: String
    country: String
    breed: String
    medicalHistory: String
    colour: String
    image: String
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
    allPets: [Pet]!
    pet(petId: ID!): Pet
    getmessages(from: ID!): [Message]
    userPets: [Pet]
    likedPets: [Pet]
    userLikes: [User]
    messages: [Message]
    messagesfrom: [Message]

 
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(fullname: String!, email: String!, password: String!): Auth
    savePet(petId: ID!): User
    addPet(name: String!, age: String!, gender: String!, species: String!, description: String!, city: String!, country: String!, medicalHistory: String!, image: String!, breed: String, colour: String): Pet
    updatePet(petId: ID!, name: String, age: String, gender: String, species: String, description: String, city: String, country: String, breed: String, medicalHistory: String, colour: String, image: String): Pet
    removePet(petId: ID!): Pet
    removeLikedPet(petId: ID!): User
    addComment(petId: ID!, commentBody: String!): Pet
    removeComment(petId: ID!, commentId: ID!): Pet
    aboutMe(fullname: String, email: String, description: String, city: String, country: String): User
    sendMessage(to: ID!, messageText: String!): Message
  }
`;

module.exports = typeDefs;

/* aboutMe(id: ID!, fullname: String, email: String, description: String, city: String, country: String): User */
/* addPet(name: String!, age: String!, gender: String!, species: String!, description: String!, city: String!, country: String!, medicalHistory: String!, image: String!): User */