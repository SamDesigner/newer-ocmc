<template>
    <div class="max-w-[1440px] mx-auto ">
        <div class="showcase_bg rounded-tr-[40px] rounded-tl-[40px] md:rounded-tr-[120px] md:rounded-tl-[120px] h-[456px] py-[64px] md:py-[112px] px-[20px] md:px-[64px]">
            <div class="text-white lg:w-[768px] flex flex-col gap-[24px]">
                <div class="border-y  pt-[18px] pb-[16px] ">
                    <h1 class="text-[36px] md:text-[48px] leading-[57px] telegraf ">Upscale Your Business Operations</h1>
                </div>
                <p class="text-[16px] font-[300] leading-[24px] ">Contact OCMC today to learn how our services can benefit your company.</p>
                <div class="pt-[16px]">
                        <Nuxt-link class="bg-white text-coolerGray py-[14px] px-[32px] rounded-[1000px] gap-[8px] hover:bg-gray-300 cursor-pointer">
                            Get in touch
                            <span><i class="pi pi-arrow-up-right"></i></span>
                        </Nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .showcase_bg{
        background: linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) , url('/img/showcase_bg.png');
        background-size: cover;
        background-position: center;
    }
</style>