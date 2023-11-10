<template>
    <div class="bg-grayBg">
        <div class="max-w-[1440px] mx-auto py-[32px] lg:py-[112px] px-[20px] lg:px-[64px] ">
            <div class="flex flex-col  md:flex-row  lg:items-center gap-[80px]">
                <div 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="700"
                data-aos-offset="0"
                class="h-[348px] lg:h-[616px]">
                    <img class="rounded-[1000px] object_fit" :src="imageUrl" />
                </div>

                <div 
                data-aos="fade-left"
               
                
                class="md:w-[616px] flex flex-col gap-[8px] md:gap-[24px]">
                    <div class="flex gap-[8px] ">
                        <img src="/svg/ellipse.svg" />
                        <h4 class="text-coolerGray text-[16px] font-[400] leading-[24px]">Sectors we serve</h4>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <div class="border-y border-lightBlue pt-[18px] pb-[16px]">
                            <h1 class="text-coolGray text-[36px] lg:text-[48px] leading-[57px] font-[400] telegraf ">{{ headerText }}</h1>
                        </div>

                        <p class="text-justify md:text-left text-[16px] font-[300] leading-[24px] text-coolerGray">
                            {{ text }}
                        </p>
                    </div>
                    <Nuxt-link to="/contact" class="pt-[14px]">
                        <PrimaryBtn />
                    </Nuxt-link>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .object_fit{
        object-fit: cover;
    }
</style>

<script>
    export default{
        props:{
            imageUrl:String,
            headerText:String,
            text:String
        }
    }
</script>