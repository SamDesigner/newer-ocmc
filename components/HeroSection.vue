<template>
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-out-cubic"
      class="pt-[24px] max-w-[1440px] mx-auto px-[20px] relative overflow-hidden"
      @scroll="handleScroll"
      ref="parallaxContainer"
    >
      <div
        class="h-[812px] md:h-[720px] mx-auto hero_bg rounded-[40px] overflow-hidden"
        :style="{ transform: `scale(${scale})` }"
        ref="parallaxContent"
      >
        <div class="h-full flex flex-col justify-center md:justify-start"
       
        >
          <div 
          :style="{ transform: `translateX(${textTranslate}px)` }"
          class="text-white flex flex-col  gap-[24px] px-[20px] md:px-[64px] md:pt-[160px] ">
            <div class="lg:w-[728px] border-t border-b border-white">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
                class="  telegraf text-[40px] md:text-[56px] py-[8px] font-[400] leading-[67.2px]"
              >
                Turn Challenges into <span class="text-primaryYellow">Opportunities</span> with OCMC
              </h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p class="md:w-[488px] leading-[24px]">
                With OCMC securing public contracts will no longer be a daunting task but a strategic
                step towards your business growth.
              </p>
            </div>
            <Nuxt-link to="/contact">
              <button
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
                class="bg-white text-baseBlack py-[14px] px-[32px] rounded-[1000px]"
              >
                Get in touch <span><i class="pi pi-arrow-up-right"></i></span>
              </button>
            </Nuxt-link>
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
  .hero_bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url('/img/hero-bg.png');
    background-position: center;
    background-size: cover;
  }
  .telegraf {
    font-family: 'PP Telegraf' !important;
  }
  </style>
  