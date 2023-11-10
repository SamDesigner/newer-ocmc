<template>
  <section
    id="body"
    class="md:px-16 px-5 bg-basicGray py-20 text-coolerGray rounded-[4rem]"
  >
    <h1 class="text-3xl my-8">Blog Posts</h1>
    <p>
      I like to write about anything thta I am currently working or something
      new that interests me. If you would like me to write about something or be
      a guest blogger on your blog please reach out to me on Twitter. If you
      would like to subscribe to an RSS feed you can find it here.
    </p>

    <div class="text-center mt-10">
      <nuxt-link
        to="/blog"
        class="border-2 py-3 px-10 border-black mx-auto text-sm hover:border-b-4 hover:border-r-4 transition-all duration-200"
      >
        See More
      </nuxt-link>
    </div>
  </section>
</template>
