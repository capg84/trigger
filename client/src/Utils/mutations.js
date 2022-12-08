import { gql } from '@apollo/client';


// Login user mution 
export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login( email: $email password: $password) {
      token 
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($fullname: String!, $email: String!, $password: String!) {
    addUser(fullname: $fullname, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation AboutMe($fullname: String, $email: String, $description: String, $city: String, $country: String) {
  aboutMe(fullname: $fullname, email: $email, description: $description, city: $city, country: $country) {
    city
    country
    description
    email
    fullname
  }
}
`;

/* export const UPDATE_USER = gql`
mutation aboutMe($aboutMeId: ID!) {
  aboutMe(id: $aboutMeId) {
    fullname
    email
    city
    country
    description
  }
}
`; */

export const SAVE_PET = gql`
  mutation savePet($petId: ID!){
    savePet (petId: $petId){
      _id
      likedPets{
        _id
      }
    }
  }
`;

export const CREATE_PET = gql`
mutation addPet($name: String!, $age: String!, $gender: String!, $species: String!, $description: String!, $city: String!, $country: String!, $medicalHistory: String!, $image: String!) {
  addPet(name: $name, age: $age, gender: $gender, species: $species, description: $description, city: $city, country: $country, medicalHistory: $medicalHistory, image: $image) {
    _id
    fullname
    userPets {
      _id
      name
      age
      gender
      species
      description
      city
      country
      breed
      medicalHistory
      colour
      image
    }
  }
}
`;

export const UPDATE_PET = gql`
mutation updatePet($petId: ID!) {
  updatePet(petId: $petId) {
    _id
    name
    age
    gender
    species
    description
    city
    country
    breed
    medicalHistory
    colour
    image
  }
}
`;

export const REMOVE_PET = gql`
mutation removePet($petId: ID!){
  removePet (petId: $petId){
    _id
  }
}
`;

export const REMOVE_LIKE = gql`
  mutation removeLikedPet($petId: ID!){
    savePet (petId: $petId){
      _id
      likedPets{
        _id
      }
    }
  }
`;

export const COMMENT_PET = gql`
mutation addComment($petId: ID!, $commentBody: String!) {
  addComment(petId: $petId, commentBody: $commentBody) {
    _id
    name
    comments {
      _id
      commenter {
        _id
        fullname
      }
      commentBody
      dateCreated
    }
  }
}
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($petId: ID!, $commentId: ID!){
    removeComment(petId: $petId, commentId: $commentId){
      _id
      comments{
        _id
        commenter
        commentBody
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
mutation sendMessage($to: ID!, $messageText: String!) {
  sendMessage(to: $to, messageText: $messageText) {
    messageText
    dateCreated
    from {
      _id
    }
    to {
      _id
    }
    read
  }
}
`;






