<template>
    <div class="max-w-[1440px] mx-auto px-[20px] md:px-[64px] text-baseBlack h-[100px] flex items-center justify-center" :class="{'fixed-navbar' : isFixed}">
        <div class="flex justify-between items-center mx-auto w-[1440px] ">
            <div>
                <img src="/svg/logo.svg" />
            </div>

            <div class="hidden md:flex gap-[32px]">
                <Nuxt-link to="/about"  class="text-[16px]">About Us</Nuxt-link>
                <div @mouseover="openDropdown" absolute @mouseleave="closeDropdown">
                    <Nuxt-link to="#"   class="text-[16px] flex items-center gap-[4px]"  >
                        Services
                        <span class="pi pi-angle-down"></span>
                    </Nuxt-link>
                    <DropDown v-show="nowOpen" class="" />
                </div>
               
                <Nuxt-link to="/resources"  class="text-[16px]">Resources</Nuxt-link>
               
            </div>  

        <div class="hidden md:block">
          <button
            class="text-white bg-primaryBlue hover:bg-blue-500 py-[14px] px-[32px] rounded-[1000px]"
          >
            Get in touch
            <span><i class="pi pi-arrow-up-right"></i></span>
          </button>
        </div>
        <div class="md:hidden">
          <img src="/svg/hamburger.svg" />
        </div>
      </div>

      <div class="hidden md:block">
        <button
          class="text-white bg-primaryBlue hover:bg-blue-500 py-[14px] px-[32px] rounded-[1000px]"
        >
          Get in touch
          <span><i class="pi pi-arrow-up-right"></i></span>
        </button>
      </div>
      <div class="md:hidden">
        <img src="/svg/hamburger.svg" />
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                isFixed:false,
                isOpen:false,
                nowOpen:false
            }
        },
        mounted(){
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
            handleIsOpen(){
                this.isOpen = !this.isOpen
            }
        }
    }
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
</style>
