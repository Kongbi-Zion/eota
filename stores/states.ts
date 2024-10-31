// Dependencies ===============
import { createChapter, createConversation } from "~/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  type Character,
  type Chapter,
  type CreateChapterInput,
  type CreateConversationInput,
  type Conversation,
} from "~/src/types/amplify";
import {
  getChapter,
  getChapterConversations,
  getChapters,
  getCharacter,
  getCharacterConversations,
  getCharacters,
} from "~/src/graphql/queries";
export const useStatesStore = defineStore("states", () => {
  // Types =====================

  type NewCharacterConversationType = Conversation & {
    characterName: string;
  };

  type CharacterConversationsCashType = {
    characterId: string;
    characterConversations: NewCharacterConversationType[];
  };

  // State =====================
  const client = generateClient();
  const chapters = ref<Chapter[]>([]);
  const characters = ref<Character[]>([]);
  const characterConversations = ref<NewCharacterConversationType[]>([]);
  const characterConversationsCash = ref<CharacterConversationsCashType[]>([]);

  // Actions ====================
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
  const handleCreateConversation = async (input: CreateConversationInput) => {
    try {
      const result = await client.graphql({
        query: createConversation,
        variables: {
          input,
        },
      });

      const characterId = result.data.createConversation.characterId;

      const result2 = await client.graphql({
        query: getCharacter,
        variables: {
          characterId: characterId,
        },
      });

      characterConversations.value.push({
        ...result.data.createConversation,
        characterName: result2.data.getCharacter.characterName,
      });

      // characterConversationsCash.value[characterId] = {
      //   ...result.data.createConversation,
      //   characterName: result2.data.getCharacter.characterName,
      // }

      console.log("result: ", result.data.createConversation);
      return { success: true, user: result.data.createConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  const listCharacterConversations = async (characterId: string) => {
    const conversations = [];
    characterConversations.value = [];
    try {
      const result = await client.graphql({
        query: getCharacterConversations,
        variables: {
          characterId: characterId,
          limit: 10,
        },
      });

      for (const conversation of result.data.getCharacterConversations.items) {
        const result = await client.graphql({
          query: getCharacter,
          variables: {
            characterId: conversation.characterId,
          },
        });

        conversations.push({
          ...conversation,
          characterName: result.data.getCharacter.characterName,
        });

        characterConversationsCash.value.push({
          characterId: conversation.characterId,
          characterConversations: conversations,
        });
      }

      characterConversations.value = conversations;

      return { success: true, conversations: characterConversations.value };
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
    characterConversations,
    handleCreateChapter,
    handleCreateConversation,
    listCharacterConversations,
  };
});
