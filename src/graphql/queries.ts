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
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetChapterConversationsQueryVariables,
    APITypes.GetChapterConversationsQuery
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
export const getChapter = /* GraphQL */ `query GetChapter($id: String!) {
  getChapter(id: $id) {
    id
    chapterTitle
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
