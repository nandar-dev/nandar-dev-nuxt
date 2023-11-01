<template>
  <section class="experience" id="experience">
    <h1 class="section-title">Experiences</h1>
    <div class="timeline">
      <div v-for="jobs in appConfig.experience" class="content-card">
        <h5>{{ jobs.from }} - {{ jobs.to }}</h5>
        <h2>
          {{ jobs.companyName }}
          <span class="position">{{ "(" + jobs.position + ")" }}</span>
        </h2>
        <ul class="sub-text">
          <li v-for="resp in jobs.responsibility">
            {{ resp }}
          </li>
        </ul>
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
@mixin cardAfter($height: 100%) {
  content: "";
  position: absolute;
  top: 40px;
  left: -18px;
  height: $height;
  background: linear-gradient(var(--g-sepator-soft-color), var(--g-separator-primary-color), var(--g-separator-secondary-color), var(--g-separator-dark-color));
  width: 2px;
  border-radius: 3px;
}

.experience {
  margin-top: var(--section-margin);

  .timeline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 var(--base-lr-padding);

    .content-card {
      width: 100%;
      max-width: 800px;
      padding: 20px 20px 0 20px;
      border-radius: 8px;
      position: relative;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;

        &::after {
          @include cardAfter(calc(100% - 15%));
        }
      }

      &::before {
        content: "\e04b";
        font-family: "simple-line-icons";
        position: absolute;
        left: -26px;
        height: 20px;
        width: 20px;
        border-radius: 50% 50% 0 0;
        color: var(--main-color);
        font-size: 24px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &::after {
        @include cardAfter();
      }

      h2 {
        color: var(--content-title);
      }
      .position {
        font-weight: normal;
        font-size: 19px;
        font-weight: 600;
      }
      h5 {
        font-weight: 500;
        color: var(--text-grey-color);
      }
      ul {
        li {
          list-style: disc;
          margin-left: var(--base-content-padding);
        }
      }
      &:nth-of-type(1) {
        &:before {
          background-color: var(--bg-color);
          animation: glow 1500ms infinite;
        }
      }
      &:not(:nth-of-type(1)) {
        &:before {
          // filter: drop-shadow(0px 0px 20px var(--icon-glow-color));
        }
      }
    }
  }
}

@keyframes glow {
  50% {
    filter: drop-shadow(0px 0px 15px var(--icon-glow-color));
    background-color: var(--icon-glow-background);
  }
}
</style>
