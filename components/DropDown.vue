<template>
  <div>
    <ul
      class="absolute bg-white custom_index shadow-xl py-[20px] px-[20px] rounded-bl-[10px] rounded-br-[10px]"
    >
      <li class="py-[10px]">
        <nuxt-link to="/services" class="hover:text-primaryBlue">
          Services
        </nuxt-link>
      </li>
      <li class="py-[10px]">
        <nuxt-link to="/portal" class="hover:text-primaryBlue">
          HSCT Portal
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.custom_index {
  z-index: 5000;
}
</style>
