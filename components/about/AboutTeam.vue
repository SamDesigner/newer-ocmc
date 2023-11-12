<template>
  <div class="max-w-[1440px] mx-auto bg-white">
    <div
      class="py-[112px] px-[20px] bg-lightGrayBg rounded-tr-[120px] rounded-tl-[120px] flex flex-col gap-[80px]"
    >
      <div class="flex justify-center">
        <div class="gap-[32px] flex flex-col items-center justify-center">
          <div class="border-y border-lightBlue">
            <h1
              class="text-coolGray telegraf text-[36px] md:text-[48px] pt-[18px] pb-[16px] font-[400] leading-[57px]"
            >
              Meet Our Team
            </h1>
          </div>
          <p class="text-coolerGray text-[16px] font-[300] leading-[24px]">
            Get to know the experts behind OCMC
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] md:gap-[32px]"
        >
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            class="flex flex-col gap-[24px]"
          >
            <div class="w-full h-[296px]">
              <img
                class="w-full h-full rounded-[1000px] img_fit"
                src="/img/chinye.png"
              />
            </div>
            <div>
              <h3 class="text-[20px] font-[600] leading-[30px] text-center">
                Chinye Okonkwo
              </h3>
              <p class="text-coolerGray text-center">CEO</p>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
            class="flex flex-col gap-[24px]"
          >
            <div class="w-full h-[296px]">
              <img
                class="w-full h-full rounded-[1000px] img_fit"
                src="/img/exco2.png"
              />
            </div>
            <div>
              <h3 class="text-[20px] font-[600] leading-[30px] text-center">
                Edwina Nwaogu
              </h3>
              <p class="text-coolerGray text-center">
                Senior Management Consultant Expertise
              </p>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
            class="flex flex-col gap-[24px]"
          >
            <div class="w-full h-[296px]">
              <img
                class="w-full h-full rounded-[1000px] img_fit"
                src="/img/exco3.png"
              />
            </div>
            <div>
              <h3 class="text-[20px] font-[600] leading-[30px] text-center">
                Peju Akinlude
              </h3>
              <p class="text-coolerGray text-center">
                Consulting Advisor on Mental Health, Specialist Training and
                Social Care Legislation
              </p>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
            class="flex flex-col gap-[24px]"
          >
            <div class="w-full h-[296px]">
              <img
                class="w-full h-full rounded-[1000px] img_fit"
                src="/img/exco4.png"
              />
            </div>
            <div>
              <h3 class="text-[20px] font-[600] leading-[30px] text-center">
                Dudley Sawyerr
              </h3>
              <p class="text-coolerGray text-center">
                Diversity, Equity, and Inclusion Expert Advisor
              </p>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            class="flex flex-col gap-[24px]"
          >
            <div class="w-full h-[296px]">
              <img
                class="w-full h-full rounded-[1000px] img_fit"
                src="/img/exco5.png"
              />
            </div>
            <div>
              <h3 class="text-[20px] font-[600] leading-[30px] text-center">
                Arindam Das
              </h3>
              <p class="text-coolerGray text-center">
                Senior Strategy Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_fit {
  object-fit: cover;
}
</style>
