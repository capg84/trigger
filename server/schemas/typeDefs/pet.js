const { gql } = require("apollo-server-express");
module.exports = gql`
  type Pet {
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
  type Query {
    pets: [Pet]!
    pet(petId: ID!): Pet
  }
  type Mutation {
    savePet(pet: PetInput!): User
    addPet(input: PetInput!): User
    updatePet(petId: ID!, input: PetInput!): Pet
    removePet(petId: ID!): Pet
    removeLikedPet(petId: ID!): User
    addComment(petId: ID!, commentBody: String!): Pet
    removeComment(petId: ID!, commentId: ID!): Pet
  }
`