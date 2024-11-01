<template>
  <div class="h-full w-full overflow-x-hidden text-gray-400">
    <div class="flex justify-center px-5 py-24 md:py-32">
      <div class="w-full max-w-screen-xl md:px-5">
        <div>
          <h1 class="mb-5 text-lg font-bold text-gray-50">Characters</h1>
          <div class="gap-5 max-md:space-y-8 md:flex">
            <div
              class="no-scrollbar h-full min-h-[70vh] w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-2/3"
            >
              <div class="h-full w-full overflow-y-auto">
                <div class="w-full space-y-5">
                  <div
                    v-for="character in characters"
                    :key="character.id"
                    class="rounded-lg border border-gray-600 px-5 py-3"
                  >
                    <NuxtLink
                      :to="`/conversation/${character.id}`"
                      class="space-y-2"
                    >
                      <p>
                        <span class="text-gray-50">Name: </span
                        >{{ character.characterName }}
                      </p>
                      <p>
                        <span class="text-gray-50">Role: </span
                        >{{ character.role }}
                      </p>
                      <p class="text-gray-50">Character Backstory:</p>
                      <p>{{ character.characterBackstory }}</p>
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

            <div
              class="max-h-fit w-full overflow-y-auto rounded border border-gray-600 p-5 md:w-1/3"
            >
              <div class="w-full">
                <div
                  class="mb-7 mt-2 text-center text-lg font-bold text-gray-50"
                >
                  <p>Add Character</p>
                </div>

                <div class="mb-2 flex w-full flex-wrap space-y-5">
                  <div class="w-full">
                    <input
                      id="characterName"
                      type="text"
                      name="characterName"
                      v-model="characterName"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors.characterName
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Character Name"
                    />

                    <p
                      v-if="errors?.characterName"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.characterName }}
                    </p>
                  </div>
                  <div class="w-full">
                    <select
                      id="role"
                      type="text"
                      name="role"
                      v-model="role"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight hover:cursor-pointer focus:outline-none"
                      :class="
                        errors?.role ? 'border-red-500' : 'border-gray-600'
                      "
                      placeholder="Character"
                    >
                      <option value="" disabled>Select a role</option>
                      <option value="LIBRARIAN">LIBRARIAN</option>
                      <option value="GUIDE">GUIDE</option>
                      <option value="MAYOR">MAYOR</option>
                      <option value="HISTORIAN_PROFESSOR">
                        HISTORIAN_PROFESSOR
                      </option>
                    </select>

                    <p
                      v-if="errors?.role"
                      class="mt-2 text-sm font-light text-red-500"
                    >
                      {{ errors?.role }}
                    </p>
                  </div>
                  <div class="w-full">
                    <textarea
                      id="characterBackstory"
                      type="text"
                      name="characterBackstory"
                      v-model="characterBackstory"
                      :rows="5"
                      class="w-full rounded border bg-transparent px-4 py-3 font-normal leading-tight focus:outline-none"
                      :class="
                        errors?.characterBackstory
                          ? 'border-red-500'
                          : 'border-gray-600'
                      "
                      placeholder="Character Backstory"
                    ></textarea>

                    <p
                      v-if="errors?.characterBackstory"
                      class="mt-1 text-sm font-light text-red-500"
                    >
                      {{ errors?.characterBackstory }}
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
import { type CHARACTER_ROLE } from "~/src/types/amplify";

const isLoading = ref(true);
const pending = ref(false);
const errors = ref<any>({});

const characterName = ref("");
const role = ref<CHARACTER_ROLE>();
const characterBackstory = ref("");
const store = useStatesStore();

const chapters = computed(() => store.chapters);
const characters = computed(() => store.characters);

onMounted(async () => {
  if (characters.value.length == 0) {
    store.listCharacters().then(() => {
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
  if (!characterName.value || !characterBackstory.value || !role.value) {
    if (!characterName.value) {
      errors.value.characterName = "Required!";
    }
    if (!role.value) {
      errors.value.role = "Required!";
    }
    if (!characterBackstory.value) {
      errors.value.characterBackstory = "Required!";
    }
    return;
  }

  pending.value = true;
  store
    .handleCreateCharacter({
      characterName: characterName.value,
      role: role.value,
      characterBackstory: characterBackstory.value,
    })
    .then(() => {
      pending.value = false;
    });
};
</script>

<style scoped></style>
