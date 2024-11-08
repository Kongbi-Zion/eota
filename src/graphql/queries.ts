/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/amplify";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOption = /* GraphQL */ `query GetOption($id: ID) {
  getOption(id: $id)
}
` as GeneratedQuery<APITypes.GetOptionQueryVariables, APITypes.GetOptionQuery>;
export const getCharacterConversations =
  /* GraphQL */ `query GetCharacterConversations(
  $limit: Int!
  $nextToken: String
  $characterId: String!
) {
  getCharacterConversations(
    limit: $limit
    nextToken: $nextToken
    characterId: $characterId
  ) {
    nextToken
    items {
      id
      message
      conversationId
      chapterId
      characterId
      hasOptions
      firstConversation
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetCharacterConversationsQueryVariables,
    APITypes.GetCharacterConversationsQuery
  >;
export const getChapterConversations =
  /* GraphQL */ `query GetChapterConversations(
  $limit: Int!
  $nextToken: String
  $chapterId: String!
) {
  getChapterConversations(
    limit: $limit
    nextToken: $nextToken
    chapterId: $chapterId
  ) {
    nextToken
    items {
      id
      message
      conversationId
      chapterId
      characterId
      hasOptions
      firstConversation
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetChapterConversationsQueryVariables,
    APITypes.GetChapterConversationsQuery
  >;
export const getConversations =
  /* GraphQL */ `query GetConversations($limit: Int!, $nextToken: String) {
  getConversations(limit: $limit, nextToken: $nextToken) {
    nextToken
    items {
      id
      message
      conversationId
      chapterId
      characterId
      hasOptions
      firstConversation
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationsQueryVariables,
    APITypes.GetConversationsQuery
  >;
export const getPuzzle = /* GraphQL */ `query GetPuzzle($puzzleId: String!) {
  getPuzzle(puzzleId: $puzzleId) {
    id
    puzzleId
    puzzleName
    puzzleType
    encryptedMessage
    decryptedMessage
    hint
    puzzleDescription
    chapterId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPuzzleQueryVariables, APITypes.GetPuzzleQuery>;
export const getPuzzles = /* GraphQL */ `query GetPuzzles($limit: Int!) {
  getPuzzles(limit: $limit) {
    items {
      id
      puzzleId
      puzzleName
      puzzleType
      encryptedMessage
      decryptedMessage
      hint
      puzzleDescription
      chapterId
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPuzzlesQueryVariables,
  APITypes.GetPuzzlesQuery
>;
export const getConversationOptions =
  /* GraphQL */ `query GetConversationOptions($conversationId: String!) {
  getConversationOptions(conversationId: $conversationId) {
    items {
      id
      optionId
      relicId
      puzzleId
      conversationId
      nextConversationId
      nextStepType
      optionText
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationOptionsQueryVariables,
    APITypes.GetConversationOptionsQuery
  >;
export const getChapter = /* GraphQL */ `query GetChapter($chapterId: String!) {
  getChapter(chapterId: $chapterId) {
    id
    chapterTitle
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
export const getChapters =
  /* GraphQL */ `query GetChapters($limit: Int!, $nextToken: String) {
  getChapters(limit: $limit, nextToken: $nextToken) {
    nextToken
    items {
      id
      chapterTitle
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetChaptersQueryVariables,
    APITypes.GetChaptersQuery
  >;
export const getCharacter =
  /* GraphQL */ `query GetCharacter($characterId: String!) {
  getCharacter(characterId: $characterId) {
    id
    characterName
    characterBackstory
    role
    baseHealth
    baseMana
    conversation {
      id
      message
      conversationId
      chapterId
      characterId
      hasOptions
      firstConversation
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetCharacterQueryVariables,
    APITypes.GetCharacterQuery
  >;
export const getCharacters = /* GraphQL */ `query GetCharacters {
  getCharacters {
    items {
      id
      characterName
      characterBackstory
      role
      baseHealth
      baseMana
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharactersQueryVariables,
  APITypes.GetCharactersQuery
>;
export const getConversation =
  /* GraphQL */ `query GetConversation($conversationId: String) {
  getConversation(conversationId: $conversationId) {
    id
    message
    conversationId
    chapterId
    characterId
    hasOptions
    firstConversation
    options {
      id
      optionId
      relicId
      puzzleId
      conversationId
      nextConversationId
      nextStepType
      optionText
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationQueryVariables,
    APITypes.GetConversationQuery
  >;
