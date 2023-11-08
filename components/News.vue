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
    <div class="grid md:grid-cols-3 md:gap-10 gap-14 my-10">
      <div v-for="item in items" :key="item.id">
        <div>
          <img
            :src="item.image"
            alt="Blog Post Image"
            class="rounded-full mb-5"
          />
          <p class="font-bold text-lg">{{ item.author }}</p>
          <div class="flex items-center space-x-3 md:text-base text-sm my-5">
            <p>{{ item.date }}</p>
            <div class="h-1.5 w-1.5 rounded-full bg-coolerGray"></div>
            <p>{{ item.duration }} mins read</p>
          </div>
          <p class="telegraf text-2xl py-3">{{ item.title }}</p>
          <p>{{ item.excerpt }}</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <button
        class="border-2 py-3 px-5 border-black mx-auto text-sm hover:border-b-4 hover:border-r-4 transition-all duration-200"
      >
        See More
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        author: "John Doe",
        date: "11 Jan 2023",
        duration: 5,
        title: "The Importance of Regular Exercise",
        excerpt:
          "Learn why regular exercise is crucial for maintaining good health.",
        image: "/img/blog-1.png",
      },
      {
        author: "John Doe",
        date: "11 Jan 2023",
        duration: 5,
        title: "The Importance of Regular Exercise",
        excerpt:
          "Learn why regular exercise is crucial for maintaining good health.",
        image: "/img/blog-1.png",
      },
      {
        author: "John Doe",
        date: "11 Jan 2023",
        duration: 5,
        title: "The Importance of Regular Exercise",
        excerpt:
          "Learn why regular exercise is crucial for maintaining good health.",
        image: "/img/blog-1.png",
      },
    ]);
    return {
      items,
    };
  },
};
</script>
