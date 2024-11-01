// Dependencies ===============
import {
  createChapter,
  createCharacter,
  createConversation,
} from "~/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  type Character,
  type Chapter,
  type CreateChapterInput,
  type CreateConversationInput,
  type Conversation,
  type CreateCharacterInput,
} from "~/src/types/amplify";
import {
  getChapters,
  getCharacter,
  getCharacterConversations,
  getCharacters,
} from "~/src/graphql/queries";
export const useStatesStore = defineStore("states", () => {
  // Types =====================
  type CharacterConversationsCashType = {
    characterId: string;
    conversations: Conversation[];
  };

  // State =====================
  const client = generateClient();
  const chapters = ref<Chapter[]>([]);
  const characters = ref<Character[]>([]);
  const characterConversationsCash = ref<CharacterConversationsCashType[]>([]);

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
  const handleCreateConversation = async (
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

  // get

  // list
  const listCharacterConversations = async (characterId: string) => {
    try {
      const result = await client.graphql({
        query: getCharacterConversations,
        variables: {
          characterId: characterId,
          limit: 10,
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

  return {
    chapters,
    characters,
    listChapters,
    listCharacters,
    characterConversationsCash,
    handleCreateCharacter,
    handleCreateChapter,
    handleCreateConversation,
    listCharacterConversations,
  };
});
