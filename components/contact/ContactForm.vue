<template>
  <div class="py-[96px] max-w-[1440px] mx-auto">
    <div class="lg:w-[1280px] mx-auto">
      <div class="flex flex-col gap-[20px]">
        <div class="flex flex-col gap-[12px]">
          <h3
            class="text-primaryBlue text-center text-[16px] font-[400] leading-[24px]"
          >
            Contact us
          </h3>
          <h1
            class="text-[32px] leading-[41px] font-[400] telegraf text-center"
          >
            Get in touch
          </h1>
        </div>

        <p
          class="telegraf text-[20px] leading-[28px] text-coolerGray text-center"
        >
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>

      <div class="pt-[64px]">
        <form class="w-[480px] mx-auto flex flex-col gap-[24px]">
          <div class="flex gap-[32px]">
            <div class="flex flex-1 flex-col gap-[6px]">
              <label>First name</label>
              <input
                type="text"
                class="border text-[16px] border-inputBorder py-[14px] px-[16px] rounded-[1000px]"
                placeholder="First name"
              />
            </div>
            <div class="flex flex-1 flex-col gap-[6px]">
              <label>Last name</label>
              <input
                type="text"
                class="border text-[16px] border-inputBorder py-[14px] px-[16px] rounded-[1000px]"
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="flex flex-col gap-[6px]">
            <label>Email</label>
            <input
              type="email"
              class="border border-inputBorder py-[14px] px-[16px] rounded-[1000px]"
              placeholder="you@company.com"
            />
          </div>
          <div class="flex flex-col gap-[6px]">
            <label>Phone number</label>
            <div
              class="border border-inputBorder py-[14px] px-[16px] rounded-[1000px]"
            >
              <div class="flex outline-none gap-[16px]">
                <select>
                  <option>UK</option>
                </select>
                <input
                  type="text"
                  class="w-full text-[16px]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[6px]">
            <label>Message</label>
            <textarea
              placeholder="Leave us a message"
              class="border text-[16px] border-inputBorder py-[14px] px-[16px] rounded-[8px]"
            >
            </textarea>
          </div>

          <div class="flex items-center gap-[12px]">
            <input type="checkbox" class="border text-[16px]" />
            <span> You agree to our friendly privacy policy </span>
          </div>

          <button
            class="bg-primaryBlue text-white py-[14px] px-[32px] rounded-[1000px] w-full"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
