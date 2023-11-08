<template>
    <div class="max-w-[1440px] mx-auto bg-darkblue">
        <div class="bg-darkBlue">
            <div class="bg-basicGray rounded-tr-[40px] rounded-tl-[40px]  lg:rounded-tr-[120px] lg:rounded-tl-[120px] flex flex-col gap-[80px]  py-[112px] px-[16px] lg:px-[64px]">
                <div class="lg:w-[768px] flex flex-col gap-[32px] items-start">
                    <div class="flex gap-[8px] items-center">
                        <img src="/svg/yellow_dot.svg" />
                        <span>Insights</span>
                    </div>
                    <div class="border-y border-lightBlue pt-[18px] pb-[16px] flex align-self-stretch">
                        <h1 class="text-coolGray telegraf leading-[120%] font-[400] text-[48px]">Stay Informed <span class="text-black">with OCMC</span></h1>
                    </div>
            
                    <p class="font-[300] text-[16px] leading-[24px] text-coolerGray">Gain insights for the Changing Landscape.</p>
                </div>
                <div class="flex flex-col gap-[32px]">
                    <div class="flex justify-end">
                        <ul class="flex gap-[24px] telegraf text-[18px] font-[400] leading-[25.2px] text-tabGray ">
                        <li><nuxt-link>All</nuxt-link></li> 
                        <li><nuxt-link>Books</nuxt-link></li> 
                        <li><nuxt-link>Videos</nuxt-link></li> 
                        <li><nuxt-link>News</nuxt-link></li> 
                        </ul>
                    </div>
                    <div>
                        <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[32px]">
                            <div class="bg-white shadow-md rounded-[16px]">
                                <div class="h-[300px] rounded-tr-[16px] rounded-tl-[16px]">
                                    <img class="h-full rounded-tr-[16px] rounded-tl-[16px]" src="/img/blog-1.png" />
                                </div>
                                <div class="p-[24px] flex flex-col flex-1 align-self-stretch gap-[24px]">
                                    <div class="bg-primaryBlue w-fit p-[8px] rounded-[2px]" >
                                        <img src="/svg/article-icon.svg" />
                                    </div>
                                    <div class="flex flex-col  gap-[8px]">
                                        <h1 class="telegraf align-self-stretch w-full text-coolGray font-[400] text-[24px] leading-[33px]">The Importance of Outsourcing in Healthcare</h1>
                                        <p>Learn how outsourcing can benefit healthcare organisations.</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div class="bg-white shadow-md rounded-[16px]">
                                <div class="h-[300px] rounded-tr-[16px] rounded-tl-[16px]">
                                    <img class="h-full rounded-tr-[16px] rounded-tl-[16px]" src="/img/blog-1.png" />
                                </div>
                                <div class="p-[24px] flex flex-col  align-self-stretch gap-[24px]">
                                    <div class="bg-primaryBlue w-fit p-[8px] rounded-[2px]" >
                                        <img src="/svg/article-icon.svg" />
                                    </div>
                                    <div class="flex flex-col  gap-[8px]">
                                        <h1 class="telegraf align-self-stretch w-full text-coolGray font-[400] text-[24px] leading-[33px]">The Importance of Outsourcing in Healthcare</h1>
                                        <p>Learn how outsourcing can benefit healthcare organisations.</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div class="bg-white shadow-md rounded-[16px]">
                                <div class="h-[300px] rounded-tr-[16px] rounded-tl-[16px]">
                                    <img class="h-full rounded-tr-[16px] rounded-tl-[16px]" src="/img/blog-1.png" />
                                </div>
                                <div class="p-[24px] flex flex-col align-self-stretch gap-[24px]">
                                    <div class="bg-primaryBlue w-fit p-[8px] rounded-[2px]" >
                                        <img src="/svg/article-icon.svg" />
                                    </div>
                                    <div class="flex flex-col  gap-[8px]">
                                        <h1 class="telegraf align-self-stretch w-full text-coolGray font-[400] text-[24px] leading-[33px]">The Importance of Outsourcing in Healthcare</h1>
                                        <p>Learn how outsourcing can benefit healthcare organisations.</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                          

                        </div>
                    </div>
                </div>
           
                <Testimonial />
            </div>
            
        </div>
     
    </div>
</template>