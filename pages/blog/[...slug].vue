<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main>
    <Navigation />
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-xl" />
  </main>
</template>
