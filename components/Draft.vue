<script setup lang="ts">
// import Scrollbar from 'smooth-scrollbar';

const { $gsap, $ScrollTrigger } = useNuxtApp();
const tooltip = ref(null);
const secondsection = ref(null);
const lastImg = ref(null);
const imgUrls = ref([
  "/img/employability.png",
  "/img/service.png",
  "/img/staff-supply.png",
  "/img/dcs-care.png",
]);
const mm = $gsap.matchMedia();
const classNameToAdd = "absolute";
const classNameToRemove = "hidden";
const lastClassNameToRemove = "lg:block";
const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    $ScrollTrigger.refresh();
  }, 600);

  ctx.add(() => {
    // placeImg.value.src = "/img/service.png";
    mm.add("(min-width: 1024px)", () => {
      $gsap.to(tooltip.value, {
        opacity: 1,
      });
      $ScrollTrigger.create({
        trigger: secondsection.value,
        pin: tooltip.value,
        // Trigger Scroller
        start: "top center-=250",
        end: "bottom center-=200",
        // markers: true,
      });

      const sections = document.querySelectorAll(".section");

      sections.forEach((section, index) => {
        if (index === 3) {
          $ScrollTrigger.create({
            trigger: section,
            start: "top-=50% center-=250",
            end: "top+=20 center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onLeave: () => {
              // tooltip.value.classList.add(classNameToRemove);
              tooltip.value.classList.remove(lastClassNameToRemove);
              lastImg.value.classList.remove(classNameToRemove);
            },
            onEnterBack: () => {
              lastImg.value.classList.add(classNameToRemove);
              tooltip.value.classList.add(lastClassNameToRemove);
              // tooltip.value.classList.remove(classNameToRemove);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        } else if (index !== 0) {
          $ScrollTrigger.create({
            trigger: section,
            start: "top-=50% center-=250",
            end: "bottom center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              tooltip.value.classList.add(classNameToAdd);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onEnterBack: () => {
              console.log(index);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        } else {
          $ScrollTrigger.create({
            trigger: section,
            start: "top center-=250",
            end: "bottom center-=200",
            // markers: true,
            onEnter: () => {
              // console.log(index);
              tooltip.value.classList.add(classNameToAdd);
              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
            onEnterBack: () => {
              console.log(index);

              $gsap.set(".tooltip-img", {
                attr: { src: imgUrls.value[index] },
              });
            },
          });
        }
      });
    });
  });
});
</script>
<template>
  <div
    ref="secondsection"
    class="px-4 xl:px-0 w-full max-w-[1240px] mx-auto relative"
  >
    <div class="scroller flex w-full pb-[10rem] lg:gap-10">
      <div class="scrollable h-fit w-full flex flex-col items-start mx-auto">
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-36 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
            >
              <p
                class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
              >
                01
              </p>
              <h2
                class="font-medium mt-2 text-[24px] md:text-[32px] leading-[42px] md:leading-[48px]"
              >
                Personal Care Assistance
              </h2>
              <p class="mt-2 leading-[28px]">
                To guarantee your comfort and well-being, our caregivers assist
                with activities of daily living such as washing, dressing,
                grooming and mobility support.
              </p>
            </div>
            <div ref="tooltip" class="max-w-[612px] right-0 top-0">
              <img
                class="lg:hidden tooltip-img w-full"
                src="/img/employability.png"
              />
            </div>
          </div>
        </div>
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-36 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
            >
              <p
                class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
              >
                02
              </p>
              <h2
                class="font-medium text-[24px] mt-2 md:text-[32px] leading-[42px] md:leading-[48px]"
              >
                Medication Management
              </h2>
              <p class="mt-2 leading-[28px]">
                Wana Healthcare & Services sends medication reminders and
                ensures that drugs are taken as recommended, supporting our
                clients health and safety.
              </p>
            </div>
            <img
              class="w-full lg:hidden max-w-[612px]"
              src="/img/service.png"
            />
          </div>
        </div>
        <div class="scrollable1 lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-36 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
            >
              <p
                class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
              >
                03
              </p>
              <h2
                class="font-medium text-[24px] mt-2 md:text-[32px] leading-[42px] md:leading-[48px]"
              >
                Companionship and Social Engagement
              </h2>
              <p class="mt-2 leading-[28px]">
                We provide companionship services to help overcome loneliness
                and isolation by engaging in meaningful conversations and
                activities that improve their mental and emotional well-being.
              </p>
            </div>
            <img
              class="w-full lg:hidden max-w-[612px]"
              src="/img/staff-supply.png"
            />
          </div>
        </div>
        <div class="scrollable1 w-full lg:h-[70vh]">
          <div
            class="section flex flex-col justify-between lg:flex-row lg:items-center py-[80px] md:py-[120px] lg:py-0 w-full"
          >
            <div
              class="flex flex-col w-full mb-10 lg:py-36 lg:mb-0 max-w-[572px] lg:max-w-[420px] xl:max-w-[572px]"
            >
              <p
                class="text-brown font-semibold text-[56px] leading-[72px] md:leading-[80px] md:text-[64px]"
              >
                04
              </p>
              <h2
                class="font-semibold text-[24px] mt-2 md:text-[32px] leading-[42px] md:leading-[48px]"
              >
                Compassionate Caregivers
              </h2>
              <p class="mt-2 leading-[28px]">
                Our team consists of compassionate and experienced caregivers
                who are dedicated to your comfort, safety, and emotional
                well-being.
              </p>
            </div>
            <img
              ref="lastImg"
              class="hidden w-full max-w-[612px] h-fit"
              src="/img/dcs-care.png"
            />
          </div>
        </div>
      </div>

      <img
        ref="tooltip"
        class="tooltip-img hidden lg:block w-full max-w-[612px] h-fit right-0 top-0"
        src="/img/employability.png"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pinned-panel img {
  opacity: 0;
  z-index: 0;
  position: absolute;
  transition: opacity 0.3s ease-in-out, z-index 0.3s ease-in-out;
}

.pinned-panel img.show {
  opacity: 1;
  z-index: 1;
}
</style>
