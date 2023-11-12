<template>
  <div class="max-w-[1440px] mx-auto py-[64px] md:py-[112px] px-10">
    <div class="flex flex-col items-center justify-center">
      <div
        class="lg:w-[768px] flex flex-col gap-[24px] justify-center items-center"
      >
        <div class="border-y border-lightBlue pt-[18px] pb-[16px]">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
            class="text-coolGray font-[400] text-[36px] md:text-[48px] leading-[43px] md:leading-[57px] telegraf text-center"
          >
            Grow your business
          </h1>
        </div>
        <p
          class="text-coolerGray text-center text-[18px] font-[400] leading-[27px]"
        >
          Discover OCMC's comprehensive range of services
        </p>
      </div>
      <div
        class="pt-[48px] md:pt-[80px] flex flex-col gap-[24px] md:gap-[64px]"
      >
        <ServicesItem
          class="overflow-x-hidden"
          imageUrl="/img/service_1.png"
          header="Flexible Tender Writing Services"
          content="Whether you're bidding for a framework, DPS, mini competitions, or service proposals, we have the right tender writing service for your business. Our services include:"
          item1=" Single Application Support"
          item2="Bulk Tender Application Support"
          item3="Tender Reviews/Proofreading"
          cube="/svg/cube.svg"
        />
        <ServicesItemBasic
          class="overflow-x-hidden"
          imageUrl="/img/service_2.png"
          header="Comprehensive Compliance Framework"
          content="We work with organisations to create bespoke quality frameworks, tools and resources to enable businesses meet regulatory requirements related to public contracts."
        />
        <ServicesItemBasic
          class="overflow-x-hidden"
          imageUrl="/img/service_33.png"
          header="Mock inspections"
          content="We conduct mock inspections to prepare businesses for real regulatory inspections from authorities like CQC and Ofsted."
        />
        <ServicesItemBasic
          class="overflow-x-hidden"
          imageUrl="/img/service-5.png"
          header="Commissioned Analytics"
          content="We provide valuable insights into public contract procurement trends and market dynamics, enabling your organisation to make informed, strategic decisions."
        />
        <ServicesItemBasic
          class="overflow-x-hidden"
          imageUrl="/img/service-6.png"
          header="Audits"
          content="We conduct independent audits to ensure businesses are meeting all necessary compliance standards."
        />
        <ServicesItemBasic
          class="overflow-x-hidden"
          imageUrl="/img/service-7.png"
          header="Contract Procurement Strategy Consultation"
          content="We assist businesses in developing strategic approaches to secure public contracts, fostering sustainable growth."
        />
      </div>
    </div>
  </div>
</template>
