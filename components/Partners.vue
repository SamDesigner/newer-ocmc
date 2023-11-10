<template>
    <div class="max-w-[1440px] mx-auto">
        <div class="py-[40px] md:py-[80px] lg:px-[64px]">
           <div class="scrolling-images">
                <img class="fit_cover" src="img/companyone.png" />
                <img class="fit_cover" src="img/company2.png" />
                <img class="fit_cover" src="img/company3.png" />
                <img class="fit_cover" src="img/company4.png" />
                <img class="fit_cover" src="img/company5.png" />
                <img class="fit_cover" src="img/company6.png" />
                <img class="fit_cover" src="img/company7.png" />
           </div> 
        </div>
    </div>
</template>
<style scoped>
/* Define the keyframes for the horizontal movement */
@keyframes scroll {
  from{
    transform: translateX(-1500px);
  }
  100% {
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
    animation: scroll 10s linear infinite; /* Scroll for 5 seconds linearly and repeat infinitely */
    animation-fill-mode: both;
    }
    .object_fit{
        object-fit:cover
    }
</style>