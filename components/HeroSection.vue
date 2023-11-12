<template>
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    data-aos-easing="ease-in-out-cubic"
    class="pt-[24px] max-w-[1440px] mx-auto px-[20px]"
  >
    <div class="h-[812px] md:h-[720px] mx-auto hero_bg rounded-[40px]">
      <div class="h-full flex flex-col justify-center md:justify-start">
        <div
          class="text-white flex flex-col gap-[24px] px-[20px] md:px-[64px] md:pt-[160px]"
        >
          <div class="lg:w-[728px] border-t border-b border-white">
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              class="telegraf text-[40px] md:text-[56px] py-[8px] font-[400] leading-[67.2px]"
            >
              Turn Challenges into
              <span class="text-primaryYellow">Opportunities</span> with OCMC
            </h1>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <p class="md:w-[488px] leading-[24px]">
              With OCMC securing public contracts will no longer be a daunting
              task but a strategic step towards your business growth.
            </p>
          </div>
          <nuxt-link to="/contact">
            <button
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              class="bg-white text-baseBlack py-[14px] px-[32px] rounded-[1000px]"
            >
              Get in touch
              <span><i class="pi pi-arrow-up-right"></i></span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero_bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("/img/new_bg.png");
  background-position: center;
  background-size: cover;
}
.telegraf {
  font-family: "PP Telegraf" !important;
}
</style>
