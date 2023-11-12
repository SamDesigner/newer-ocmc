<template>
    <div class="max-w-[1440px] mx-auto py-[112px] px-[20px] lg:px-[64px]">
        <div class="flex flex-col md:flex-row gap-[40px] lg:gap-[80px]">
            <div class="flex-1">
                <h1 class="text-[48px] text-coolGray telegraf leading-[57px] ">FAQs</h1>
                <p class="text-coolerGray">
                    Find answers to frequently asked questions about OCMCs services, pricing, and how we work with clients to ensure the best possible results.
                </p>
            </div>
            <div class="flex-1 flex flex-col gap-[16px]">
                <FaqItem 
                    data-aos="zoom-in"
                    question="How can OCMC help?" answer="Find answers to frequently asked questions about OCMC's services, pricing, and how we work with clients to ensure the best possible results." />
                <FaqItem 
                    data-aos="zoom-in"
                    question="What are the benefits?" answer="Find answers to frequently asked questions about OCMC's services, pricing, and how we work with clients to ensure the best possible results." />
                <FaqItem 
                    data-aos="zoom-in"
                    question="What types of services?" answer="Find answers to frequently asked questions about OCMC's services, pricing, and how we work with clients to ensure the best possible results." />
                <FaqItem 
                    data-aos="zoom-in"
                    question="How to contact?" answer="Find answers to frequently asked questions about OCMC's services, pricing, and how we work with clients to ensure the best possible results." />
                <FaqItem 
                    data-aos="zoom-in"
                    question="What are the pricing options?" answer="Find answers to frequently asked questions about OCMC's services, pricing, and how we work with clients to ensure the best possible results." />


              
           
            </div>

        </div>
        <div>
            <div class="flex flex-col gap-[24px]">
                <div class="flex flex-col gap-[16px]">
                    <h1 class="telegraf text-[32px] font-[400] leading-[41px] text-coolGray">Still have questions?</h1>
                    <p class="text-coolerGray text-[18px] font-[400] leading-[27px]">Contact us today</p>
                </div>   
                <Nuxt-link to="/about">
                    <button class="flex items-center border border-bottonBorder hover:bg-gray-100 transition duration-300 ease-in-out rounded-[1000px] py-[14px] px-[32px] gap-[8px] text-[14px]">
                        Getin touch
                        <span><i class="pi pi-arrow-up-right"></i></span>
                    </button>
                </Nuxt-link>
            </div>

        </div>
    </div>
</template>
