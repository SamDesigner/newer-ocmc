<template>
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-out-cubic"
      class="pt-[24px] max-w-[1440px] mx-auto px-[20px] relative overflow-hidden"
    >
      <div
        class="h-[560px]  mx-auto hero_bg rounded-[40px] overflow-hidden">
        <div class="h-full flex flex-col justify-center items-center md:justify-start"
       
        >
          <div 
          class="text-white flex flex-col justify-center items-center gap-[24px] px-[20px] md:px-[64px] md:pt-[160px] ">
            <div class="lg:w-[768px] border-t border-b border-white">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
                class="  telegraf text-[40px] md:text-[56px] py-[8px] font-[400] leading-[67.2px] text-center"
              >
                    Boost Your Tender <span class="text-primaryYellow">Win</span>  Rate 
              </h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p class=" leading-[24px]">
                Let OCMC’s expert team of tender writers massively improve your tendering outcomes
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
            <div>
                <img src="/img/loader.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .hero_bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url('/img/new_hero.png');
    background-position: center;
    background-size: cover;
  }
  .telegraf {
    font-family: 'PP Telegraf' !important;
  }
  </style>
  