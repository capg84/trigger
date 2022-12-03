import { gql } from '@apollo/client';

export const SEARCH_PETS = gql`{
    allPet {
        _id
        species
        name
        age
        gender
        description
        city
        country
        breed
        medicalHistory
        colour
        image
        dateCreated
        } 
    Comments {
        _id
        userId
        commentBody
        dateCreated
         }
    }
}

`;

export const SEARCH_PET_SPECIES = gql`
speciesPet {
    _id
    species
    name
    age
    gender
    description
    city
    country
    breed
    medicalHistory
    colour
    image
    dateCreated
    } 
Comments {
    _id
    userId
    commentBody
    dateCreated
     }
}
}

`;

export const SEARCH_PET_BREED = gql`
speciesPet {
    _id
    species
    name
    age
    gender
    description
    city
    country
    breed
    medicalHistory
    colour
    image
    dateCreated
    } 
Comments {
    _id
    userId
    commentBody
    dateCreated
     }
}
}

`;

export const GET_COMMENTS = gql`

`;

export const GET_MESSAGES = gql`

`;

export const USER_PROFILE = gql`{
    user {
      fullname
      email
      city
      country
      description
      userpets {
        _id
        species
        name
        age
        gender
        description
        city
        country
        breed
        medicalHistory
        colour
        image
        dateCreated
        } 
    Comments {
        _id
        userId
        commentBody
        dateCreated
    }
        
      }
    }
`;

