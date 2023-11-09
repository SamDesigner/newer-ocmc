<template>
  <section
    class="md:px-16 px-5 bg-basicGray py-20 text-coolerGray rounded-b-[4rem]"
  >
    <div class="flex items-start justify-between">
      <div class="space-y-5">
        <p class="text-primaryBlue">Our blog</p>
        <p class="text-3xl telegra">Latest blog posts</p>
        <p>What you need to know about public procurement.</p>
      </div>
      <div>
        <nuxt-link
          to="/blog"
          class="bg-primaryBlue px-10 py-3 rounded-full text-white"
          >View all posts</nuxt-link
        >
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-10 md:mt-16 mt-10">
      <div v-for="post in posts.slice(0, 3)" :key="post._id" class="space-y-5">
        <img
          :src="$urlFor(post.mainImage).url()"
          :alt="post.slug"
          loading="lazy"
          class="rounded-md"
        />
        <div class="space-y-3">
          <h2>
            <nuxt-link
              :to="'/blog/' + post.slug.current"
              v-text="post.title"
              class="text-lg font-semibold"
            ></nuxt-link>
          </h2>
          <p>{{ post.excerpt }}</p>
          <div class="flex items-center space-x-2">
            <img
              :src="$urlFor(post.author_image).url()"
              :alt="post.slug"
              loading="lazy"
              class="w-10 rounded-full"
            />
            <div>
              <p class="text-base font-semibold">{{ post.author_name }}</p>
              <p class="text-sm">{{ post.publishedAt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const query = groq`*[_type == "post"]`;
const data = useSanityQuery(query);
const posts = data.data._rawValue || [];
</script>
