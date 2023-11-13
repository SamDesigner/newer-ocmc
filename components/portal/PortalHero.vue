<template>
  <div class="pt-[24px] max-w-[1440px] mx-auto px-[20px] bg-basicGray">
    <div class="h-[812px] md:h-[720px] mx-auto hero_bg rounded-[40px]">
      <div class="flex flex-col gap-[24px] justify-center h-full items-center">
        <div class="naro absolute h-full w-full"></div>
        <div
          class="text-white px-[20px] lg:w-[768px] flex flex-col justify-center items-center gap-[24px]"
        >
          <div class="border-y pt-[18px] pb-[16px]">
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="900"
              data-aos-offset="0"
              class="text-[40px] lg:text-[56px] font-[400] leading-[67px] telegraf text-center"
            >
              Find and Apply for Public Contracts Easily
            </h1>
          </div>
          <p class="text-center font-[400] leading-[27px]">
            Introducing the HSTC Contract Portal, the one-stop solution for
            finding and applying for public contracts in healthcare and social
            care.
          </p>
          <div class="pt-[16px] flex gap-[16px]">
            <nuxt-link
              data-aos="fade-up"
              to="#contracts"
              class="cursor-pointer bg-white text-coolerGray py-[14px] px-[32px] rounded-[1000px] gap-[8px] hover:bg-gray-300 cursor-pointer"
            >
              Get Started
              <span><i class="pi pi-arrow-up-right"></i></span>
            </nuxt-link>
            <nuxt-link to="/" data-aos="fade-up">
              <button
                class="cursor-pointer flex items-center border border-bottonBorder hover:bg-gray-100 transition duration-300 ease-in-out rounded-[1000px] py-[14px] px-[32px] gap-[8px] text-[14px]"
              >
                Get in touch
                <span><i class="pi pi-arrow-up-right"></i></span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero_bg {
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
}
.naro {
  background-image: url("/svg/portal-bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
}
.telegraf {
  font-family: "PP Telegraf" !important;
}
</style>
