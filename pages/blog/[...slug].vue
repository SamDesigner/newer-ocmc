<!-- <script>
export default {
  async asyncData({ params }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]`;
    const data = useSanityQuery(query);
    const posts = data.data._rawValue;
    return { posts };
  },
};
</script>

<template>
  <main>
    <Navigation />
    <div v-if="posts">
      <h1 class="title" v-text="post.title"></h1>
      <div class="content"></div>
    </div>
  </main>
</template> -->

<template>
  <div class="container">
    <!-- <div v-if="post">
      <h1 class="title" v-text="post.title" />
      <div class="content"></div>
    </div> -->
    <h4><a href="/">← Go back</a></h4>
  </div>
</template>

<script>
const { params } = useContext();
const query = `*[_type == "post" && slug.current == "${params.slug}"][0]`;
const post = await useSanityQuery(query);
console.log(post);
</script>
