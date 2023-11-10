<template>
  <section
    class="md:px-16 px-5 bg-basicGray py-20 text-coolerGray rounded-b-[4rem]"
  >
    <div class="text-center max-w-lg mx-auto space-y-2">
      <img src="/svg/news.svg" alt="" class="mx-auto" />
      <p>News</p>
      <hr />
      <p class="text-3xl telegraf">
        Keep a finger on the pulse of current news and trends.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mt-10">
      <div v-for="post in posts.slice(0, 3)" :key="post._id">
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
        <div class="space-y-3">
          <h2>
            <nuxt-link
              :to="'/blog/' + post.slug.current"
              v-text="post.title"
              class="text-lg font-semibold"
            ></nuxt-link>
          </h2>
          <p>{{ post.excerpt }}</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-10">
      <nuxt-link
        to="/blog"
        class="border-2 py-3 px-10 border-black mx-auto text-sm hover:border-b-4 hover:border-r-4 transition-all duration-200"
      >
        See More
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
const query = groq`*[_type == "post"]`;
const data = useSanityQuery(query);
const posts = data.data._rawValue || [];
</script>
