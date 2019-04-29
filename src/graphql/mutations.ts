// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createCharacter = `mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
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
export const updateCharacter = `mutation UpdateCharacter($input: UpdateCharacterInput!) {
  updateCharacter(input: $input) {
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
export const deleteCharacter = `mutation DeleteCharacter($input: DeleteCharacterInput!) {
  deleteCharacter(input: $input) {
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
export const createEpisode = `mutation CreateEpisode($input: CreateEpisodeInput!) {
  createEpisode(input: $input) {
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
export const updateEpisode = `mutation UpdateEpisode($input: UpdateEpisodeInput!) {
  updateEpisode(input: $input) {
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
export const deleteEpisode = `mutation DeleteEpisode($input: DeleteEpisodeInput!) {
  deleteEpisode(input: $input) {
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
