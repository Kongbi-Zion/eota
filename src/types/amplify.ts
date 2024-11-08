/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  currentChapterId: string;
  completedChapterIds?: Array<string> | null;
  solvedPuzzleIds?: Array<string> | null;
  unlockedRelicIds?: Array<string> | null;
  unlockedCharacterIds?: Array<string> | null;
};

export type Player = {
  __typename: "Player";
  id: string;
  currentChapterId: string;
  completedChapterIds?: Array<string> | null;
  solvedPuzzleIds?: Array<string> | null;
  unlockedRelicIds?: Array<string> | null;
  unlockedCharacterIds?: Array<string> | null;
};

export type UpdatedPlayerInput = {
  id: string;
  currentChapterId: string;
  completedChapterIds?: Array<string> | null;
  solvedPuzzleIds?: Array<string> | null;
  unlockedRelicIds?: Array<string> | null;
  unlockedCharacterIds?: Array<string> | null;
};

export type CreatePuzzleInput = {
  puzzleName: string;
  puzzleDescription: string;
  puzzleType: PUZZLETYPE;
  encryptedMessage: string;
  decryptedMessage: string;
  hint: string;
  chapterId: string;
};

export enum PUZZLETYPE {
  CYPHER_AND_RIDDLE = "CYPHER_AND_RIDDLE",
  LOGIC_PUZZLE_AND_PATTERN_RECOGNITION = "LOGIC_PUZZLE_AND_PATTERN_RECOGNITION",
}

export type Puzzle = {
  __typename: "Puzzle";
  id: string;
  puzzleId: string;
  puzzleName: string;
  puzzleType: PUZZLETYPE;
  encryptedMessage: string;
  decryptedMessage: string;
  hint: string;
  puzzleDescription: string;
  chapterId: string;
};

export type CreateOptionInput = {
  relicId?: string | null;
  puzzleId?: string | null;
  conversationId: string;
  nextConversationId: string;
  nextStepType: CONVERSATIONTYPE;
  optionText: string;
};

export enum CONVERSATIONTYPE {
  CONVERSATION = "CONVERSATION",
  PUZZLE = "PUZZLE",
  RELIC = "RELIC",
  GENERATIVE_IMAGE = "GENERATIVE_IMAGE",
}

export type Option = {
  __typename: "Option";
  id: string;
  optionId: string;
  relicId?: string | null;
  puzzleId?: string | null;
  conversationId: string;
  nextConversationId: string;
  nextStepType: CONVERSATIONTYPE;
  optionText: string;
};

export type CreateConversationInput = {
  message: string;
  chapterId: string;
  characterId: string;
  hasOptions: boolean;
  firstConversation: boolean;
};

export type Conversation = {
  __typename: "Conversation";
  id: string;
  message: string;
  conversationId: string;
  chapterId: string;
  characterId: string;
  hasOptions: boolean;
  firstConversation: boolean;
  options?: Array<Option> | null;
};

export type UpdateConversationInput = {
  id: string;
  message: string;
  firstConversation: boolean;
  chapterId?: string | null;
  characterId?: string | null;
  hasOptions?: boolean | null;
};

export type CreateChapterInput = {
  chapterTitle: string;
};

export type Chapter = {
  __typename: "Chapter";
  id: string;
  chapterTitle: string;
};

export type CreateCharacterInput = {
  characterName: string;
  characterBackstory: string;
  role: CHARACTER_ROLE;
  baseHealth?: number | null;
  baseMana?: number | null;
};

export enum CHARACTER_ROLE {
  LIBRARIAN = "LIBRARIAN",
  GUIDE = "GUIDE",
  MAYOR = "MAYOR",
  HISTORIAN_PROFESSOR = "HISTORIAN_PROFESSOR",
}

export type Character = {
  __typename: "Character";
  id: string;
  characterName: string;
  characterBackstory: string;
  role: CHARACTER_ROLE;
  baseHealth?: number | null;
  baseMana?: number | null;
  conversation?: Array<Conversation> | null;
};

export type OptionInput = {
  gameState: GAMESTATE;
  nextStepType: string;
  conversationId?: string | null;
  optionId?: string | null;
};

export enum GAMESTATE {
  NEW = "NEW",
  CONTINUE = "CONTINUE",
}

export type ConversationResponseInput = {
  id: string;
  conversationType: CONVERSATIONTYPE;
  firstConversation: boolean;
  hasOptions: boolean;
  imageUrl?: string | null;
  relicId?: string | null;
  puzzleId?: string | null;
  message?: string | null;
  characterId?: string | null;
  chapterId?: string | null;
};

export type ConversationResponse = {
  __typename: "ConversationResponse";
  id: string;
  conversationType: CONVERSATIONTYPE;
  imageUrl?: string | null;
  relicId?: string | null;
  hasOptions?: boolean | null;
  firstConversation?: boolean | null;
  puzzleId?: string | null;
  message?: string | null;
  characterId?: string | null;
  chapterId?: string | null;
};

export type Conversations = {
  __typename: "Conversations";
  nextToken?: string | null;
  items: Array<Conversation>;
};

