<template>
  <div class="h-full w-full overflow-x-hidden text-gray-400">
    <div class="flex justify-center px-5 py-24 md:py-32">
      <div class="w-full max-w-screen-xl md:px-5">
        <div>
          <h1 class="mb-5 text-lg font-bold text-gray-50">Conversations</h1>
          <div class="gap-5 max-md:space-y-8 md:flex">
            <div
              class="no-scrollbar h-full min-h-[70vh] w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-2/3"
            >
              <div class="h-full w-full overflow-y-auto">
                <div class="w-full space-y-5">
                  <div
                    v-for="conversation in conversations"
                    :key="conversation.id"
                    class="rounded-lg border border-gray-600 px-5 py-3"
                  >
                    <NuxtLink
                      :to="`/conversation-options/${conversation.id}`"
                      class="space-y-2"
                    >
                      <p>
                        <span class="text-gray-50">Character name: </span
                        >{{ conversation.characterName }}
                      </p>
                      <p>{{ conversation.message }}</p>
                    </NuxtLink>
                  </div>
                </div>
                <div v-if="!isLoading && characters.length == 0">
                  Looks like it's empty here! Use the form on the right to start
                  adding characters.
                </div>
                <svg
                  v-if="isLoading"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="4" cy="12" r="3" fill="currentColor">
                    <animate
                      id="svgSpinners3DotsBounce0"
                      attributeName="cy"
                      begin="0;svgSpinners3DotsBounce1.end+0.25s"
                      calcMode="spline"
                      dur="0.6s"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                      values="12;6;12"
                    />
                  </circle>
                  <circle cx="12" cy="12" r="3" fill="currentColor">
                    <animate
                      attributeName="cy"
                      begin="svgSpinners3DotsBounce0.begin+0.1s"
                      calcMode="spline"
                      dur="0.6s"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                      values="12;6;12"
                    />
                  </circle>
                  <circle cx="20" cy="12" r="3" fill="currentColor">
                    <animate
                      id="svgSpinners3DotsBounce1"
                      attributeName="cy"
                      begin="svgSpinners3DotsBounce0.begin+0.2s"
                      calcMode="spline"
                      dur="0.6s"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                      values="12;6;12"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            <div
              class="max-h-fit w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-1/3"
            >
              <div class="w-full">
                <div
                  class="mb-7 mt-2 text-center text-lg font-bold text-gray-50"
                >
                  <p>Add conversation</p>
                </div>

                <div class="mb-2 flex w-full flex-wrap space-y-5">
                  <div class="w-full">
                    <select
                      id="chapterId"
                      type="text"
                      name="chapterId"
                      v-model="chapterId"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.chapterId ? 'border-red-500' : 'border-gray-600'
                      "
                      placeholder="Chapter"
                    >
                      <option value="" disabled>Select a chapter</option>
                      <option
                        v-for="chapter in chapters"
                        :key="chapter.id"
                        :value="chapter.id"
                      >
                        {{ chapter.chapterTitle }}
                      </option>
                    </select>

                    <p
                      v-if="errors?.chapterId"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.chapterId }}
                    </p>
                  </div>
                  <div class="w-full">
                    <select
                      id="characterId"
                      type="text"
                      name="characterId"
                      v-model="characterId"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.characterId
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Character"
                    >
                      <option value="" disabled>Select a character</option>
                      <option
                        v-for="conversation in characters"
                        :key="conversation.id"
                        :value="conversation.id"
                      >
                        {{ conversation.characterName }}
                      </option>
                    </select>

                    <p
                      v-if="errors?.characterId"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.characterId }}
                    </p>
                  </div>
                  <div class="w-full">
                    <select
                      id="hasOptions"
                      type="text"
                      name="hasOptions"
                      v-model="hasOptions"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.hasOptions
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Character"
                    >
                      <option :value="false">False</option>
                      <option :value="true">True</option>
                    </select>

                    <p
                      v-if="errors?.hasOptions"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.hasOptions }}
                    </p>
                  </div>
                  <div class="w-full">
                    <select
                      id="firstConversation"
                      type="text"
                      name="firstConversation"
                      v-model="firstConversation"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.firstConversation
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Character"
                    >
                      <option :value="false">False</option>
                      <option :value="true">True</option>
                    </select>

                    <p
                      v-if="errors?.firstConversation"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.firstConversation }}
                    </p>
                  </div>
                  <div class="w-full">
                    <textarea
                      id="chapterTitle"
                      type="text"
                      name="chapterTitle"
                      v-model="message"
                      :rows="5"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors?.message ? 'border-red-500' : 'border-gray-600'
                      "
                      placeholder="Message"
                    ></textarea>

                    <p
                      v-if="errors?.message"
                      class="mt-1 text-sm font-light text-red-500"
                    >
                      {{ errors?.message }}
                    </p>
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    :disabled="pending"
                    type="submit"
                    class="flex w-full items-center justify-center rounded bg-gray-600 px-7 py-3 text-center text-sm font-bold leading-snug text-white shadow-md transition duration-150 ease-in-out active:shadow-lg"
                    @click="handleCreate()"
                  >
                    <svg
                      v-if="pending"
                      aria-hidden="true"
                      role="isLoading"
                      class="mr-1 inline h-3.5 w-3.5 animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div>
                      <span v-if="!pending">Create</span>
                      <span v-else>Please wait...</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(true);
const pending = ref(false);
const errors = ref<any>({});

const store = useStatesStore();

const chapterId = ref("");
const characterId = ref("");
const message = ref("");
const hasOptions = ref(true);
const firstConversation = ref(false);

const chapters = computed(() => store.chapters);
const characters = computed(() => store.characters);
const conversations = computed(() => store.conversations);

onMounted(async () => {
  if (conversations.value.length == 0) {
    store.listConversations().then(() => {
      isLoading.value = false;
    });
  } else {
    isLoading.value = false;
  }

  if (chapters.value.length === 0) {
    store.listChapters();
  }
  if (characters.value.length === 0) {
    store.listCharacters();
  }
});

const handleCreate = async () => {
  if (!chapterId.value || !message.value || !characterId.value) {
    if (!chapterId.value) {
      errors.value.chapterId = "Required!";
    }
    if (!characterId.value) {
      errors.value.characterId = "Required!";
    }
    if (!message.value) {
      errors.value.message = "Required!";
    }
    return;
  }

  pending.value = true;
  store
    .handleCreateConversation({
      chapterId: chapterId.value,
      characterId: characterId.value,
      message: message.value,
      hasOptions: hasOptions.value,
      firstConversation: firstConversation.value,
    })
    .then(() => {
      pending.value = false;
    });
};
</script>

<style scoped></style>
