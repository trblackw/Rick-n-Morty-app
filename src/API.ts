/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  postBlogId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  postBlogId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  commentPostId?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  commentPostId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateCharacterInput = {
  id?: string | null,
  name?: string | null,
  status?: string | null,
  species?: string | null,
  type?: string | null,
  gender?: string | null,
  origin?: LocationInput | null,
  location?: LocationInput | null,
  image?: string | null,
  created?: string | null,
};

export type LocationInput = {
  name?: string | null,
  type?: string | null,
  dimension?: string | null,
  created?: string | null,
};

export type UpdateCharacterInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  species?: string | null,
  type?: string | null,
  gender?: string | null,
  origin?: LocationInput | null,
  location?: LocationInput | null,
  image?: string | null,
  created?: string | null,
};

export type DeleteCharacterInput = {
  id?: string | null,
};

export type CreateEpisodeInput = {
  id?: string | null,
  name?: string | null,
  air_date?: string | null,
  episode?: string | null,
  created?: string | null,
};

export type UpdateEpisodeInput = {
  id: string,
  name?: string | null,
  air_date?: string | null,
  episode?: string | null,
  created?: string | null,
};

export type DeleteEpisodeInput = {
  id?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  species?: ModelStringFilterInput | null,
  type?: ModelStringFilterInput | null,
  gender?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  created?: ModelStringFilterInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export type ModelEpisodeFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  air_date?: ModelStringFilterInput | null,
  episode?: ModelStringFilterInput | null,
  created?: ModelStringFilterInput | null,
  and?: Array< ModelEpisodeFilterInput | null > | null,
  or?: Array< ModelEpisodeFilterInput | null > | null,
  not?: ModelEpisodeFilterInput | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
};

export type CreateBlogMutation = {
  createBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
};

export type UpdateBlogMutation = {
  updateBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
};

export type DeleteBlogMutation = {
  deleteBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
};

export type CreateCharacterMutation = {
  createCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
};

export type UpdateCharacterMutation = {
  updateCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
};

export type DeleteCharacterMutation = {
  deleteCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type CreateEpisodeMutationVariables = {
  input: CreateEpisodeInput,
};

export type CreateEpisodeMutation = {
  createEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type UpdateEpisodeMutationVariables = {
  input: UpdateEpisodeInput,
};

export type UpdateEpisodeMutation = {
  updateEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type DeleteEpisodeMutationVariables = {
  input: DeleteEpisodeInput,
};

export type DeleteEpisodeMutation = {
  deleteEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
      post:  {
        __typename: "Post",
        id: string,
        title: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
};

export type GetCharacterQuery = {
  getCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEpisodeQueryVariables = {
  id: string,
};

export type GetEpisodeQuery = {
  getEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type ListEpisodesQueryVariables = {
  filter?: ModelEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEpisodesQuery = {
  listEpisodes:  {
    __typename: "ModelEpisodeConnection",
    items:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    blog:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      blog:  {
        __typename: "Blog",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter:  {
    __typename: "Character",
    id: string | null,
    name: string | null,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    location:  {
      __typename: "Location",
      id: string | null,
      name: string | null,
      type: string | null,
      dimension: string | null,
      residents:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null,
    image: string | null,
    episode:  Array< {
      __typename: "Episode",
      id: string | null,
      name: string | null,
      air_date: string | null,
      episode: string | null,
      characters:  Array< {
        __typename: "Character",
        id: string | null,
        name: string | null,
        status: string | null,
        species: string | null,
        type: string | null,
        gender: string | null,
        image: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type OnCreateEpisodeSubscription = {
  onCreateEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type OnUpdateEpisodeSubscription = {
  onUpdateEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};

export type OnDeleteEpisodeSubscription = {
  onDeleteEpisode:  {
    __typename: "Episode",
    id: string | null,
    name: string | null,
    air_date: string | null,
    episode: string | null,
    characters:  Array< {
      __typename: "Character",
      id: string | null,
      name: string | null,
      status: string | null,
      species: string | null,
      type: string | null,
      gender: string | null,
      origin:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      location:  {
        __typename: "Location",
        id: string | null,
        name: string | null,
        type: string | null,
        dimension: string | null,
        created: string | null,
      } | null,
      image: string | null,
      episode:  Array< {
        __typename: "Episode",
        id: string | null,
        name: string | null,
        air_date: string | null,
        episode: string | null,
        created: string | null,
      } | null > | null,
      created: string | null,
    } | null > | null,
    created: string | null,
  } | null,
};