export type Puzzles = {
  __typename: "Puzzles";
  items: Array<Puzzle>;
};

export type Options = {
  __typename: "Options";
  items: Array<Option>;
};

export type Chapters = {
  __typename: "Chapters";
  nextToken?: string | null;
  items: Array<Chapter>;
};

export type Characters = {
  __typename: "Characters";
  items: Array<Character>;
};

export type CreatePlayerAccountMutationVariables = {
  input: CreatePlayerInput;
};

export type CreatePlayerAccountMutation = {
  createPlayerAccount: {
    __typename: "Player";
    id: string;
    currentChapterId: string;
    completedChapterIds?: Array<string> | null;
    solvedPuzzleIds?: Array<string> | null;
    unlockedRelicIds?: Array<string> | null;
    unlockedCharacterIds?: Array<string> | null;
  };
};

export type UpdatePlayerAccountMutationVariables = {
  input: UpdatedPlayerInput;
};

export type UpdatePlayerAccountMutation = {
  updatePlayerAccount: {
    __typename: "Player";
    id: string;
    currentChapterId: string;
    completedChapterIds?: Array<string> | null;
    solvedPuzzleIds?: Array<string> | null;
    unlockedRelicIds?: Array<string> | null;
    unlockedCharacterIds?: Array<string> | null;
  };
};

export type CreateConversationPuzzleMutationVariables = {
  input: CreatePuzzleInput;
};

export type CreateConversationPuzzleMutation = {
  createConversationPuzzle: {
    __typename: "Puzzle";
    id: string;
    puzzleId: string;
    puzzleName: string;
    puzzleType: PUZZLETYPE;
    encryptedMessage: string;
    decryptedMessage: string;
    hint: string;
    puzzleDescription: string;
    chapterId: string;
  };
};

export type CreateConversationOptionMutationVariables = {
  input: CreateOptionInput;
};

export type CreateConversationOptionMutation = {
  createConversationOption: {
    __typename: "Option";
    id: string;
    optionId: string;
    relicId?: string | null;
    puzzleId?: string | null;
    conversationId: string;
    nextConversationId: string;
    nextStepType: CONVERSATIONTYPE;
    optionText: string;
  };
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput;
};

export type CreateConversationMutation = {
  createConversation: {
    __typename: "Conversation";
    id: string;
    message: string;
    conversationId: string;
    chapterId: string;
    characterId: string;
    hasOptions: boolean;
    firstConversation: boolean;
    options?: Array<{
      __typename: "Option";
      id: string;
      optionId: string;
      relicId?: string | null;
      puzzleId?: string | null;
      conversationId: string;
      nextConversationId: string;
      nextStepType: CONVERSATIONTYPE;
      optionText: string;
    }> | null;
  };
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput;
};

export type UpdateConversationMutation = {
  updateConversation: {
    __typename: "Conversation";
    id: string;
    message: string;
    conversationId: string;
    chapterId: string;
    characterId: string;
    hasOptions: boolean;
    firstConversation: boolean;
    options?: Array<{
      __typename: "Option";
      id: string;
      optionId: string;
      relicId?: string | null;
      puzzleId?: string | null;
      conversationId: string;
      nextConversationId: string;
      nextStepType: CONVERSATIONTYPE;
      optionText: string;
    }> | null;
  };
};

export type CreateChapterMutationVariables = {
  input: CreateChapterInput;
};

export type CreateChapterMutation = {
  createChapter: {
    __typename: "Chapter";
    id: string;
    chapterTitle: string;
  };
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput;
};

export type CreateCharacterMutation = {
  createCharacter: {
    __typename: "Character";
    id: string;
    characterName: string;
    characterBackstory: string;
    role: CHARACTER_ROLE;
    baseHealth?: number | null;
    baseMana?: number | null;
    conversation?: Array<{
      __typename: "Conversation";
      id: string;
      message: string;
      conversationId: string;
      chapterId: string;
      characterId: string;
      hasOptions: boolean;
      firstConversation: boolean;
    }> | null;
  };
};

export type SendOptionMutationVariables = {
  input: OptionInput;
};

export type SendOptionMutation = {
  sendOption: boolean;
};

export type NotifyConversationResponseMutationVariables = {
  input: ConversationResponseInput;
};

export type NotifyConversationResponseMutation = {
  notifyConversationResponse: {
    __typename: "ConversationResponse";
    id: string;
    conversationType: CONVERSATIONTYPE;
    imageUrl?: string | null;
    relicId?: string | null;
    hasOptions?: boolean | null;
    firstConversation?: boolean | null;
    puzzleId?: string | null;
    message?: string | null;
    characterId?: string | null;
    chapterId?: string | null;
  };
};

export type GetOptionQueryVariables = {
  id?: string | null;
};

export type GetOptionQuery = {
  getOption: boolean;
};

export type GetCharacterConversationsQueryVariables = {
  limit: number;
  nextToken?: string | null;
  characterId: string;
};

