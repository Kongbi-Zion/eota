// Dependencies ===============
import { createChapter } from "~/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import type { CreateChapterInput } from "~/src/types/amplify";
export const useStatesStore = defineStore("states", () => {
  // State =====================
  const client = generateClient();

  // Actions ====================
  const createChap = async (input: CreateChapterInput) => {
    try {
      const result = await client.graphql({
        query: createChapter,
        variables: {
          input,
        },
      });

      console.log("result: ", result);

      // localStorage.setItem(
      //   "group_chat_user",
      //   JSON.stringify(result.data.createUserAccount),
      // );
      // console.log(
      //   "result.data.createUserAccount",
      //   result.data.createUserAccount,
      // );

      // return { success: true, user: result.data.createUserAccount };
    } catch (error) {
      console.log("result=====", error);
      return { success: false, error: error };
    }
  };

  return {
    createChap,
  };
});
