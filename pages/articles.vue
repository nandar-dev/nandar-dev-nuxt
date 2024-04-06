<template>
  <section class="articles">
    <h1 class="section-title">Articles</h1>
    <div class="list">
      <div v-for="project in appConfig.projects" class="card">
        <img
          v-if="project.screenshots"
          :src="project.screenshots"
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

          <h2 class="card-content-title">{{ project.name }}</h2>

          <p class="card-sub-text">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import appConfig from "~~/utils/appConfig";
export default {
  setup() {
    const onImageLoad = () => {
      console.log("... on load");
    };
    return { onImageLoad, appConfig };
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
      .article-info{
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