export type GetCharacterConversationsQuery = {
  getCharacterConversations: {
    __typename: "Conversations";
    nextToken?: string | null;
    items: Array<{
      __typename: "Conversation";
      id: string;
      message: string;
      conversationId: string;
      chapterId: string;
      characterId: string;
      hasOptions: boolean;
      firstConversation: boolean;
    }>;
  };
};

export type GetChapterConversationsQueryVariables = {
  limit: number;
  nextToken?: string | null;
  chapterId: string;
};

export type GetChapterConversationsQuery = {
  getChapterConversations: {
    __typename: "Conversations";
    nextToken?: string | null;
    items: Array<{
      __typename: "Conversation";
      id: string;
      message: string;
      conversationId: string;
      chapterId: string;
      characterId: string;
      hasOptions: boolean;
      firstConversation: boolean;
    }>;
  };
};

export type GetConversationsQueryVariables = {
  limit: number;
  nextToken?: string | null;
};

export type GetConversationsQuery = {
  getConversations: {
    __typename: "Conversations";
    nextToken?: string | null;
    items: Array<{
      __typename: "Conversation";
      id: string;
      message: string;
      conversationId: string;
      chapterId: string;
      characterId: string;
      hasOptions: boolean;
      firstConversation: boolean;
    }>;
  };
};

export type GetPuzzleQueryVariables = {
  puzzleId: string;
};

export type GetPuzzleQuery = {
  getPuzzle: {
    __typename: "Puzzle";
    id: string;
    puzzleId: string;
    puzzleName: string;
    puzzleType: PUZZLETYPE;
    encryptedMessage: string;
    decryptedMessage: string;
    hint: string;
    puzzleDescription: string;
    chapterId: string;
  };
};

export type GetPuzzlesQueryVariables = {
  limit: number;
};

export type GetPuzzlesQuery = {
  getPuzzles: {
    __typename: "Puzzles";
    items: Array<{
      __typename: "Puzzle";
      id: string;
      puzzleId: string;
      puzzleName: string;
      puzzleType: PUZZLETYPE;
      encryptedMessage: string;
      decryptedMessage: string;
      hint: string;
      puzzleDescription: string;
      chapterId: string;
    }>;
  };
};

export type GetConversationOptionsQueryVariables = {
  conversationId: string;
};

export type GetConversationOptionsQuery = {
  getConversationOptions: {
    __typename: "Options";
    items: Array<{
      __typename: "Option";
      id: string;
      optionId: string;
      relicId?: string | null;
      puzzleId?: string | null;
      conversationId: string;
      nextConversationId: string;
      nextStepType: CONVERSATIONTYPE;
      optionText: string;
    }>;
  };
};

export type GetChapterQueryVariables = {
  chapterId: string;
};

export type GetChapterQuery = {
  getChapter: {
    __typename: "Chapter";
    id: string;
    chapterTitle: string;
  };
};

export type GetChaptersQueryVariables = {
  limit: number;
  nextToken?: string | null;
};

export type GetChaptersQuery = {
  getChapters: {
    __typename: "Chapters";
    nextToken?: string | null;
    items: Array<{
      __typename: "Chapter";
      id: string;
      chapterTitle: string;
    }>;
  };
};

export type GetCharacterQueryVariables = {
  characterId: string;
};

export type GetCharacterQuery = {
  getCharacter: {
    __typename: "Character";
    id: string;
    characterName: string;
    characterBackstory: string;
    role: CHARACTER_ROLE;
    baseHealth?: number | null;
    baseMana?: number | null;
    conversation?: Array<{
      __typename: "Conversation";
      id: string;
      message: string;
      conversationId: string;
      chapterId: string;
      characterId: string;
      hasOptions: boolean;
      firstConversation: boolean;
    }> | null;
  };
};

export type GetCharactersQueryVariables = {};

export type GetCharactersQuery = {
  getCharacters: {
    __typename: "Characters";
    items: Array<{
      __typename: "Character";
      id: string;
      characterName: string;
      characterBackstory: string;
      role: CHARACTER_ROLE;
      baseHealth?: number | null;
      baseMana?: number | null;
    }>;
  };
};

export type GetConversationQueryVariables = {
  conversationId?: string | null;
};

export type GetConversationQuery = {
  getConversation: {
    __typename: "Conversation";
    id: string;
    message: string;
    conversationId: string;
    chapterId: string;
    characterId: string;
    hasOptions: boolean;
    firstConversation: boolean;
    options?: Array<{
      __typename: "Option";
      id: string;
      optionId: string;
      relicId?: string | null;
      puzzleId?: string | null;
      conversationId: string;
      nextConversationId: string;
      nextStepType: CONVERSATIONTYPE;
      optionText: string;
    }> | null;
  };
};

export type OnNotifyConversationResponseSubscriptionVariables = {};

export type OnNotifyConversationResponseSubscription = {
  onNotifyConversationResponse?: {
    __typename: "ConversationResponse";
    id: string;
    conversationType: CONVERSATIONTYPE;
    imageUrl?: string | null;
    relicId?: string | null;
    hasOptions?: boolean | null;
    firstConversation?: boolean | null;
    puzzleId?: string | null;
    message?: string | null;
    characterId?: string | null;
    chapterId?: string | null;
  } | null;
};
