// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onCreateCharacter = `subscription OnCreateCharacter {
  onCreateCharacter {
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
export const onUpdateCharacter = `subscription OnUpdateCharacter {
  onUpdateCharacter {
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
export const onDeleteCharacter = `subscription OnDeleteCharacter {
  onDeleteCharacter {
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
export const onCreateEpisode = `subscription OnCreateEpisode {
  onCreateEpisode {
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
export const onUpdateEpisode = `subscription OnUpdateEpisode {
  onUpdateEpisode {
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
export const onDeleteEpisode = `subscription OnDeleteEpisode {
  onDeleteEpisode {
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
