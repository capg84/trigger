import { gql } from '@apollo/client';


// Login user mution 
export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login( email: $email password: $password) {
      token 
      user {
        _id
        username
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
mutation addPet(name: String!, age: String!, gender: String!, species: String!, description: String!, city: String!, country: String!, medicalHistory: String!, image: String!) {
    addPet(name: $name, age: $age, gender: $gender, species: $species, description: $description, city: $city, country: $country, medicalHistory: $medicalHistory, image: $image){
        _id
        fullname
        userPets{
            _id
        }
  }
}
`;

export const UPDATE_PET = gql`
mutation updatePet ($petId: ID!, $name: String, $age: String, $gender: String, $species: String, $description: String, $city: String, $country: String, $breed: String, $medicalHistory: String, $colour: String, $image: String){
  updatePet (petId: $petId, name: $name, age: $age, gender: $gender, species: $species, description: $description, city: $city, country: $country, breed: $breed, medicalHistory: $medicalHistory, colour: $colour, image: $image){
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
  mutation addComment($petId: ID!, $commentBody: String!){
    addComment(petId: $petId, commentBody: $petId){
      _id
      comments{
        _id
        commenter
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

export const ABOUT_ME = gql`
mutation aboutMe (_id: ID!, description: String!, city: String!, country: String!){
  aboutMe (_id: $_id, description: $description, city: $city, country: $country){
    _id
    description
    city
    country
  }
}
`;

export const SEND_MESSAGE = gql`
 mutation sendMessage($to: ID!, $messageText: String!) {
  sendMessage(to: $to, messageText: messageText){
    _id
    messageText
    read
    dateCreated
    from
    to
  }
 }
`;






