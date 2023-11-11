<template>
    <div class="counting-section">
      <div class="counting-number">{{ currentNumber }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetNumber: 400,
        currentNumber: 0,
        startCounting: false,
      };
    },
    methods: {
      handleScroll() {
        if (this.startCounting) {
          const targetOffset = this.$el.offsetTop - window.innerHeight;
  
          if (window.pageYOffset > targetOffset) {
            this.startCounting = false;
            this.animateCounting();
          }
        }
      },
      animateCounting() {
        const duration = 3000; // Adjust as needed
        const interval = 10;
        const steps = duration / interval;
        const stepValue = Math.ceil(this.targetNumber / steps);
  
        let currentStep = 0;
  
        const countingInterval = setInterval(() => {
          if (currentStep < steps) {
            this.currentNumber += stepValue;
            currentStep++;
          } else {
            this.currentNumber = this.targetNumber;
            clearInterval(countingInterval);
          }
        }, interval);
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      this.startCounting = true; // Start counting when the component is mounted
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .counting-section {
    /* Add Tailwind CSS classes or custom styles as needed */
  }
  
  .counting-number {
    /* Add Tailwind CSS classes or custom styles as needed */
  }
  </style>
  