<template>
  <div class="h-full w-full overflow-x-hidden text-gray-50">
    <div class="flex justify-center px-5 py-24 md:py-32">
      <div class="w-full max-w-screen-xl md:px-5">
        <div>
          <h1 class="mb-5 text-lg font-bold">Chapters</h1>
          <div class="gap-5 max-md:space-y-8 md:flex">
            <div
              class="no-scrollbar h-full max-h-[70vh] min-h-[70vh] w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-2/3"
            >
              <div class="h-full w-full space-y-5 overflow-y-auto">
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
                <div class="rounded-lg border border-gray-600 px-5 py-3">
                  <p>
                    A Journey Through the Whispers of Memory and the Echoes of
                    Lost Ambitions
                  </p>
                </div>
              </div>
            </div>
            <div
              class="max-h-fit w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-1/3"
            >
              <div class="w-full">
                <div class="mb-6 text-center text-lg font-bold">
                  <p>Create chapter</p>
                </div>

                <div class="-mt-2.5 mb-2 flex w-full flex-wrap space-y-2">
                  <div class="mb-2 w-full">
                    <label
                      class="mb-2.5 block text-base font-bold tracking-wide"
                      for="group_name"
                    >
                      Chapter Title
                    </label>
                    <input
                      id="chapterTitle"
                      type="text"
                      name="chapterTitle"
                      v-model="chapterTitle"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="error ? 'border-red-500' : 'border-gray-600'"
                      placeholder="Enter chapter title"
                    />
                    <p
                      v-if="error"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ error }}
                    </p>
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    :disabled="isLoading"
                    type="submit"
                    class="flex w-full items-center justify-center rounded bg-gray-600 px-7 py-3 text-center text-sm font-bold leading-snug text-white shadow-md transition duration-150 ease-in-out active:shadow-lg"
                    @click="handleCreate()"
                  >
                    <svg
                      v-if="isLoading"
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

const isLoading = ref(false);
const pending = ref(false);
const error = ref("");
const chapterTitle = ref("");
const store = useStatesStore();

const handleCreate = async () => {
  pending.value = true;
  const { data, error } = await useAsyncData("chapter", () =>
    store.handleCreateChapter({ chapterTitle: chapterTitle.value }).then(() => {
      pending.value = false;
      //   if (createUserResult.success) {
      //     navigateTo("/dashboard");
      //   }
    }),
  );
};
</script>

<style scoped></style>
