<template>
  <section class="md:px-16 px-5 py-20 text-coolerGray">
    <div class="text-center max-w-xl mx-auto space-y-2">
      <img src="/svg/books.svg" alt="" class="mx-auto" />
      <p>Books</p>
      <hr />
      <p class="text-3xl telegraf">
        Explore Our Latest Publications to Elevate Your Success in Social Care
      </p>
    </div>
    <div class="grid md:grid-cols-3 md:gap-10 gap-14 my-10">
      <div v-for="item in items" :key="item.id">
        <div class="text-center">
          <img :src="item.image" alt="Book Image" class="rounded-full" />
          <p class="telegraf text-xl py-3">{{ item.title }}</p>
          <button
            class="text-primaryBlue hover:bg-primaryBlue/25 rounded-full px-10 py-2 transition-colors duration-150"
          >
            Get Now <span><i class="pi pi-arrow-up-right"></i></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        title: "Bridging the Gap",
        image: "/img/bridging-the-gap.png",
      },
      {
        title: "Social Care business management explained",
        image: "/img/social-care.png",
      },
      {
        title: "Mastering tupe transfers in social care services",
        image: "/img/mastering-tupe.png",
      },
    ]);
    return {
      items,
    };
  },
};
</script>
