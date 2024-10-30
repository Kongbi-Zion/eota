// Dependencies ===============
import { createChapter, createConversation } from "~/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import type {
  CreateChapterInput,
  CreateConversationInput,
} from "~/src/types/amplify";
import {
  getChapter,
  getChapterConversations,
  getCharacterConversations,
} from "~/src/graphql/queries";
export const useStatesStore = defineStore("states", () => {
  // State =====================
  const client = generateClient();
  const chapters = ref([
    {
      chapterId: "32eb6c65-892f-40fa-b108-b3bec9347c26",
      chapterTitle: "CHAPTER ONE",
    },
  ]);
  const characters = ref([
    {
      characterId: "1b280be2-6e4f-4483-9b15-f4126b39de4a",
      characterName: "Anonymous",
    },
  ]);
  const characterConversations = ref<any>([]);

  // Actions ====================
  const handleCreateChapter = async (input: CreateChapterInput) => {
    try {
      const result = await client.graphql({
        query: createChapter,
        variables: {
          input,
        },
      });
      console.log("result: ", result);
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
      characterConversations.value.push(result.data.createConversation);
      console.log("result: ", result.data.createConversation);
      return { success: true, user: result.data.createConversation };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };
  const listCharacterConversations = async () => {
    try {
      const result = await client.graphql({
        query: getCharacterConversations,
        variables: {
          characterId: "1b280be2-6e4f-4483-9b15-f4126b39de4a",
          limit: 10,
        },
      });
      characterConversations.value =
        result.data.getCharacterConversations.items;

      console.log(
        "characterConversations.value: ",
        characterConversations.value,
      );

      return { success: true, conversations: characterConversations.value };
    } catch (error) {
      console.log("error: ", error);
      return { success: false, error: error };
    }
  };

  return {
    chapters,
    characters,
    characterConversations,
    handleCreateChapter,
    handleCreateConversation,
    listCharacterConversations,
  };
});
