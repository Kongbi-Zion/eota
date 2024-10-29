<template>
  <NuxtLink
    :to="`/${name}`"
    class="h-28 rounded-md bg-gradient-to-tr from-gray-300 p-5 hover:cursor-pointer lg:h-40 lg:bg-gradient-to-r"
  >
    <p class="text-lg font-bold">{{ name }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
