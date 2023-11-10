<template>
  <main>
    <Navigation />
    <section class="md:mt-20 mt-5">
      <div class="space-y-5 text-center max-w-6xl md:px-0 px-4 mx-auto">
        <p class="text-primaryBlue">Published at {{ post.publishedAt }}</p>
        <p class="font-semibold text-4xl">{{ post.title }}</p>
        <p class="">{{ post.subtitle }}</p>
        <img
          :src="$urlFor(post.mainImage).url()"
          :alt="post.slug"
          loading="lazy"
          class="mx-auto"
        />
      </div>

      <section
        class="md:max-w-2xl md:px-0 px-5 my-10 mx-auto text-lg space-y-10 text-justify"
      >
        <div class="space-y-5">
          <PortableText :value="post.introduction" :components="components" />
        </div>
        <img
          :src="$urlFor(post.bodyImage).url()"
          :alt="post.slug"
          loading="lazy"
          class="rounded-xl"
        />
        <div class="space-y-5">
          <PortableText :value="post.body" :components="components" />
        </div>
        <img
          :src="$urlFor(post.bodyImage).url()"
          :alt="post.slug"
          loading="lazy"
          class="rounded-xl"
        />
        <div class="space-y-5 bg-gray-100 rounded-md p-5 md:px-10">
          <PortableText :value="post.conclusion" :components="components" />
        </div>
        <hr />
        <div
          class="flex md:flex-row flex-col md:items-center justify-between md:space-y-0 space-y-3"
        >
          <div class="flex items-center space-x-2">
            <img
              :src="$urlFor(post.author_image).url()"
              :alt="post.slug"
              loading="lazy"
              class="w-14 rounded-full"
            />
            <div>
              <p class="text-base font-semibold">{{ post.author_name }}</p>
              <p class="text-sm">{{ post.author_role }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-5">
            <CopyRouteButton />
            <div>
              <ul class="flex items-center space-x-5 text-[#7D89B0]">
                <li
                  class="border border-[#7D89B0] rounded-md h-8 w-8 flex items-center justify-center"
                >
                  <nuxt-link :to="post.author_twitter_handle"
                    ><i class="pi pi-twitter"></i
                  ></nuxt-link>
                </li>
                <li
                  class="border border-[#7D89B0] rounded-md h-8 w-8 flex items-center justify-center"
                >
                  <nuxt-link :to="post.author_facebook_link"
                    ><i class="pi pi-facebook"></i
                  ></nuxt-link>
                </li>
                <li
                  class="border border-[#7D89B0] rounded-md h-8 w-8 flex items-center justify-center"
                >
                  <nuxt-link :to="post.author_linkedin_url"
                    ><i class="pi pi-linkedin"></i
                  ></nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
    <LatestBlogPost />
  </main>
  <Footer />
</template>

<script setup>
import { PortableText } from "@portabletext/vue";

const route = useRoute();
const url = route.params.slug;

const query = groq`*[_type == "post" && slug.current == "${url}"][0]`;
const data = await useSanityQuery(query);
const post = data.data._rawValue;
console.log(post);

const components = {
  block: {
    // Ex. 1: customizing common block types
    h4: (_, { slots }) =>
      h("h4", { class: "text-xl font-semibold" }, slots.default?.()),
    ul: (_, { slots }) => h("ul", { class: "space-y-3" }, slots.default?.()),
    div: (_, { slots }) =>
      h("div", { class: "telegraf text-2xl" }, slots.default?.()),
    p: (_, { slots }) =>
      h("p", { class: "telegraf text-2xl" }, slots.default?.()),
    blockquote: (_, { slots }) =>
      h("p", { class: "border-l-purple-500" }, slots.default?.()),

    // Ex. 2: rendering custom styles
    // customHeading: (_, { slots }) =>
    //   h(
    //     "span",
    //     { class: "text-lg text-primary text-purple-700" },
    //     slots.default?.()
    //   ),
  },
};
</script>
