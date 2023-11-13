<template>
  <div
    class="max-w-[1440px] mx-auto py-[64px] md:py-[112px] px-[20px] lg:px-[64px]"
  >
    <div class="flex flex-col gap-[48px]">
      <div class="flex items-center justify-center">
        <div class="w-[768px] border-y border-lightBlue pt-[18px] pb-[16px]">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            data-aos-offset="0"
            class="telegraf text-[36px] md:text-[48px] text-coolGray text-center font-[400]"
          >
            Streamline Your Operations with OCMC's Services
          </h1>
        </div>
      </div>
  

          <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[48px] ">
                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                class="w-[335px] lg:w-[405px] pt-[56px] flex flex-col gap-[24px] ring_bg rounded-tr-[64px] rounded-tl-[64px] rounded-bl-[64px]">
                   <div class="flex flex-col px-[40px]">
                        <h1 class="text-[24px] font-[400] leading-[33px] telegraf text-coolGray">Regulatory Compliance Consulting</h1>
                        <p class="text-[16px] font-[300] leading-[24px] text-coolerGray">
                            We guide clients through intricate regulatory processes, enabling their growth while maintaining compliance.
                        </p>
                   </div>
                    <div 
                 
                    class="h-[240px] rounded-bl-[64px]">
                        <img src="/img/first_card.png" />
                    </div>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                class="w-[335px] lg:w-[405px] pt-[56px] flex flex-col justify-between gap-[24px] ring_bg rounded-[64px]">
                   <div class="flex flex-col px-[40px]">
                        <h1 class="text-[24px] font-[400] leading-[33px] telegraf text-coolGray">Public Contract <br> Procurement</h1>
                        <p class="text-[16px] font-[300] leading-[24px] text-coolerGray">
                            We create guidance on public contract procurement enabling your organisation to make strategic decisions.
                        </p>
                   </div>
                    <div 
                   
                    class="">
                        <img class="rounded-br-[64px] rounded-bl-[64px]" src="/img/newbuilding.png" />
                    </div>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                class="w-[335px] lg:w-[405px] pt-[56px] flex flex-col justify-between itmes-end gap-[24px] ring_bg rounded-tr-[64px] rounded-tl-[64px] rounded-br-[64px]">
                   <div class="flex flex-col px-[40px]">
                        <h1 class="text-[24px] font-[400] leading-[33px] telegraf text-coolGray">Flexible Tender Writing Services</h1>
                        <p class="text-[16px] font-[300] leading-[24px] text-coolerGray">
                            Whether you're bidding for a framework, DPS, or service proposal, we have the flexible tender writing solutions to help you win.
                        </p>
                   </div>
                    <div 
                 
                    class="h-[240px]">
                        <img class="rounded-br-[64px]" src="/svg/woman.svg" />
                    </div>
                </div>
              

            </div>
          </div>
            
            <div class="pt-[16px] flex justify-center">
                <Nuxt-link to="/about">
                  <PrimaryBtn />
                </Nuxt-link>

            </div>
        </div>
        </div>
   

     
  
</template>

<style>
.telegraf {
  font-family: "PP Telegraf" !important;
}
.object_fit {
  object-fit: cover;
}
.ring_bg {
  background: url("/svg/ring_icon.svg") no-repeat;
  background-position: left;
  background-color: #f9f9fb;
}
</style>
