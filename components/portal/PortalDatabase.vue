<template>
  <div class="max-w-[1440px] mx-auto py-[112px] px-10 lg:px-[64px]">
    <div class="flex flex-col gap-[80px]">
      <div class="flex justify-center">
        <div class="lg:w-[768px]">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-offset="0"
            class="text-coolGray text-[40px] font-[400] leading-[48px] text-center telegraf"
          >
            Comprehensive Database of Public <br />
            Contracts
          </h1>
        </div>
      </div>
      <div
        class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-[48px]"
      >
        <div
          class="lg:w-[400px] flex flex-col gap-[16px] p-[24px] custom_shadow rounded-[12px]"
        >
          <div data-aos="fade-up" class="flex justify-center">
            <img src="/svg/google_icon.svg" />
          </div>
          <h3
            class="text-[24px] text-center font-[400] telegraf leading-[33px]"
          >
            User-Friendly Search and Filtering Options
          </h3>
          <p
            class="text-coolerGray text-[16px] font-[300] leading-[24px] text-center"
          >
            Easily find and apply for public contracts with our comprehensive
            database and user-friendly search and filtering options.
          </p>
        </div>
        <div
          class="lg:w-[400px] flex flex-col gap-[16px] p-[24px] custom_shadow rounded-[12px]"
        >
          <div data-aos="fade-up" class="flex justify-center">
            <img src="/svg/folder_icon.svg" />
          </div>
          <h3
            class="text-[24px] text-center font-[400] telegraf leading-[33px]"
          >
            Personalized Contract Recommendations
          </h3>
          <p
            class="text-coolerGray text-[16px] font-[300] leading-[24px] text-center"
          >
            Receive personalized contract recommendations based on your business
            needs and preferences.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom_shadow {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
}
</style>
