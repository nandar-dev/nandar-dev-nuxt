<template>
  <section class="home" id="home">
    <div class="info">
      <h4>Hello, I'm</h4>
      <h1>NANDAR</h1>
      <h2>Web Developer</h2>
      <p class="sub-text">
        {{ appConfig.devDescription }}
      </p>
      <button>
        <a target="_blank" href="/pdf/nandar's_resume.pdf" download>Resume</a>
      </button>
    </div>
    <div class="image">
      <!-- <img src="./../assets/images/home-img.svg" alt="Home Image" /> -->

      <LottieAnimation
        v-if="getTheme() === theme.light"
        class="lottie"
        :animation-data="CodingJSON"
        :auto-play="true"
        :loop="true"
        :speed="1" />
      <LottieAnimation
        v-else
        class="lottie"
        :animation-data="CodingDarkJSON"
        :auto-play="true"
        :loop="true"
        :speed="1" />
    </div>
  </section>
  <div class="scroll-down">
    <a href="#about">
      <div class="mouse">
        <div class="roll"></div>
        <div class="rollshadow"></div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import appConfig from "~~/utils/appConfig";
import { LottieAnimation } from "lottie-web-vue";
import CodingJSON from "~~/assets/lottie/coding.json";
import CodingDarkJSON from "~~/assets/lottie/coding-dark.json";
import { getTheme, theme } from "~~/utils/theme";

export default {
  components: {
    LottieAnimation,
  },
  setup() {
    return {
      appConfig,
      CodingJSON,
      CodingDarkJSON,
      getTheme,
      theme,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  padding-top: var(--navbar-height);
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .info {
    flex: 1;
    h4 {
      font-weight: normal;
      font-size: 1.5rem;
      color: var(--text-grey-color);
    }
    h1 {
      font-size: var(--dev-name-home);
      margin-top: -8px !important;
      background: -webkit-linear-gradient(120deg, #7066e2 30%, #eb9bee);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: var(--profession-name-home);
      margin-top: -15px !important;
      color: var(--main-color);
    }

    button {
      margin-top: 20px;
      a {
        color: #fff;
        &:hover {
          color: #fff !important;
        }
      }
    }
  }

  .image {
    flex: 0.5;
    img,
    .lottie {
      width: 100%;
      min-width: 500px;
    }
  }
}

.scroll-down {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
}

.mouse {
  width: 26px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid var(--text-grey-color);
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  .roll {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    margin-left: -2px;
    height: 4px;
    border-radius: var(--base-border-radius);
    background: var(--text-grey-color);
    -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
      alternate;
    animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
    z-index: 2;
  }

  .rollshadow {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    margin-left: -2px;
    height: 4px;
    background: #aaa;
    border-radius: var(--base-border-radius);
    -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
      alternate;
    animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
    animation-delay: 0s;
    -webkit-animation-delay: 80ms;
    animation-delay: 80ms;
    z-index: 1;
  }
}

@-webkit-keyframes mouseScroll {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(14px);
    transform: translateY(14px);
  }
}

@keyframes mouseScroll {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(14px);
    transform: translateY(14px);
  }
}

@media screen and (max-width: 768px) {
  .home {
    height: unset;
    justify-content: start;
    flex-direction: column-reverse;

    .image {
      img,
      .lottie {
        width: 100%;
        min-width: unset;
        max-width: 550px;
      }
    }
  }

  .scroll-down {
    display: none;
  }
}
</style>
