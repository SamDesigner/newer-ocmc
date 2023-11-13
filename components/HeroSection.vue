<template>
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-easing="ease-in-out-cubic"
    class="pt-[24px] max-w-[1440px] mx-auto px-[20px] relative overflow-hidden"
  >
    <div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :zoom="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
        }"
        :scrollbar="{ draggable: true }"
        :pagination="{ clickable: false }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div
            class="swiper-zoom-container w-full hero_one h-[560px] flex justify-center bg-black rounded-[40px] px-5"
          >
            <div
              class="h-full flex flex-col items-center justify-center gap-[24px] w-[768px]"
            >
              <div class="border-y pt-[18px] pb-[16px]">
                <h1
                  class="text-white font-[400] text-center text-[56px] leading-[67px] telegraf"
                >
                  Turn Challenges into
                  <span class="text-primaryYellow">Opportunities</span> with
                  OCMC
                </h1>
              </div>
              <p
                class="text-[16px] font-[300] text-white leading-[24px] text-center"
              >
                Let OCMC guide your business to success with our expert public
                procurement services. 
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="swiper-zoom-container w-full hero_two h-[560px] flex justify-center bg-black rounded-[40px] px-5"
          >
            <div
              class="h-full flex flex-col items-center justify-center gap-[24px] w-[768px]"
            >
              <div class="border-y pt-[18px] pb-[16px]">
                <h1
                  class="text-white font-[400] text-center text-[56px] leading-[67px] telegraf"
                >
                  Have a Partner That
                  <span class="text-primaryYellow">Understands</span> Your
                  Challenges
                </h1>
              </div>
              <p
                class="text-[16px] font-[300] text-white leading-[24px] text-center"
              >
                OCMC offers service packages specifically designed to meet the
                needs of small businesses.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="swiper-zoom-container w-full hero_bg h-[560px] flex justify-center bg-black rounded-[40px] px-3"
          >
            <div
              class="h-full flex flex-col items-center justify-center gap-[24px] w-[768px]"
            >
              <div class="border-y pt-[18px] pb-[16px]">
                <h1
                  class="text-white font-[400] text-center text-[56px] leading-[67px] telegraf"
                >
                  Boost Your Tender
                  <span class="text-primaryYellow">Win</span> Rate
                </h1>
              </div>
              <p
                class="text-[16px] font-[300] text-white leading-[24px] text-center"
              >
                Let OCMC’s expert team of tender writers massively improve your
                tendering outcomes
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.hero_one {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/hero_one.png");
}
.hero_two {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/hero_two.png");
}
.hero_bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("/img/new_hero.png");
  background-position: center;
  background-size: cover;
}
.telegraf {
  font-family: "PP Telegraf" !important;
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute !important;

  bottom: 4px !important;

  /* top: auto; */
  top: 80% !important;
  left: 50% !important;
  z-index: 50 !important;
  height: 4px !important;

  width: 40% !important;
  width: 40% !important;
  margin: auto;
}
</style>
<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom],
    };
  },
};
</script>
