<template>
    <div class="pt-[24px] max-w-[1440px] mx-auto px-[20px] bg-basicGray">
        <div class=" h-[812px] md:h-[720px] mx-auto hero_bg rounded-[40px] ">
            <div class="h-full flex flex-col justify-center md:justify-start">
                <div class="text-white flex flex-col  gap-[24px] px-[20px] md:px-[64px] md:pt-[160px] ">
                    <div class="lg:w-[728px] border-t border-b border-white">
                        <h1 class="  telegraf text-[40px] md:text-[56px] py-[8px] font-[400] leading-[67.2px]">
                            <span class="text-primaryYellow">Top Tier</span>
                            <br>
                            Procurement Services
                        </h1>
                    </div>

                    <p class="lg:w-[728px] leading-[24px]">
                        Efficiently manage your operations with our comprehensive  service offerings tailored for healthcare and social care companies.
                    </p>

                    <Nuxt-link  to="/contact">
                        <button class="bg-white text-baseBlack py-[14px] px-[32px] rounded-[1000px]">
                            Get in touch
                            <span><i class="pi pi-arrow-up-right"></i></span>
                        </button>
                    </Nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hero_bg{
        background-image: linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) , url('/img/service_hero.png')  ;
        background-position: center;
        background-size: cover;
    }
    .telegraf{
        font-family: 'PP Telegraf' !important;
    }
</style>