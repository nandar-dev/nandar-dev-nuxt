<template>
  <section class="articles">
    <NuxtLoadingIndicator :throttle="1000" :duration="10000" />
    <h1 class="section-title">Articles</h1>
    <div v-if="!loading" class="list">
      <div>
        <div v-for="article in store.articles" :key="article.id" class="card">
          <NuxtLink :to="'articles/' + article.id">
            <img
              :src="'https://images.unsplash.com/photo-1713189005053-e38b1b88ac4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'"
              onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'"
              loading="lazy"
              alt="Article Image" />

            <div class="card-content">
              <div class="article-info">
                <div class="read-time">
                  <div class="icon">
                    <Icon icon="mdi:clock-outline" />
                  </div>

                  <p>2 mins read</p>
                </div>
                <span class="card-tag">Programming</span>
              </div>

              <h2 class="card-content-title">{{ article.title }}</h2>

              <p class="card-sub-text">
                {{ article.sub_title }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </section>
</template>

<script lang="ts">
import { useStore } from "~/stores/articles";
import appConfig from "~~/utils/appConfig";

export default {
  async setup() {
    definePageMeta({
      layout: "no-footer",
    });
    const store = useStore();

    const onImageLoad = () => {
      console.log("... on load");
    };
    const state = reactive({
      loading: true,
    });

    const getAritcles = async () => {
      await useFetch(`${appConfig.apiUrl}/api/blog/get`, {
        onResponse({ response }): void {
          store.articles = response._data.data;
        },
      }).finally(() => {
        state.loading = false;
      });
    };

    onBeforeMount(() => {
      getAritcles();
    });

    return { store, onImageLoad, appConfig, ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>
.articles {
  margin-top: var(--section-margin);

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 30px;
  }

  .card {
    padding: var(--base-content-padding);

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 6px;
    }

    .card-content {
      .article-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .read-time {
          margin-top: 5px;
          color: var(--text-soft-grey-color);
          display: flex;
          column-gap: 8px;
          .icon {
            font-size: 1.15rem;
          }
          p {
            margin-top: 1.5px;
            font-size: 0.88rem;
          }
        }

        .card-tag {
          border-radius: 4px;
          background-color: var(--gray-bg-color);
          color: var(--text-grey-color);
          padding: 5px 8px;
          font-size: 0.75rem;
          font-family: "Source Code Pro", monospace;
        }
      }

      .card-content-title {
        margin: 5px 0;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .articles {
    .list {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
