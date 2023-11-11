<template>
    <div id="#contracts" class="max-w-[1440px]  mx-auto px-[20px] py-[112px] bg-basicGray rounded-br-[120px] rounded-bl-[120px]">
        <div class="flex flex-col lg:flex-row gap-[80px]">
            <div class="flex-1 flex flex-col gap-[32px]">
                <div 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
                class="flex flex-col gap-[16px]">
                    <h1 class="text-[48px] font-[400] leading-[57px] telegraf">Apply For Public Contracts With Ease</h1>
                    <p class="text-coolerGray text-[18px] leading-[27px] ">
                        Introducing the HSTC Contract Portal, a user-friendly platform that simplifies the process of finding and applying for public contracts. Save time and effort by accessing a centralised database of opportunities and easily submitting your applications.
                    </p>
                </div>
               

                <div class="flex flex-col gap-[24px] md:flex-row ">
                    <div class="flex-1 flex flex-col gap-[16px]">
                        <div
                        data-aos="fade-up"
                        >
                            <img src="/svg/google_icon.svg" />
                        </div>
                    
                        <h3 class="text-coolGray text-[20px] font-[400] leading-[28px]">Find</h3>
                        <p class="text-coolerGray text-[16px] leading-[24px] ">Discover Lucrative Public Contracts Tailored to Your Business</p>
                    </div>
                    <div class="flex-1 flex flex-col gap-[16px]">
                        <div
                        data-aos="fade-up"
                        >
                            <img src="/svg/paper_icon.svg" />
                        </div>
                    
                        <h3 
                        data-aos="fade-in"
                        class="text-coolGray text-[20px] font-[400] leading-[28px]">Apply</h3>
                        <p 
                        data-aos="fade-in"
                        class="text-coolerGray text-[16px] leading-[24px] ">Effortlessly Submit Applications and Increase Your Chances of Winning Contracts</p>
                    </div>
                </div>
               <Nuxt-link to="/">
                    <button class=" flex items-center border border-bottonBorder hover:bg-gray-100 transition duration-300 ease-in-out rounded-[1000px] py-[14px] px-[32px] gap-[8px] text-[14px]">
                            Get started
                            <span><i class="pi pi-arrow-up-right"></i></span>
                    </button>
               </Nuxt-link>
            </div>
            <div 
            data-aos="zoom-in"
            class="flex-1 flex justify-center">
                    <img src="/img/overall.png" />
            </div>
        </div>
    </div>
</template>