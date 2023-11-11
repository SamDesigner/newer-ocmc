<template>
    <div class="border p-[32px] border-bottonBorder rounded-[12px] w-full gap-[16px] flex flex-col ">
        <div @click="toggleFaq" class="flex justify-between">
            <h1 class="text-[20px] telegraf text-darkerGray font-[400] leading-[28px] ">{{ question }}</h1>
            
            <span class="arrow"  :class="{ 'rotate-90': isOpen }"><img src="/svg/arrow-right.svg" /></span>
        </div>
    
        <div v-show="isOpen" >
            <p>{{ answer }}</p>
        </div>

    </div>
</template>

<style scoped>
    .arrow {
        transition: transform 0.3s ease;
    }
    .form{
        transition: transform 0.3s ease
    }
</style>
<script>
    export default{
        data(){
            return {
                isOpen : false
            }
        },
        props: {
            question: String,
            answer: String
        },
        methods: {
            toggleFaq(){
                this.isOpen = !this.isOpen
            }
        }
    }
</script>