<template>
    <div class="max-w-[1440px] mx-auto py-[64px] lg:py-[112px] px-[20px] lg:px-[64px] bg-darkBlue text-white flex items-center justify-center">
        <div class="flex flex-col justify-center md:flex-row items-start lg:items-center gap-[40px] lg:gap-[80px]">
            <div class="flex-1 flex flex-col gap-[24px] ">
                <div class="border-y border-white pt-[18px] pb-[16px]">
                    <h3 class="text-[32px] font-[400] telegraf leading-[41px]">About OCMC</h3>
                </div>
                <p class="text-[16px] text-justify lg:text-left font-[300] leading-[24px]">
                    At OCMC, we are your trusted partner, in the social care sector.
                    With our specialised expertise in tender procurement, audit services, mock inspections, 
                    and more, we empower our clients to not only achieve their goals but surpass them. 
                    Partner with OCMC and experience the difference.
                </p>
                <PrimaryBtn class="hover:bg-gray-700 mt-[16px] w-fit" />
            </div>
            <div class="flex-1 lg:h-[640px] relative overflow-hidden">
                <img class="rounded-[1000px]" src="/img/about.png" />

            </div>
        </div>
    </div>
</template>