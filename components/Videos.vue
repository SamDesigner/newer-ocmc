<template>
  <section
    class="md:px-16 px-5 py-20 bg-basicGray text-coolerGray rounded-t-[4rem]"
  >
    <div class="text-center max-w-xl mx-auto space-y-2">
      <img src="/svg/videos.svg" alt="" class="mx-auto" />
      <p>Videos</p>
      <hr />
      <p class="text-3xl telegraf">
        Gain Deeper Insights into Social Care Trends and Concerns
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 my-10">
      <div v-for="item in videos" :key="item.id">
        <iframe
          src="https://www.youtube.com/embed/ru_m2_QrRYQ?si=NFkhMgO41nfQUzCk"
          title="YouTube video player"
          frameborder="0"
          class="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const videos = ref([
      {
        title: "CQC Regulation 13: Good Governance",
        image: "/img/good-governance.png",
      },
      {
        title: "CQC Regulation 13: Good Governance",
        image: "/img/good-governance.png",
      },
      {
        title: "CQC Regulation 13: Good Governance",
        image: "/img/good-governance.png",
      },
    ]);
    return {
      videos,
    };
  },
};
</script>
