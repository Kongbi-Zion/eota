<template>
  <NuxtLink
    :to="`/${name}`"
    class="flex h-28 items-center justify-center rounded-md border border-gray-600 p-5 hover:cursor-pointer lg:h-40 lg:bg-gradient-to-r"
  >
    <p class="text-lg font-bold text-gray-50">{{ name }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
