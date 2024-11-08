// Dependencies ===============
import {
  createChapter,
  createCharacter,
  createConversation,
  createConversationPuzzle,
} from "~/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  type Character,
  type Chapter,
  type CreateChapterInput,
  type CreateConversationInput,
  type Conversation,
  type CreateCharacterInput,
  type Option,
  type Puzzle,
  type CreatePuzzleInput,
} from "~/src/types/amplify";
import {
  getChapter,
  getChapters,
  getCharacter,
  getCharacterConversations,
  getCharacters,
  getConversation,
  getConversationOptions,
  getConversations,
  getPuzzle,
  getPuzzles,
} from "~/src/graphql/queries";
export const useStatesStore = defineStore("states", () => {
  // Types =====================
  type CharacterConversationsCashType = {
    characterId: string;
    conversations: Conversation[];
  };
  type conversationOptionsCashType = {
    conversationId: string;
    options: Option[];
  };

  type Conversations = Conversation & {
    characterName: string;
    characterBackstory: string;
  };
  type Puzzles = Puzzle & {
    chapterTitle: string;
  };

  // State =====================
  const client = generateClient();
  const chapters = ref<Chapter[]>([]);
  const characters = ref<Character[]>([]);
  const characterConversationsCash = ref<CharacterConversationsCashType[]>([]);
  const conversationsOptionsCash = ref<conversationOptionsCashType[]>([]);
  const conversations = ref<Conversations[]>([]);
  const options = ref<Option[]>([]);
  const puzzles = ref<Puzzles[]>([]);
  const conversation = ref<Conversation>();

  // Actions ====================

  // create
  const handleCreateChapter = async (input: CreateChapterInput) => {
    try {
      const result = await client.graphql({
        query: createChapter,
        variables: {
          input,
        },
      });
      chapters.value.push(result.data.createChapter);
      return { success: true, user: result.data.createChapter };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const handleCreateCharacter = async (input: CreateCharacterInput) => {
    try {
      const result = await client.graphql({
        query: createCharacter,
        variables: {
          input,
        },
      });
      characters.value.push(result.data.createCharacter);
      return { success: true, user: result.data.createCharacter };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const handleCreateConversation = async (input: CreateConversationInput) => {
    try {
      const result = await client.graphql({
        query: createConversation,
        variables: {
          input,
        },
      });

      const character = await client.graphql({
        query: getCharacter,
        variables: {
          characterId: input.characterId,
        },
      });
      if (character) {
        conversations.value.push({
          ...result.data.createConversation,
          characterName: character.data.getCharacter.characterName,
          characterBackstory: character.data.getCharacter.characterBackstory,
        });
      }

      return { success: true, user: result.data.createConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const handleCreateCharacterConversation = async (
    input: CreateConversationInput,
    characterId: string,
    index: number,
  ) => {
    try {
      const result = await client.graphql({
        query: createConversation,
        variables: {
          input,
        },
      });
      if (characterId == result.data.createConversation.characterId) {
        characterConversationsCash.value.push({
          characterId,
          conversations: [
            ...characterConversationsCash.value[index]?.conversations,
            result.data.createConversation,
          ],
        });
      }
      return { success: true, user: result.data.createConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const handleCreateConversationOption = async (
    input: CreateConversationInput,
    characterId: string,
    index: number,
  ) => {
    try {
      const result = await client.graphql({
        query: createConversation,
        variables: {
          input,
        },
      });
      if (characterId == result.data.createConversation.characterId) {
        characterConversationsCash.value.push({
          characterId,
          conversations: [
            ...characterConversationsCash.value[index]?.conversations,
            result.data.createConversation,
          ],
        });
      }
      return { success: true, user: result.data.createConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const handleCreatePuzzle = async (input: CreatePuzzleInput) => {
    try {
      const result = await client.graphql({
        query: createConversationPuzzle,
        variables: {
          input,
        },
      });

      const chapter = await client.graphql({
        query: getChapter,
        variables: {
          chapterId: result.data.createConversationPuzzle.chapterId,
        },
      });

      puzzles.value.push({
        ...result.data.createConversationPuzzle,
        chapterTitle: chapter.data.getChapter.chapterTitle,
      });
      return { success: true, puzzle: result.data.createConversationPuzzle };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  // get
  const handleGetConversation = async (conversationId: string) => {
    try {
      const result = await client.graphql({
        query: getConversation,
        variables: {
          conversationId,
        },
      });
      conversation.value = result.data.getConversation;
      return { success: true, conversation: result.data.getConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  // list
  const listCharacterConversations = async (characterId: string) => {
    try {
      const result = await client.graphql({
        query: getCharacterConversations,
        variables: {
          characterId: characterId,
          limit: 100,
        },
      });

      const character = await client.graphql({
        query: getCharacter,
        variables: {
          characterId,
        },
      });

      console.log("character: ", character);

      characterConversationsCash.value.push({
        characterId,
        conversations: result.data.getCharacterConversations.items,
      });

      return { success: true, conversations: characterConversationsCash.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  const listChapters = async () => {
    try {
      const result = await client.graphql({
        query: getChapters,
        variables: {
          limit: 100,
        },
      });
      chapters.value = result.data.getChapters.items;
      return { success: true, conversations: chapters.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const listCharacters = async () => {
    try {
      const result = await client.graphql({
        query: getCharacters,
        variables: {
          limit: 100,
        },
      });
      characters.value = result.data.getCharacters.items;
      return { success: true, conversations: chapters.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const listConversations = async () => {
    try {
      const convers = [];
      const result = await client.graphql({
        query: getConversations,
        variables: {
          limit: 100,
        },
      });

      for (const conversation of result.data.getConversations.items) {
        const character = await client.graphql({
          query: getCharacter,
          variables: {
            characterId: conversation.characterId,
          },
        });
        convers.push({
          ...conversation,
          characterName: character.data.getCharacter.characterName,
          characterBackstory: character.data.getCharacter.characterBackstory,
        });
      }

      conversations.value = convers;
      return { success: true, conversations: conversations.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const listConversationOptions = async (conversationId: string) => {
    try {
      handleGetConversation(conversationId);

      const result = await client.graphql({
        query: getConversationOptions,
        variables: {
          conversationId: conversationId,
        },
      });

      conversationsOptionsCash.value.push({
        conversationId,
        options: result.data.getConversationOptions.items,
      });

      return {
        success: true,
        options: result.data.getConversationOptions.items,
      };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  const listPuzzles = async () => {
    try {
      const puzs = [];
      const result = await client.graphql({
        query: getPuzzles,
        variables: {
          limit: 100,
        },
      });

      for (const puzzle of result.data.getPuzzles.items) {
        const chapter = await client.graphql({
          query: getChapter,
          variables: {
            chapterId: puzzle.chapterId,
          },
        });
        puzs.push({
          ...puzzle,
          chapterTitle: chapter.data.getChapter.chapterTitle,
        });
      }

      puzzles.value = puzs;
      return { success: true, conversations: conversations.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  const listRelics = async () => {
    try {
      const ops = [];
      const result = await client.graphql({
        query: getConversationOptions,
      });

      console.log("result: ", result);

      // for (const conversation of result.data.getConversationOptions.items) {
      //   const character = await client.graphql({
      //     query: getCharacter,
      //     variables: {
      //       characterId: conversation.characterId,
      //     },
      //   });
      //   convers.push({
      //     ...conversation,
      //     characterName: character.data.getCharacter.characterName,
      //     characterBackstory: character.data.getCharacter.characterBackstory,
      //   });
      // }

      // conversations.value = convers;
      return { success: true, conversations: conversations.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  return {
    chapters,
    characters,
    puzzles,
    handleCreatePuzzle,
    listPuzzles,
    listChapters,
    conversations,
    conversation,
    listRelics,
    listConversationOptions,
    listCharacters,
    listConversations,
    handleCreateChapter,
    handleCreateCharacter,
    handleCreateConversation,
    characterConversationsCash,
    conversationsOptionsCash,
    listCharacterConversations,
    handleCreateCharacterConversation,
  };
});
