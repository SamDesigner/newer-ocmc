<template>
    <div class="max-w-[1440px] py-[112px] px-[20px] lg:px-[64px]">
        <div class="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-center">
            <div class="flex-1">
                <div class="flex flex-col gap-[24px]">
                    <div class="flex flex-col gap-[16px]">
                        <p class="flex items-center gap-[8px] text-coolerGray text-[16px] font-[400] leading-[24px] ">
                            <span>
                                <img src="/svg/yellow_dot.svg" />
                            </span>
                            Tailored
                        </p>
                        <div class="border-y border-lightBlue pt-[18px] pb-[16px]" >
                            <h1 class="text-[36px] lg:text-[48px] leading-[43px] md:leading-[57px] font-[400] telegraf text-coolGray">Introducing our User-Friendly Contract Portal</h1>
                        </div>
                    </div>

                    <p class="text-[18px] font-[400] leading-[27px] text-coolerGray ">
                        Your one stop portal to finding and applying for suitable contracts in Health and Social care.
                    </p>

                    <Nuxt-link>
                        <PrimaryBtn />
                    </Nuxt-link>
                </div>
            </div>
            <div class="flex-1">
                <img class="h-[348px] md:h-[640px]"  src="/svg/hstc.svg" />
            </div>
        </div>
    </div>
</template>