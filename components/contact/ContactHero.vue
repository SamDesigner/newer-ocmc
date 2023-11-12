<template>
  <div class="max-w-[1440px] mx-auto">
    <div class="py-[96px] flex flex-col gap-[24px]">
      <h3 class="text-primaryBlue text-center text-[16px] leading-[24px]">
        Contact us
      </h3>
      <h1
        class="text-[48px] font-[400] leading-[57px] telegraf text-center text-darkerGray"
      >
        We’d love to hear from you
      </h1>
      <p
        class="text-coolerGray font-[400] text-[20px] text-center leading-[30px]"
      >
        Our friendly team is always here to chat.
      </p>
    </div>
    <div class="pb-[96px] px-[20px]">
      <div
        class="lg:w-[1216px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
      >
        <div
          class="flex flex-col gap-[64px] p-[24px] bg-basicGray rounded-[12px]"
        >
          <div class="flex">
            <div class="flex bg-[#eff4ff] rounded-full p-3">
              <div class="bg-[#d1e0ff] flex p-3 rounded-full">
                <i class="pi pi-envelope text-primaryBlue text-2xl"></i>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <div class="flex flex-col gap-[8px]">
              <h3
                class="text-[20px] font-[400] telegraf leading-[28px] text-darkerGray"
              >
                Email
              </h3>
              <p class="text-coolerGray">Speak to our friendly team.</p>
            </div>

            <nuxt-link
              class="text-primaryBlue text-[16px] font-[400] leading-[24px] underline"
              >hello@o.cmanagementconsultants.co.uk</nuxt-link
            >
          </div>
        </div>
        <div
          class="flex flex-col gap-[64px] p-[24px] bg-basicGray rounded-[12px]"
        >
          <div class="flex">
            <div class="flex bg-[#eff4ff] rounded-full p-3">
              <div class="bg-[#d1e0ff] flex p-3 rounded-full">
                <i class="pi pi-map-marker text-primaryBlue text-2xl"></i>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <div class="flex flex-col gap-[8px]">
              <h3
                class="text-[20px] font-[400] telegraf leading-[28px] text-darkerGray"
              >
                Office
              </h3>
              <p class="text-coolerGray">Come say hello at our office HQ.</p>
            </div>

            <nuxt-link
              class="text-primaryBlue text-[16px] font-[400] leading-[24px] underline"
              >133 Benets Rd, Hornchurch RM11 3PT, UK</nuxt-link
            >
          </div>
        </div>
        <div
          class="flex flex-col gap-[64px] p-[24px] bg-basicGray rounded-[12px]"
        >
          <div class="flex">
            <div class="flex bg-[#eff4ff] rounded-full p-3">
              <div class="bg-[#d1e0ff] flex p-3 rounded-full">
                <i class="pi pi-whatsapp text-primaryBlue text-2xl"></i>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <div class="flex flex-col gap-[8px]">
              <h3
                class="text-[20px] font-[400] telegraf leading-[28px] text-darkerGray"
              >
                Whatsapp
              </h3>
              <p class="text-coolerGray">Mon-Fri from 8am to 5pm.</p>
            </div>

            <nuxt-link
              class="text-primaryBlue text-[16px] font-[400] leading-[24px] underline"
              >+44 7903094884</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
