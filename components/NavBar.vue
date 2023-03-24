<template>
  <nav>
    <a class="logo" href="#home">Nandar</a>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#home">About</a></li>
      <li><a href="#home">Skill</a></li>
      <li><a href="#home">Contect</a></li>
    </ul>

    <div class="right-link">
      <div class="theme">
        <Icon
          v-if="getTheme() == theme.dark"
          @click="switchTheme(theme.light)"
          icon="line-md:moon-alt-to-sunny-outline-loop-transition" />
        <Icon
          v-else
          icon="line-md:moon-alt-loop"
          @click="switchTheme(theme.dark)" />
        {{ getTheme() }}
      </div>

      <div class="socials">
        <a target="_blank" href="https://github.com/nandar-dev/">
          <Icon icon="line-md:github-loop" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/nandar-ghimire-3951b91b1/">
          <Icon icon="line-md:linkedin" />
        </a>

        <a target="_blank" href="https://twitter.com/nanda2000dev">
          <Icon icon="line-md:twitter" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { getTheme, theme, switchTheme } from "./../utils/theme";

export default {
  setup() {
    // let curTheme: string = getTheme();

    // const setTheme = (theme: string) => {
    //   switchTheme(theme);
    //   nextTick(() => {
    //     curTheme = getTheme();
    //   });
    // };

    return {
    //   setTheme,
    //   curTheme,
      getTheme,
      theme,
      switchTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
  padding: 15px 30px;
  box-sizing: border-box;
  backdrop-filter: blur(var(--navbar-blur));
  -webkit-backdrop-filter: blur(--navbar-blur);
  background-color: var(--navbar-bg-color);
  box-shadow: 0 0 4px rgb(14 55 54 / 15%);

  .logo {
    font-family: "Oleo Script Swash Caps", cursive;
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--main-color);
  }

  ul {
    display: flex;
    gap: 35px;
    a {
      font-weight: 500;
      color: black;
      transition: 0.2s;
      &:hover {
        color: var(--link-hover-color);
      }
    }
  }

  .right-link {
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    .theme {
      color: red !important;
      display: flex;
      align-items: center;
    }
    .theme::after {
      margin: 0 15px;
      width: 1px;
      height: 24px;
      background-color: var(--divider-color);
      content: "";
    }

    .socials {
      display: flex;
      gap: 20px;
      align-items: center;
      color: blue;
    }
  }
}
</style>
