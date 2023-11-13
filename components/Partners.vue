<template>
  <div class="max-w-[1440px] mx-auto">
    <div class="py-[40px] md:py-[80px] lg:px-[64px] space-y-5">
      <p class="text-center telegraf tracking-wide text-lg">
        Recognised Globally For Exceptional Services In Public Procurement
      </p>
      <div class="scrolling-images flex justify-between gap-[40px]">
        <img class="object_fit h-[50px] flex-1" src="svg/relume.svg" />
        <img class="object_fit h-[50px] flex-1" src="svg/black.svg" />
        <img class="object_fit h-[50px] flex-1" src="svg/hst.svg" />
        <img class="object_fit h-[50px] flex-1" src="svg/ws.svg" />
        <img class="object_fit h-[50px] flex-1" src="svg/treasure.svg" />
        <img class="object_fit h-[50px] flex-1" src="svg/crystal.svg" />
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Define the keyframes for the horizontal movement */
@keyframes scroll {
  from {
    transform: translateX(-1500px);
  }
  to {
    transform: translateX(1500px);
  }
}

/* Apply the animation to your images container */
.scrolling-images {
  white-space: nowrap; /* Prevents images from wrapping to the next line */
  overflow: hidden; /* Hides the overflow of images outside the container */
}

/* Apply the animation to each image inside the container */
.scrolling-images img {
  display: inline-block; /* Display images in a line */
  animation: scroll 30s linear infinite; /* Scroll for 5 seconds linearly and repeat infinitely */
  animation-fill-mode: both;
}
.object_fit {
  object-fit: cover;
}
</style>
