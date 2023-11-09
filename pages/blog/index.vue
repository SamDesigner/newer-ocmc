<script setup>
const query = groq`*[_type == "post"]`;
const data = useSanityQuery(query);
const posts = data.data._rawValue;
console.log(posts);
</script>

<template>
  <Navigation />
  <section class="md:px-16 px-5">
    <div class="grid md:grid-cols-3 gap-10">
      <div v-for="post in posts" :key="post._id">
        <img
          :src="$urlFor(post.mainImage).url()"
          :alt="post.slug"
          loading="lazy"
          class="rounded-full"
        />
        <div class="flex items-center space-x-3 md:text-base text-sm my-5">
          <p>{{ post.publishedAt }}</p>
          <div class="h-1.5 w-1.5 rounded-full bg-coolerGray"></div>
          <p>5 mins read</p>
        </div>
        <h2>
          <nuxt-link
            :to="'/blog/' + post.slug.current"
            v-text="post.title"
          ></nuxt-link>
        </h2>
        <p>{{ post.publishedAt }}</p>
      </div>
    </div>
  </section>
</template>
