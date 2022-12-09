import { gql } from "@apollo/client";

export const SEARCH_PETS = gql`
query allPets {
  allPets {
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
    dateCreated
    userlikeCount
    commentCount
  }
}
`;

export const SEARCH_PET_SPECIES = gql`
query speciesPet($species: String) {
  speciesPet(species: $species) {
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
    dateCreated
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

export const SEARCH_PET_BREED = gql`
  query petBreed {
    petBreed {
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
      dateCreated
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

//export const GET_COMMENTS = gql``;

export const GET_MESSAGES = gql`
  query getmessages($from: ID!) {
    getmessages(from: $from) {
      messageText
      read
      dateCreated
      from {
        _id
        fullname
      }
      to {
        _id
        fullname
      }
    }
  }
`;

export const USER_PROFILES = gql`
  query users {
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
      LikedPets {
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
  }
`;

export const MY_PROFILE = gql`
query me {
  me {
    _id
    fullname
    email
    city
    country
    description
    likedCount
    petCount
    messageCount
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
      dateCreated
      userlikeCount
      commentCount
      comments {
        commentBody
        dateCreated
      }
    }
    likedPets {
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
      dateCreated
      owner {
        _id
        fullname
      }
    }
    messages {
      messageText
      read
      dateCreated
      from {
        _id
        fullname
      }
    }
  }
}
`;


export const PET = gql`
query pet($petId: ID!) {
  pet(petId: $petId) {
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
    dateCreated
    owner {
      fullname
    }
    userlikeCount
    commentCount
    comments {
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

export const MESSAGES = gql`
query messages {
  messages {
    messageText
    dateCreated
    from {
      _id
      fullname
    }
  }
}
`;