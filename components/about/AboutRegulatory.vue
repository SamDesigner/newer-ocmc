<template>
  <div
    class="max-w-[1440px] mx-auto py-[64px] md:py-[112px] px-[20px] lg:px-[64px] flex flex-col gap-[48px] md:gap-[80px]"
  >
    <div class="border-y border-lightBlue lg:w-[880px]">
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
        class="text-[36px] md:text-[48px] text-coolGray font-[400] leading-[57px] telegraf pt-[18px] pb-[16px]"
      >
        Your Trusted Public Procurement Partner
      </h1>
    </div>

    <div
      data-aos="fade-in"
      data-aos-duration="700"
      class="h-[188px] w-full md:h-[738px] md: mx-auto"
    >
      <img
        class="h-full w-full img_fit rounded-b-[5rem]"
        src="/img/about_hero.png"
      />
    </div>
  </div>
</template>
<style scoped>
.img_fit {
  object-fit: cover;
}
@media (max-width: 414px) {
  .width {
    width: 335px;
  }
}
</style>
