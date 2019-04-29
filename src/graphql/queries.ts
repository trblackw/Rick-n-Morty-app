export const getCharacter = `query GetCharacter($id: ID!) {
  getCharacter(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      created
    }
    location {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      created
    }
    image
    episode {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      created
    }
    created
  }
}
`;
export const listCharacters = `query ListCharacters(
  $filter: ModelCharacterFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        created
      }
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
    nextToken
  }
}
`;
export const getEpisode = `query GetEpisode($id: ID!) {
  getEpisode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        created
      }
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
    created
  }
}
`;
export const listEpisodes = `query ListEpisodes(
  $filter: ModelEpisodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      created
    }
    nextToken
  }
}
`;
