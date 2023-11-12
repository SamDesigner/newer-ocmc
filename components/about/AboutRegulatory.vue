<template>
    <div class="max-w-[1440px] mx-auto  py-[64px] md:py-[112px] px-[20px] lg:px-[64px] flex flex-col gap-[48px] md:gap-[80px] overflow-hidden">
        <div class="border-y border-lightBlue lg:w-[880px]">
            <h1 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-offset="0"
            class="text-[36px] md:text-[48px] text-coolGray font-[400] leading-[57px] telegraf pt-[18px] pb-[16px]">
            Your Trusted Public <br> Procurement Partner
            </h1>
        </div>
    
        <div 
     
        class=" h-[188px] w-full  md:h-[738px] md:   mx-auto"
        :style="{ transform: `scale(${scale})` }"
        >
            <img class="h-full w-full img_fit rounded-br-[40px] rounded-bl-[40px] md:rounded-br-[120px] md:rounded-bl-[120px] hover:rounded-[0px] custom_transition " src="/img/about_hero.png" />
        </div>
    </div>
</template>
<style scoped>
    .custom_transition{
        transition: 0.5s ease all;
    }
    .img_fit{
        object-fit: cover;
    }
    @media(max-width:414px){
        .width{
            width: 335px;
        }
    }
</style>
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
        const scalingCoefficient = 0.00005; // Adjust this value for the desired scaling effect
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
  