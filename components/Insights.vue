<template>
  <div class="max-w-[1440px] mx-auto bg-darkblue">
    <div class="bg-darkBlue">
      <div
        class="bg-basicGray rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tr-[120px] lg:rounded-tl-[120px] flex flex-col gap-[80px] py-[112px] px-[16px] lg:px-[64px]"
      >
        <div class="lg:w-[768px] flex flex-col gap-[32px] items-start">
          <div class="flex gap-[8px] items-center">
            <img src="/svg/yellow_dot.svg" />
            <span>Insights</span>
          </div>
          <div
            class="border-y border-lightBlue pt-[18px] pb-[16px] flex align-self-stretch"
          >
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              class="text-coolGray telegraf leading-[120%] font-[400] text-[48px]"
            >
              Stay Informed <span class="text-black">with OCMC</span>
            </h1>
          </div>

          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            class="font-[300] text-[16px] leading-[24px] text-coolerGray"
          >
            Gain insights for the Changing Landscape.
          </p>
        </div>
        <TabGroup>
          <TabList class="flex justify-end space-x-10">
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'underline underline-offset-8 text-primaryBlue outline-none border-none':
                    selected,
                  'bg-white text-black': !selected,
                }"
              >
                Books
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'underline underline-offset-8 text-primaryBlue outline-none border-none':
                    selected,
                  'bg-white text-black': !selected,
                }"
              >
                Videos
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'underline underline-offset-8 text-primaryBlue outline-none border-none':
                    selected,
                  'bg-white text-black': !selected,
                }"
              >
                News
              </button>
            </Tab>
            <!-- ... -->
          </TabList>
          <TabPanels>
            <TabPanel>
              <div class="grid md:grid-cols-3 md:gap-10 gap-14 my-10">
                <div v-for="item in books" :key="item.id">
                  <div class="text-center">
                    <img
                      :src="item.image"
                      alt="Book Image"
                      class="rounded-xl shadow"
                    />
                    <p class="telegraf text-xl py-3">{{ item.title }}</p>
                    <button
                      class="text-primaryBlue hover:bg-primaryBlue/25 rounded-full px-10 py-2 transition-colors duration-150"
                    >
                      Get Now <span><i class="pi pi-arrow-up-right"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="grid md:grid-cols-3 gap-10 my-10">
                <div v-for="item in videos" :key="item.id">
                  <div class="text-center">
                    <img
                      :src="item.image"
                      alt="Book Image"
                      class="rounded-full blur-[2px]"
                    />
                    <p class="telegraf text-xl py-3 text-center">
                      {{ item.title }}
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>Content 3</TabPanel>
            <!-- ... -->
          </TabPanels>
        </TabGroup>

        <Testimonial />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const books = ref([
  {
    title: "Bridging the Gap",
    image: "/img/bridging-the-gap.png",
  },
  {
    title: "Social Care business management explained",
    image: "/img/social-care.png",
  },
  {
    title: "Mastering tupe transfers in social care services",
    image: "/img/mastering-tupe.png",
  },
]);

const videos = ref([
  {
    title: "CQC Regulation 13: Good Governance",
    image: "/img/good-governance.png",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    image: "/img/good-governance.png",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    image: "/img/good-governance.png",
  },
]);
</script>
