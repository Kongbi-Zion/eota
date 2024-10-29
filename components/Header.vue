<template>
  <nav class="fixed start-0 top-0 z-20 w-full bg-[#0c1317]">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border-b border-gray-600"
    >
      <div class="-ml-2">
        <NuxtLink to="/" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 text-gray-50 md:h-20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 15.714V8.287q0-.368.244-.588q.243-.22.568-.22q.102 0 .213.028q.11.027.211.083l5.843 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.101.055-.213.083t-.213.028q-.326 0-.568-.22T9 15.714"
            />
          </svg>
          <span
            class="-ml-2 self-center whitespace-nowrap text-xl font-semibold text-gray-50"
            >Eota</span
          >
        </NuxtLink>
      </div>
      <div @click="handleCreate" class="pr-3.5 md:pr-6">
        <img
          src="/profile.webp"
          class="h-8 w-8 rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
    <CreatePlayerAccount ref="create" />
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CreatePlayerAccount from "./CreatePlayerAccount.vue";
const create = ref();

const handleCreate = () => {
  create.value.handleShow();
};
</script>
