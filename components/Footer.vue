<template>
  <div class="bg-footerDark">
    <div class="max-w-[1440px] mx-auto px-[20px] lg:px-[64px] pt-[112px]">
      <div class="flex flex-col gap-[64px]">
        <div
          class="text-white gap-[48px] flex flex-col md:flex-row justify-between items-center"
        >
          <div>
            <img src="/svg/logo_white.svg" />
          </div>
          <div>
            <ul
              class="flex flex-col md:flex-row items-center gap-[16px] md:gap-[32px]"
            >
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li>
                <nuxt-link class="flex items-center gap-[8px]" to="/services">
                  Services
                  <span><img src="/svg/service_badge.svg" /></span>
                </nuxt-link>
              </li>
              <li><nuxt-link to="/resources">Resources</nuxt-link></li>
            </ul>
          </div>
          <div>
            <ul class="flex items-center gap-[40px]">
              <li>
                <nuxt-link
                  to="https://www.linkedin.com/company/o-c-management-consultants/"
                  ><img src="/svg/in.svg"
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="https://instagram.com/ocmanagementconsultants?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
                  ><img src="/svg/ig.svg"
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="https://www.facebook.com/profile.php?id=100067805363248"
                  ><img src="/svg/facebook.svg"
                /></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-center text-dullText">
          <div
            class="text-[16px] font-[400] leading-[24px] border-t border-coolGray text-center flex flex-col gap-[16px] py-[20px] md:py-[40px] px-[40px] lg:px-[80px]"
          >
            <h3>Designed by TGPC Media</h3>
            <p>
              &copy; <span>{{ currentYear }} </span> OC Management Consultant.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
