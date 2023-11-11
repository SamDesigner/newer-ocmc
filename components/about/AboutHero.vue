<!-- components/Showcase.vue -->
<template>
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-out-cubic"
      class="pt-[24px] overflow-hidden max-w-[1440px] mx-auto px-[20px] bg-basicGray showcase"
      ref="showcase"
    >
      <div
        class="h-[812px] md:h-[720px] mx-auto custom-index overflow-hidden hero_bg rounded-[40px]"
        :style="{ transform: `scale(${scale})` }"
      >
        <div
          class="flex flex-col gap-[24px] justify-center h-full items-center"
          :style="{ transform: `translateX(${textTranslate}px)` }"
        >
          <div class="text-white px-[20px] lg:w-[768px] flex flex-col justify-center items-center gap-[24px]">
            <div class="border-y pt-[18px] pb-[16px]">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
                class="text-[40px] lg:text-[56px] font-[400] leading-[67px] telegraf text-center"
              >
                We are Your <span class="text-primaryYellow">Trusted Partner</span> at Winning and
                Thriving in Government Contract Opportunities.
              </h1>
            </div>
            <div class="pt-[16px]">
              <Nuxt-link
                class="bg-white text-coolerGray py-[14px] px-[32px] rounded-[1000px] gap-[8px] hover:bg-gray-300 cursor-pointer"
              >
                Get in touch <span><i class="pi pi-arrow-up-right"></i></span>
              </Nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scale: 1,
        textTranslate: 0,
        maxScale: 2, // Adjust this value to set the maximum scale
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const showcase = this.$refs.showcase;
        const scrollTop = window.scrollY || window.pageYOffset;
        const scrollThreshold = 50; // Adjust this value to set the scroll threshold
        const scalingCoefficient = 0.0005; // Adjust this value for the desired scaling effect
        const translateCoefficient = 2; // Adjust this value for the desired translation effect
  
        // Calculate scale based on scroll position
        this.scale = 1 + scrollTop * scalingCoefficient;
  
        // Apply maximum scale limit
        this.scale = Math.min(this.scale, this.maxScale);
  
        // Apply scale to the background
        showcase.style.transform = `scale(${this.scale})`;
  
        // Calculate text translation based on scroll position
        this.textTranslate = -scrollTop * translateCoefficient;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add other existing styles here */
  
  .hero_bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url('/img/about_building.png');
    background-position: center;
    background-size: cover;
  }

  .custom-index{
    z-index:-1
  }
  
  .telegraf {
    font-family: 'PP Telegraf' !important;
  }
  </style>
  