/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/amplify";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onNotifyConversationResponse =
  /* GraphQL */ `subscription OnNotifyConversationResponse {
  onNotifyConversationResponse {
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
` as GeneratedSubscription<
    APITypes.OnNotifyConversationResponseSubscriptionVariables,
    APITypes.OnNotifyConversationResponseSubscription
  >;
