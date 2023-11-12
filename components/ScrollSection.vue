<template>
    <div class="flex flex-row h-screen overflow-hidden" ref="container" @scroll="handleScroll">
      <!-- Left Part -->
      <div class="flex-1 overflow-y-auto">
        <!-- Left Part Content -->
        <div class="py-4 px-6 h-[70vh]">
          <h1 class="text-[48px]"> Class 1 is now</h1>
          <p>This is content 1</p>
        </div>
        <div class="py-4 px-6 h-[70vh]">
          <h1 class="text-[48px]"> Class 2 is now</h1>
          <p>This is content 2</p>
        </div>
        <div class="py-4 px-6 h-[70vh]">
          <h1 class="text-[48px]"> Class 3 is now</h1>
          <p>This is content 3</p>
        </div>
        <div class="py-4 px-6 h-[70vh]">
          <h1 class="text-[48px]"> Class 4 is now</h1>
          <p>This is content 4</p>
        </div>
      </div>
  
      <!-- Right Part -->
      <div class="flex-1">
        <!-- Right Part Content -->
        <div class="h-full w-full bg-gray-200">
          <!-- Image container - replace 'imagePath' with your actual image path -->
          <img
            v-if="selectedImageIndex === 1"
            src="/img/about_hero.png"
            alt="Image 1"
            class="object-cover w-full h-full"
          />
          <img
            v-else-if="selectedImageIndex === 2"
            src="/svg/secondscroll.svg"
            alt="Image 2"
            class="object-cover w-full h-full"
          />
          <img
            v-else-if="selectedImageIndex === 3"
            src="/svg/thirdscroll.png"
            alt="Image 3"
            class="object-cover w-full h-full"
          />
          <!-- Add more image rendering logic based on selectedImageIndex -->
          <img
            v-else
            src="/defaultImage.png"
            alt="Default Image"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImageIndex: 1, // Default selected image index
      };
    },
    methods: {
      handleScroll() {
        // Calculate which section is currently in view based on scroll position
        const containerRect = this.$refs.container.getBoundingClientRect();
        const sections = document.querySelectorAll('.flex-1 > div');
        let currentSectionIndex = -1;
  
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= containerRect.bottom && rect.bottom >= containerRect.top) {
            currentSectionIndex = index + 1;
          }
        });
  
        // Update selectedImageIndex based on the current section in view
        switch (currentSectionIndex) {
          case 1:
            this.selectedImageIndex = 1;
            break;
          case 2:
            this.selectedImageIndex = 2;
            break;
          case 3:
            this.selectedImageIndex = 3;
            break;
          case 4:
            this.selectedImageIndex = 4;
            break;
          default:
            // Handle other cases if needed
            break;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling for your component here */
  </style>
  