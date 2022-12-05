import { gql } from '@apollo/client';


// Login user mution 
export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login( email: $email password: $password) {
      token user {
        _id
        username
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation addUser(
    $fullname: String!, 
    $email: String!, 
    $password: String!, 
    $city: String!, 
    $country: String!, 
    $description: String!) {
    addUser(
      fullname: $fullname, 
      email: $email,
      password: $password,
      city: $city, 
      country: $country, 
      description: $description) {
      token
      user {
        _id
        email
        
      }
    }
  }
`;

export const CREATE_PET = gql`
mutation createPet(
  $species: String!, 
  $name: String!, 
  $age: String!, 
  $gender: String!, 
  $description: String!, 
  $city: String!,
  $country: String!, 
  $breed: String!, 
  $colour: String!,
  $medicalHistory: String!
  $image: String! ) {
    createPet(
      species: $species, 
      name: $name, 
      age: $age,
      gender: $gender, 
      description: $description, 
      city: $city,
      country: $country,
      breed: $breed,
      colour: $colour,
      medicalHistory: $medicalHistory,
      image: $image) {
        token
        user {
        _id
        name

    }
  }
}

`;

export const REMOVE_PET = gql`

`;

/* export const LIKE_PET = gql`

`;

export const COMMENT_PET = gql`

`;

export const MESSAGE_USER = gql`

`;

export const UPDATE_USER = gql`

`;
 */
export const UPDATE_PET = gql`

`;








