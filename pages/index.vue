<template>
  <div class="h-screen w-screen bg-[#0c1317]">
    <Header />
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
