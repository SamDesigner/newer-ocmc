<template>
    <div class="max-w-[1440px] mx-auto py-[64px] md:py-[112px] px-[16px] lg:px-[64px]">
        <div class="flex flex-col gap-[48px]">
            <div class="flex items-center justify-center">   
                <div class="w-[768px] border-y border-lightBlue pt-[18px] pb-[16px]">
                    <h1 class="telegraf text-[36px] md:text-[48px] text-coolGray text-center font-[400]">Streamline Your Operations with OCMC's Services</h1>
                </div>
            </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[48px] ">
                <div class="w-[335px] lg:w-[405px] flex flex-col gap-[32px]">
                    <div class="h-[335px] lg:h-[400px] overflow-hidden">
                        <img class="h-full rounded-[1000px] object_fit" src="/img/placeholder1.png" />
                    </div>
                    <div>
                        <h1 class="telegraf text-[24px] font-[400] leading-[33.6px] text-center text-coolGray">Growth and Diversification</h1>
                        <p class="font-[16px] font-[300] leading-[24px] text-center text-coolGray">We guide clients through intricate regulatory processes, enabling their growth while maintaining compliance.</p>
                    </div>
                </div>
                <div class="w-[335px] lg:w-[405px] flex flex-col gap-[32px]">
                    <div class="h-[335px] lg:h-[400px] overflow-hidden">
                        <img class="h-full rounded-[1000px] object_fit" src="/img/placeholder2.png" />
                    </div>
                    <div>
                        <h1 class="telegraf text-[24px] font-[400] leading-[33.6px] text-center text-coolGray">Public Contract Procurement</h1>
                        <p class="font-[16px] font-[300] leading-[24px] text-center text-coolGray">
                            We create guidance on public contract procurement enabling your organisation to make strategic decisions.
                        </p>
                    </div>
                </div>
                <div class="w-[335px] lg:w-[405px] flex flex-col gap-[32px]">
                    <div class="h-[335px] lg:h-[400px] overflow-hidden">
                        <img class="h-full rounded-[1000px] object_fit" src="/img/placeholder3.png" />
                    </div>
                    <div>
                        <h1 class="telegraf text-[24px] font-[400] leading-[33.6px] text-center text-coolGray">
                            Flexible Tender Writing Solutions
                        </h1>
                        <p class="font-[16px] font-[300] leading-[24px] text-center text-coolGray">
                            Whether you're bidding for a framework, DPS, mini competition, or service proposal, we have the flexible tender writing solutions to help you win.
                        </p>
                    </div>
                </div>
            </div>
          </div>
            
            <div class="pt-[16px] flex justify-center">
                <Nuxt-link to="/">
                  <PrimaryBtn />
                </Nuxt-link>
            </div>
        </div>
        
    </div>
</template>

<style >
    .telegraf{
        font-family: 'PP Telegraf' !important;
    }
    .object_fit{
        object-fit: cover;
    }
</style>
