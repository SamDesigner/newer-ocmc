<template>
  <div class="max-w-[1440px] mx-auto py-[112px] px-[20px] lg:px-[64px]">
    <div class="flex flex-col md:flex-row gap-[40px] lg:gap-[80px]">
      <div class="flex-1">
        <h1 class="text-[48px] text-coolGray telegraf leading-[57px]">FAQs</h1>
        <p class="text-coolerGray">
          Find answers to frequently asked questions about OCMCs services,
          pricing, and how we work with clients to ensure the best possible
          results.
        </p>
      </div>
      <div class="flex-1 flex flex-col gap-[16px]">
        <FaqItem
          data-aos="zoom-in"
          question="How do I find the right tenders for my company?"
          answer="Businesses in the health and social care sectors can always use our easy-to-use contract platform to discover the right bids for their needs. We provide a tender sourcing solution whereby we can look for tailored tenders on your behalf for businesses operating in various procurement industries."
        />
        <FaqItem
          data-aos="zoom-in"
          question="What are the first steps to take as someone new to public procurement?"
          answer="Public procurement is a highly challenging field to join, especially as a newcomer to the industry. Understanding the procedures and getting contracts, especially without prior expertise, may be quite difficult. For someone who is absolutely new to public procurement, the greatest first step would be to chat with an expert in the sector, such as O.C management consultants, so you can best position your organization for success."
        />
        <FaqItem
          data-aos="zoom-in"
          question="How much does a tender writing cost?"
          answer="The cost of writing a tender is determined by the tender's specifics, tender difficulty, the number of lots applied for, and other variables. We may give a lower pricing per tender for a bulk of 5 for organizations wishing to expand. Send us a message for a quick quotation on any of our services."
        />
        <FaqItem
          data-aos="zoom-in"
          question="What is the process of requesting our services?"
          answer="Use any of the links on the contact us form or send us an email or message on whatsapp, and one of our staff will respond soon with information on how to use our services for your company."
        />
      </div>
    </div>
    <div>
      <div class="flex flex-col gap-[24px]">
        <div class="flex flex-col gap-[16px]">
          <h1
            class="telegraf text-[32px] font-[400] leading-[41px] text-coolGray"
          >
            Still have questions?
          </h1>
          <p class="text-coolerGray text-[18px] font-[400] leading-[27px]">
            Contact us today
          </p>
        </div>
        <nuxt-link to="/about">
          <button
            class="flex items-center border border-bottonBorder hover:bg-gray-100 transition duration-300 ease-in-out rounded-[1000px] py-[14px] px-[32px] gap-[8px] text-[14px]"
          >
            Get in touch
            <span><i class="pi pi-arrow-up-right"></i></span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
