<template>
  <div class="h-full w-full overflow-x-hidden text-gray-400">
    <div class="flex justify-center px-5 py-24 md:py-32">
      <div class="w-full max-w-screen-xl md:px-5">
        <div>
          <h1 class="mb-5 text-lg font-bold text-gray-50">Puzzels</h1>
          <div class="gap-5 max-md:space-y-8 md:flex">
            <div
              class="no-scrollbar h-full min-h-[70vh] w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-2/3"
            >
              <div class="h-full w-full overflow-y-auto">
                <div v-if="puzzles.length != 0" class="w-full space-y-5">
                  <div
                    v-for="puzzle in puzzles"
                    :key="puzzle.id"
                    class="rounded-lg border border-gray-600 px-5 py-3"
                  >
                    <div class="space-y-3">
                      <p>
                        <span class="text-gray-50">Chapter title: </span
                        >{{ puzzle.chapterTitle }}
                      </p>
                      <p>
                        <span class="text-gray-50">Puzzle name: </span
                        >{{ puzzle.puzzleName }}
                      </p>
                      <p>
                        <span class="text-gray-50">Puzzle type: </span
                        >{{ puzzle.puzzleType }}
                      </p>
                      <p>
                        <span class="text-gray-50">Hint: </span
                        >{{ puzzle.hint }}
                      </p>
                      <p>
                        <span class="text-gray-50">Encrypted message: </span
                        >{{ puzzle.encryptedMessage }}
                      </p>
                      <p>
                        <span class="text-gray-50">Decrypted message: </span
                        >{{ puzzle.decryptedMessage }}
                      </p>
                      <p>
                        <span class="text-gray-50">puzzleDescription: </span
                        >{{ puzzle.puzzleDescription }}
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="!isLoading && puzzles.length == 0">
                  Looks like it's empty here! Use the form on the right to start
                  adding chapters.
                </div>
                <div v-if="isLoading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <circle cx="3" cy="12" r="2" fill="currentColor" />
                      <circle cx="21" cy="12" r="2" fill="currentColor" />
                      <circle cx="12" cy="21" r="2" fill="currentColor" />
                      <circle cx="12" cy="3" r="2" fill="currentColor" />
                      <circle cx="5.64" cy="5.64" r="2" fill="currentColor" />
                      <circle cx="18.36" cy="18.36" r="2" fill="currentColor" />
                      <circle cx="5.64" cy="18.36" r="2" fill="currentColor" />
                      <circle cx="18.36" cy="5.64" r="2" fill="currentColor" />
                      <animateTransform
                        attributeName="transform"
                        dur="1.5s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div
              class="max-h-fit w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-1/3"
            >
              <div class="w-full">
                <div class="mb-6 text-center text-lg font-bold text-gray-50">
                  <p>Create puzzle</p>
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

                  <div class="mb-2 w-full">
                    <input
                      id="puzzleName"
                      type="text"
                      name="puzzleName"
                      v-model="puzzleName"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors.puzzleName ? 'border-red-500' : 'border-gray-600'
                      "
                      placeholder="Puzzle name"
                    />
                    <p
                      v-if="errors.puzzleName"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors.puzzleName }}
                    </p>
                  </div>

                  <div class="w-full">
                    <select
                      id="puzzleType"
                      type="text"
                      name="puzzleType"
                      v-model="puzzleType"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.puzzleType
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Puzzle type"
                    >
                      <option value="" disabled>Select puzzle type</option>
                      <option value="CYPHER_AND_RIDDLE">
                        CYPHER_AND_RIDDLE
                      </option>
                      <option value="LOGIC_PUZZLE_AND_PATTERN_RECOGNITION">
                        LOGIC_PUZZLE_AND_PATTERN_RECOGNITION
                      </option>
                    </select>

                    <p
                      v-if="errors?.puzzleType"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.puzzleType }}
                    </p>
                  </div>

                  <div class="mb-2 w-full">
                    <input
                      id="hint"
                      type="text"
                      name="hint"
                      v-model="hint"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors.hint ? 'border-red-500' : 'border-gray-600'
                      "
                      placeholder="Hint"
                    />
                    <p
                      v-if="errors.hint"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors.hint }}
                    </p>
                  </div>
                  <div class="w-full">
                    <textarea
                      id="encryptedMessage"
                      type="text"
                      name="encryptedMessage"
                      v-model="encryptedMessage"
                      :rows="5"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors?.encryptedMessage
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Encrypted message"
                    ></textarea>

                    <p
                      v-if="errors?.encryptedMessage"
                      class="mt-1 text-sm font-light text-red-500"
                    >
                      {{ errors?.encryptedMessage }}
                    </p>
                  </div>
                  <div class="w-full">
                    <textarea
                      id="decryptedMessage"
                      type="text"
                      name="decryptedMessage"
                      v-model="decryptedMessage"
                      :rows="5"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors?.decryptedMessage
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Decrypted message"
                    ></textarea>

                    <p
                      v-if="errors?.decryptedMessage"
                      class="mt-1 text-sm font-light text-red-500"
                    >
                      {{ errors?.decryptedMessage }}
                    </p>
                  </div>
                  <div class="w-full">
                    <textarea
                      id="puzzleDescription"
                      type="text"
                      name="puzzleDescription"
                      v-model="puzzleDescription"
                      :rows="5"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors?.puzzleDescription
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Puzzle description"
                    ></textarea>

                    <p
                      v-if="errors?.puzzleDescription"
                      class="mt-1 text-sm font-light text-red-500"
                    >
                      {{ errors?.puzzleDescription }}
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
import { PUZZLETYPE } from "~/src/types/amplify";

const isLoading = ref(true);
const pending = ref(false);

const errors = ref<any>({});
const chapterId = ref("");
const hint = ref("");
const puzzleType = ref<PUZZLETYPE>(PUZZLETYPE.CYPHER_AND_RIDDLE);
const puzzleName = ref("");
const decryptedMessage = ref("");
const encryptedMessage = ref("");
const puzzleDescription = ref("");

const store = useStatesStore();
const puzzles = computed(() => store.puzzles);
const chapters = computed(() => store.chapters);

onMounted(async () => {
  if (puzzles.value.length == 0) {
    store.listPuzzles().then(() => {
      isLoading.value = false;
    });
  } else {
    isLoading.value = false;
  }

  if (chapters.value.length === 0) {
    store.listChapters();
  }
});

const handleCreate = async () => {
  pending.value = true;
  store
    .handleCreatePuzzle({
      chapterId: chapterId.value,
      puzzleName: puzzleName.value,
      puzzleType: puzzleType.value,
      hint: hint.value,
      encryptedMessage: encryptedMessage.value,
      decryptedMessage: decryptedMessage.value,
      puzzleDescription: puzzleDescription.value,
    })
    .then(() => {
      pending.value = false;
    });
};
</script>

<style scoped></style>
