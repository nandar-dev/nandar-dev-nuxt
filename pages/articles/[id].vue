<template>
  <div class="blog-detail">
    <h1 class="content-title">
      {{ article.title }}
    </h1>
    <p class="desc">
      {{ article.sub_title }}
    </p>

    <div class="info">
      <!-- <p>2k views | 5 mins read</p> -->
      <p>5 mins read</p>
      <p>Published 1 month ago</p>
    </div>

    <div class="content">
      <img
        class="cover-img"
        :src="'https://images.unsplash.com/photo-1713189005053-e38b1b88ac4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'"
        onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'"
        loading="lazy"
        alt="Article Image" />
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "~/stores/articles";

export default {
  setup() {
    definePageMeta({
      layout: "no-footer",
    });
    const store = useStore();
    const route = useRoute();

    const state = reactive({
      article: store.$state.viewing_article,
    });


    onBeforeMount(() => {
      store.getArticle(route.params.id);
    });

    return {
      ...toRefs(state),
      store,
    };
  },
  data() {
    return {
      html: `<h1>Testing</h1><p><br></p><pre class="ql-syntax" spellcheck="false">Hello Wold
  </pre>`,
    };
  },
};
</script>

<style lang="scss">
.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;

  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: text;
}

.blog-detail {
  user-select: all;

  padding: calc(var(--navbar-height) + 50px) 150px 0 150px;

  .desc {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 300;
    color: var(--text-grey-color);
  }

  .info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    color: var(--text-black-color);
  }

  .content {
    margin-top: 50px;

    .cover-img {
      max-height: 400px;
      width: 100%;
      object-fit: cover;
      border-radius: var(--base-border-radius);
    }
  }
}
</style>
