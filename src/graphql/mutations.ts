/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/amplify";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlayerAccount =
  /* GraphQL */ `mutation CreatePlayerAccount($input: CreatePlayerInput!) {
  createPlayerAccount(input: $input) {
    id
    currentChapterId
    completedChapterIds
    solvedPuzzleIds
    unlockedRelicIds
    unlockedCharacterIds
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreatePlayerAccountMutationVariables,
    APITypes.CreatePlayerAccountMutation
  >;
export const updatePlayerAccount =
  /* GraphQL */ `mutation UpdatePlayerAccount($input: UpdatedPlayerInput!) {
  updatePlayerAccount(input: $input) {
    id
    currentChapterId
    completedChapterIds
    solvedPuzzleIds
    unlockedRelicIds
    unlockedCharacterIds
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdatePlayerAccountMutationVariables,
    APITypes.UpdatePlayerAccountMutation
  >;
export const createConversationPuzzle =
  /* GraphQL */ `mutation CreateConversationPuzzle($input: CreatePuzzleInput!) {
  createConversationPuzzle(input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateConversationPuzzleMutationVariables,
    APITypes.CreateConversationPuzzleMutation
  >;
export const createConversationOption =
  /* GraphQL */ `mutation CreateConversationOption($input: CreateOptionInput!) {
  createConversationOption(input: $input) {
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
}
` as GeneratedMutation<
    APITypes.CreateConversationOptionMutationVariables,
    APITypes.CreateConversationOptionMutation
  >;
export const createConversation =
  /* GraphQL */ `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateConversationMutationVariables,
    APITypes.CreateConversationMutation
  >;
export const updateConversation =
  /* GraphQL */ `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
` as GeneratedMutation<
    APITypes.UpdateConversationMutationVariables,
    APITypes.UpdateConversationMutation
  >;
export const createChapter =
  /* GraphQL */ `mutation CreateChapter($input: CreateChapterInput!) {
  createChapter(input: $input) {
    id
    chapterTitle
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateChapterMutationVariables,
    APITypes.CreateChapterMutation
  >;
export const createCharacter =
  /* GraphQL */ `mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateCharacterMutationVariables,
    APITypes.CreateCharacterMutation
  >;
export const sendOption =
  /* GraphQL */ `mutation SendOption($input: OptionInput!) {
  sendOption(input: $input)
}
` as GeneratedMutation<
    APITypes.SendOptionMutationVariables,
    APITypes.SendOptionMutation
  >;
export const notifyConversationResponse =
  /* GraphQL */ `mutation NotifyConversationResponse($input: ConversationResponseInput!) {
  notifyConversationResponse(input: $input) {
    id
    conversationType
    imageUrl
    relicId
    hasOptions
    firstConversation
    puzzleId
    message
    characterId
    chapterId
    __typename
  }
}
` as GeneratedMutation<
    APITypes.NotifyConversationResponseMutationVariables,
    APITypes.NotifyConversationResponseMutation
  >;
