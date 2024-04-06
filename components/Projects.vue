<template>
  <section class="projects" id="projects">
    <h1 class="section-title">Projects</h1>
    <div class="list">
      <div v-for="project in appConfig.projects" class="card">
        <img
          v-if="project.screenshots"
          :src="project.screenshots"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'"
          loading="lazy"
          alt="Project Image" />
        <div class="card-content">
          <div class="header">
            <h2 class="card-content-title">{{ project.name }}</h2>
            <div class="links">
              <a v-if="project.gitLink" target="_blank" :href="project.gitLink"
                ><Icon icon="mdi:github"
              /></a>

              <a
                v-if="project.demoLink"
                target="_blank"
                :href="project.demoLink"
                ><Icon icon="ph:link-simple-bold"
              /></a>
            </div>
          </div>
          <p class="card-sub-text">
            {{ project.description }}
          </p>
          <div class="card-tags">
            <span v-for="tech in project.technologies">{{ tech }}</span>
          </div>
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
@mixin socialIcon($gap: 15px) {
  display: flex;
  gap: $gap;
  align-items: center;
  font-size: var(--nav-icon-size);
  a {
    color: var(--icon-color);
  }
}

.projects {
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
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-content-title {
          margin: 5px 0;
        }
        .links {
          @include socialIcon();
        }
      }

      .card-sub-text {
        margin-bottom: 10px;
      }
      .card-tags {
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        column-gap: 10px;
        span {
          background-color: var(--gray-bg-color);
          color: var(--text-grey-color);
          padding: 5px 8px;
          border-radius: 4px;
          font-size: var(--card-tag-text-font-size);
          font-family: "Source Code Pro", monospace;
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .projects {
    .list {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
