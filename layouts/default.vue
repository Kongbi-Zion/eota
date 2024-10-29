<template>
  <div class="h-screen w-screen overflow-x-hidden bg-[#0c1317]">
    <Header />
    <slot />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>
