<template>
    <div class="max-w-[1440px] mx-auto py-[112px] px-[20px] lg:px-[64px] bg-lightGrayBg rounded-br-[120px] rounded-bl-[120px]">
        <div class="flex flex-col items-center">
            <div class="md:w-[768px]">
                <div>
                    <img src="/svg/newsicon.svg" />
                    <h3>News</h3>
                </div>
                <div class="border-y border-lightBlue pt-[18px] pb-[16px] text-[40px] leading-[48px] text-coolGray text-center">
                    Keep a finger on the pulse of current news and trends.
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px] py-[80px]">
                <div >
                    <div class="rounded-[1000px]">
                        <img class="rounded-[1000px]" src="/img/blog_placeholder.png" />
                    </div>
                    <div class="p-[24px] flex flex-col gap-[8px]">
                        <h4 class="text-[14px] font-[600] leading-[21px] text-coolGray">John Doe</h4>
                        <div class="text-coolerGray flex items-center gap-[8px]">
                            <span class="text-[14px]">11 Jan 2022</span>
                            <span class="text-[18px] font-[400] leading-[27px] ">•</span>
                            <span >5 min read</span>
                        </div>
                        <h1 class="text-[24px] telegraf font-[400] leadomg-[33px] ">
                            The Importance of Regular Exercise

                        </h1>
                        <p class="text-coolerGray text-[16px] leading-[24px] font-[400] ">Learn why regular exercise is crucial for maintaining good health.</p>
                    </div>
                </div>
                <div >
                    <div class=" rounded-[1000px]">
                        <img class="rounded-[1000px]" src="/img/blog_placeholder.png" />
                    </div>
                    <div class="p-[24px] flex flex-col gap-[8px]">
                        <h4 class="text-[14px] font-[600] leading-[21px] text-coolGray">John Doe</h4>
                        <div class="text-coolerGray flex items-center gap-[8px]">
                            <span class="text-[14px]">11 Jan 2022</span>
                            <span class="text-[18px] font-[400] leading-[27px] ">•</span>
                            <span >5 min read</span>
                        </div>
                        <h1 class="text-[24px] telegraf font-[400] leadomg-[33px] ">
                            The Importance of Regular Exercise

                        </h1>
                        <p class="text-coolerGray text-[16px] leading-[24px] font-[400] ">Learn why regular exercise is crucial for maintaining good health.</p>
                    </div>
                </div>
                <div >
                    <div class=" rounded-[1000px]">
                        <img class="rounded-[1000px]" src="/img/blog_placeholder.png" />
                    </div>
                    <div class="p-[24px] flex flex-col gap-[8px]">
                        <h4 class="text-[14px] font-[600] leading-[21px] text-coolGray">John Doe</h4>
                        <div class="text-coolerGray flex items-center gap-[8px]">
                            <span class="text-[14px]">11 Jan 2022</span>
                            <span class="text-[18px] font-[400] leading-[27px] ">•</span>
                            <span >5 min read</span>
                        </div>
                        <h1 class="text-[24px] telegraf font-[400] leadomg-[33px] ">
                            The Importance of Regular Exercise

                        </h1>
                        <p class="text-coolerGray text-[16px] leading-[24px] font-[400] ">Learn why regular exercise is crucial for maintaining good health.</p>
                    </div>
                </div>
            </div>
            <Nuxt-link to="/">
                <button class="border border-black py-[12px] px-[24px] font-[16px] font-[400] leading-[24px] ">Button</button>
            </Nuxt-link>
        </div>
    </div>
</template>