/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/amplify";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onOptionResponse = /* GraphQL */ `subscription OnOptionResponse {
  onOptionResponse {
    id
    conversationType
    imageUrl
    relicId
    puzzleId
    message
    characterId
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnOptionResponseSubscriptionVariables,
  APITypes.OnOptionResponseSubscription
>;
