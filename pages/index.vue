<template>
  <div class="h-full w-full overflow-x-hidden">
    <Header />

    <div class="flex justify-center px-5 py-24 md:py-32">
      <div
        class="grid w-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        <CardItem name="Chapters" />
        <CardItem name="Characters" />
        <CardItem name="Conversations" />
        <CardItem name="options" />
        <CardItem name="Puzzles" />
        <CardItem name="Relics" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateClient } from "aws-amplify/api";
import Header from "~/components/Header.vue";
import { getCharacterConversations } from "@/src/graphql/queries";

const client = generateClient();

onMounted(async () => {
  const result = await client.graphql({
    query: getCharacterConversations,
  });
  console.log("data===: ", result);
});
</script>

<!-- 
<template>
  <div></div>
</template>

<script setup lang="ts">
import { getConversationOptions } from "@/src/graphql/queries";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
const { data, error } = useAsyncData(async () => {
  const result = await client.graphql({
    query: getConversationOptions,
  });
  return result.data.getConversationOptions;
});

console.log("data: ", data);
</script> -->
