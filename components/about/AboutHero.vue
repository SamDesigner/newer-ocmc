
<template>

    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-out-cubic"
      class="pt-[24px] overflow-hidden max-w-[1440px] mx-auto px-[20px] bg-basicGray showcase"
      ref="showcase"
    >
      <div
        class="h-[812px] md:h-[720px] mx-auto custom-index flex items-center justify-center overflow-hidden hero_bg rounded-[40px]"
      
      >
        <div
          class="flex flex-col gap-[24px] justify-center w-[768px] h-full items-center"
         

        >
          <div class="border-y pt-[18px]  pb-[16px]">
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="900"
              data-aos-offset="0"
              class="text-[40px] lg:text-[56px] font-[400] leading-[67px] telegraf text-center text-white" 
            >
              We are Your
              <span class="text-primaryYellow">Trusted Partner</span> at Winning
              and Thriving in Government Contract Opportunities.
            </h1>
          </div>
          <div class="pt-[16px]">
            <nuxt-link
              class="bg-white text-coolerGray py-[14px] px-[32px] rounded-[1000px] gap-[8px] hover:bg-gray-300 cursor-pointer"
            >
              Get in touch
              <span><i class="pi pi-arrow-up-right"></i></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </template>
  

  <style scoped>
  /* Add other existing styles here */
  
  .hero_bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url('/img/about_building.png');
    background-position: center;
    background-size: cover;
  }




</style>
