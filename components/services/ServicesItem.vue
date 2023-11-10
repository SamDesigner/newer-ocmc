<template>
    <div class="">
        <div class="rounded-[24px] border border-skyBorder bg-basicGray flex flex-col lg:flex-row items-center  ">
            <div class="flex-1 py-[24px] px-[24px] md:py-[64px] md:px-[48px] flex flex-col gap-[32px]">
                <div class="flex flex-col gap-[24px]">
                    <div class="flex flex-col gap-[12px]">
                        <p class="flex items-center gap-[8px] text-coolerGray ">
                            <span><img src="/svg/yellow_dot.svg" /></span>
                            Our Services
                        </p>

                        <div class="border-y border-lightBlue pt-[18px] pb-[16px] ">
                            <h1 class="font-[400] text-coolGray telegraf text-[32px] md:text-[40px] leading-[48px]">{{ header }}</h1>
                        </div>
                    </div>

                    <p class="text-[16px] font-[400] text-coolerGray leading-[24px]">
                        {{ content }}
                    </p>
                </div>

                <ul class="flex flex-col gap-[16px]">
                    <li class="flex items-center gap-[16px] text-coolerGray">
                        <span>
                            <img :src="cube" />
                        </span>
                        {{ item1 }}
                    </li>
                    <li class="flex items-center gap-[16px] text-coolerGray">
                        <span>
                            <img :src="cube" />
                        </span>
                        {{ item2 }}
                    </li>
                    <li class="flex items-center gap-[16px] text-coolerGray">
                        <span>
                            <img :src="cube" />
                        </span>
                        {{ item3 }}
                    </li>
                </ul>
            </div>
            <div class="w-[311px] h-[335px] md:w-[720px] md:h-[568px]  rounded-tr-[24px] rounded-br-[24px]">
                <img class="rounded-tl-[650px] rounded-bl-[650px] rounded-tr-[24px] rounded-br-[24px] h-full  " :src="imageUrl " />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            imageUrl:String,
            header: String,
            content: String,
            item1: String,
            item2: String,
            item3: String,
            cube:String
        }
    }
</script>