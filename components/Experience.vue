<template>
  <section class="container experience" id="experience">
    <h1 class="section-title">Experiences</h1>
    <div class="timeline">
      <div v-for="jobs in appConfig.experience" class="content-card">
        <h5>{{ jobs.from }} - {{ jobs.to }}</h5>
        <h2 class="content-title">{{ jobs.companyName }}</h2>
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
  background: var(--stepper-divider-color);
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
        color: var(--main-color);
        font-size: 24px;
        border-radius: 50%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &::after {
        @include cardAfter();
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
    }
  }

  //   .card:nth-of-type(1) {
  // &:before {
  //   background: #e74700;
  //   box-shadow: 0 0 18px lighten(#e74700, 24%);
  //   animation: 1750ms linear infinite pulse;
  // }
  //   }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 2px lighten(#e74700, 24%);
  }
  80% {
    box-shadow: 0 0 18px lighten(#e74700, 24%);
  }
  100% {
    box-shadow: 0 0 2px lighten(#e74700, 24%);
  }
}
</style>
