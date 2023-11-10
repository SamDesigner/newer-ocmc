<template>
  <div>
    <button
      @click="copyRoute"
      class="md:text-sm text-xs border border-[#7D89B0] rounded-md px-5 py-2 hover:bg-[#7D89B0]/25"
    >
      <i class="pi pi-copy pr-2"></i>{{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonText = ref("Copy Link");

const copyRoute = () => {
  const route = useRoute();
  const currentRoute = `${window.location.origin}${route.fullPath}`;

  // Copy the route to the clipboard
  navigator.clipboard
    .writeText(currentRoute)
    .then(() => {
      buttonText.value = "Copied!";
      setTimeout(() => {
        buttonText.value = "Copy Link";
      }, 2000); // Revert the button text after 2 seconds
    })
    .catch((error) => {
      console.error("Failed to copy route:", error);
    });
};
</script>
