<template>
  <section class="skill">
    <h1 class="section-title">Technologies</h1>

    <div class="summery">
      <div v-for="summery in appConfig.skills.summery" class="item">
        <div class="header">
          <h2 class="content-title">{{ summery.name }}</h2>
          <p class="sub-text">{{ summery.progress }}</p>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: summery.progress }"></div>
        </div>
      </div>
    </div>

    <div class="technology">
      <div class="card">
        <div class="item">
          <h2 class="content-title">Mainly Focus On</h2>
          <div class="technologies">
            <div
              class="sub-card"
              v-for="technology in appConfig.skills.technologies.main">
              <div class="icon">
                <i :class="technology.icon"></i>
              </div>
              <p>{{ technology.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="item">
          <h2 class="content-title">Familiar With</h2>
          <div class="technologies">
            <div
              class="sub-card"
              v-for="technology in appConfig.skills.technologies.famailiar">
              <div class="icon">
                <i :class="technology.icon"></i>
              </div>
              <p>{{ technology.name }}</p>
            </div>
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
    return {
      appConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
$progressBarHeight: 10px;
.skill {
  margin-top: var(--section-margin);

  .summery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 50px;

    .header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }

    .item {
      .progress-bar {
        height: $progressBarHeight;
        background-color: var(--gray-bg-color);
        border-radius: var(--base-border-radius);

        .progress {
          margin-top: 5px;
          height: 100%;
          background-color: var(--main-color);
          border-radius: var(--base-border-radius);
        }
      }
    }
  }

  .technology {
    margin-top: 50px;
    .card {
      padding: var(--base-content-padding);
      display: inline-block;
      width: 100%;

      .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }

      h5 {
        font-weight: 600;
      }

      ul {
        margin-top: 5px;
        li {
          margin-left: var(--base-content-padding);
          list-style: disc;
        }
      }

      .technologies {
        margin-top: 15px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 30px;
        .sub-card {
          text-align: center;
          padding: 8px;
          border-radius: var(--base-border-radius);
          border: solid 1px var(--gray-bg-color);
          color: var(--text-black-color);
          will-change: filter;
          transition: filter 300ms;
          .icon {
            text-align: center;
            font-size: 4rem;
          }
          &:hover{
            filter: drop-shadow(0 0 2em var(--link-hover-color));
          }
        }
      }
    }
    .card:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .skill {
    .summery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
}
</style>
