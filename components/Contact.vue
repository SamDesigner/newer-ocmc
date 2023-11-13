<template>
  <div
    class="max-w-[1440px] mx-auto py-[64px] md:py-[122px] px-[20px] lg:px-[64px] flex flex-col gap-[80px]"
  >
    <div class="lg:w-[778px] flex flex-col gap-[32px]">
      <div class="border-y border-lightBlue pt-[18px] pb-[16px]">
        <h1
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          class="text-coolGray text-[48px] font-[400] leading-[57px]"
        >
          Get in Touch
        </h1>
      </div>
      <p class="text-coolerGray font-[300] text-[16px]">
        Contact us for more information or a quote
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:grid-cols-3">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        class="flex flex-col gap-[20px]"
      >
        <div class="flex">
          <div class="flex bg-[#eff4ff] rounded-full p-3">
            <div class="bg-[#d1e0ff] flex p-3 rounded-full">
              <i class="pi pi-envelope text-primaryBlue text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px]">
          <h3
            aria-valuemax="text-darkerGray font-[400] leading-[28px] telegraf text-[20px]"
          >
            Email
          </h3>
          <p class="text-[16px] font-[400] leading-[24px]">
            Our friendly team is here to help
          </p>
        </div>

        <nuxt-link
          to="mailto:hello@o.cmanagementconsultants.co.uk"
          tag="a"
          class="text-[16px] font-[400] leading-[24px] underline text-primaryBlue"
        >
          hello@o.cmanagementconsultants.co.uk
        </nuxt-link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="flex flex-col gap-[20px]"
      >
        <div class="flex">
          <div class="flex bg-[#eff4ff] rounded-full p-3">
            <div class="bg-[#d1e0ff] flex p-3 rounded-full">
              <i class="pi pi-map-marker text-primaryBlue text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px]">
          <h3
            aria-valuemax="text-darkerGray font-[400] leading-[28px] telegraf text-[20px]"
          >
            Office
          </h3>
          <p class="text-[16px] font-[400] leading-[24px]">
            Come say hello at our office HQ.
          </p>
        </div>
        <nuxt-link
          class="text-[16px] font-[400] leading-[24px] underline text-primaryBlue"
          >133 Benets Rd, Hornchurch RM11 3PT, UK</nuxt-link
        >
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        class="flex flex-col gap-[20px]"
      >
        <div class="flex">
          <div class="flex bg-[#eff4ff] rounded-full p-3">
            <div class="bg-[#d1e0ff] flex p-3 rounded-full">
              <i class="pi pi-whatsapp text-primaryBlue text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px]">
          <h3
            aria-valuemax="text-darkerGray font-[400] leading-[28px] telegraf text-[20px]"
          >
            Whatsapp
          </h3>
          <p class="text-[16px] font-[400] leading-[24px]">
            Mon-Fri from 8am to 5pm.
          </p>
        </div>
        <nuxt-link
          :to="'https://api.whatsapp.com/send?phone=447903094884'"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[16px] font-[400] leading-[24px] underline text-primaryBlue"
          >+44 7903094884</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
