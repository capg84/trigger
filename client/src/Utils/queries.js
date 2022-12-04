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

export const GET_MESSAGES = gql`{
    query getmessages ($from: ID!){
        getmessages (from: $from) {
            messageText
            read
            dateCreated
            from {
                _id
            }
            to {
                _id
            }
        }
    }
}
`;

export const USER_PROFILES = gql`{
    users {
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
        LikedPets{
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
        messages {
            _id
            messageText
            read
            dateCreated
            from {
                fullname
            }
            to {
                fullname
            }
        }
    }
`;

export const MY_PROFILE = gql`{
    query singleUser ($_id: ID!){
      me(_id: $_id){
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
        LikedPets{
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
        messages {
            _id
            messageText
            read
            dateCreated
            from {
                fullname
            }
            to {
                fullname
            }
        }
    }
`;

export const USER_LIKES = gql`{
    query userLikes ($userLikes: ID!){
        pets (userLikes: $userLikes) {
            _id
        }
    }
}
`;

export const PET = gql`{
    query pet ($_id: ID!){
        pets (_id: $_id) {
            _id
            name
            age
            gender
            species
            description
            city
            country
            breed
            medical history
            colour
            image
            dateCreated
            userLikes{
                _id
            }
            comments {
                userId {
                    _id
                }
                commentBody
                dateCreated
            }
        }
    }
}
`;
