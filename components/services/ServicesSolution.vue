<template>
    <div class="max-w-[1440px] mx-auto py-[64px]  md:py-[112px] px-[20px] "> 
        <div class="flex flex-col lg:flex-row items-center gap-[48px] md:gap-[80px]">
            <div class="flex flex-col flex-1 gap-[24px]">
                <div class="border-y border-lightBlue pt-[18px] pb-[16px]">
                    <h1 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="900"
                    data-aos-offset="0"
                    class="text-coolGray text-[48px] font-[400] leading-[57px] ">Tailored Solutions for You</h1>
                </div>
                <p 
                data-aos="fade-right"
                class="text-coolerGray font-[18px] font-[400] leading-[27px] ">
                    We offer premium services tailored to your unique needs. Whether you need support with bid and tender writing, conducting audits our expertise is dedicated to helping you reach your objectives.
                </p>

                <Nuxt-link to="/contact">
                    <button class="flex items-center border border-bottonBorder hover:bg-gray-100 transition duration-300 ease-in-out rounded-[1000px] py-[14px] px-[32px] gap-[8px] text-[14px]">
                        Get in touch
                        <span><i class="pi pi-arrow-up-right"></i></span>
                    </button>
                </Nuxt-link>

            </div>
            <div class="flex-1">
                <div
                data-aos="zoom-in"
                class="w-[348px] md:w-[616px]  ">
                    <img class="rounded-[1000px] h-[348px] md:h-[640px] " src="/img/service_solution.png" />
                </div>
            </div>

        </div>
    </div>
</template>