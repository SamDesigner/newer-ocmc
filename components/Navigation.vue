<template>
  <div>
    <div
      v-if="isActive"
      class="fixed top-0 custom_index bg-white custom_opacity w-full h-[100vh]"
    >
      <div @click="closeActive" class="absolute top-4 right-4">
        <span class="text-[40px]"><i class="pi pi-times"></i></span>
      </div>

      <div class="h-full flex flex-col justify-center items-center gap-[40px]">
        <div>
          <nuxt-link to="/" class="text-coolGray text-[20px] text-center">
            Home
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/about" class="text-coolGray text-[20px] text-center">
            About
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/services"
            class="text-coolGray text-[20px] text-center"
          >
            Services
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/portal" class="text-coolGray text-[20px] text-center">
            Portal
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/contact"
            class="text-coolGray text-[20px] text-center"
          >
            Contact Us
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="px-[20px] md:px-[64px] text-baseBlack h-[100px] flex items-center justify-center"
      :class="{ 'fixed-navbar': isFixed }"
    >
      <div class="flex justify-between items-center mx-auto w-[1440px]">
        <nuxt-link to="/">
          <img src="/svg/logo.svg" />
        </nuxt-link>

        <div class="hidden md:flex gap-[32px]">
          <nuxt-link to="/about" class="text-[16px]">About Us</nuxt-link>
          <div @mouseover="openDropdown" absolute @mouseleave="closeDropdown">
            <nuxt-link class="text-[16px] flex items-center gap-[4px]">
              Services
              <span class="pi pi-angle-down"></span>
            </nuxt-link>
            <DropDown class="custom_index" v-show="nowOpen" />
          </div>

          <nuxt-link to="/resources" class="text-[16px]">Resources</nuxt-link>
        </div>

        <div class="hidden md:block">
          <nuxt-link to="/contact">
            <button
              class="text-white bg-primaryBlue hover:bg-blue-500 py-[14px] px-[32px] rounded-[1000px]"
            >
              Get in touch
              <span><i class="pi pi-arrow-up-right"></i></span>
            </button>
          </nuxt-link>
        </div>
        <div @click="openActive" class="md:hidden">
          <img src="/svg/hamburger.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      isOpen: false,
      nowOpen: false,
      isActive: false,
    };
  },
  mounted() {
    const scrollThreshold = 40;

    window.addEventListener("scroll", this.handleScroll);

    this.isFixed = window.scrollY >= scrollThreshold;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollThreshold = 240;
      this.isFixed = scrollY >= scrollThreshold;

      if (scrollY >= scrollThreshold) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    openDropdown() {
      this.nowOpen = true;
    },
    closeDropdown() {
      this.nowOpen = false;
    },
    handleIsOpen() {
      this.isOpen = !this.isOpen;
    },
    openActive() {
      this.isActive = true;
    },
    closeActive() {
      this.isActive = false;
    },
  },
};
</script>
<style scoped>
.index_high {
  z-index: 1000;
}
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 65px;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Add a smooth transition effect for smooth appearance */
  transition: all 0.3s ease;
}
@media (max-width: 768px) {
  .fixed-navbar {
    padding: 5px 16px;
  }
}
.router-link-exact-active {
  color: #2970ff;
}

.custom_index {
  z-index: 3000;
}
</style>
