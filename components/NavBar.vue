<template>
  <header>
    <nav>
      <a class="logo" href="#home">Nandar</a>

      <div class="right-link">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#home">Skill</a></li>
          <li><a href="#home">Project</a></li>
          <li><a href="#home">Contect</a></li>
        </ul>

        <div class="theme">
          <Icon
            v-if="getTheme() == theme.dark"
            @click="switchTheme(theme.light)"
            class="light"
            icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
          <Icon
            v-else
            class="dark"
            icon="line-md:moon-alt-loop"
            @click="switchTheme(theme.dark)" />
        </div>

        <div class="socials">
          <a target="_blank" href="https://github.com/nandar-dev/">
            <Icon icon="mdi:github" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/nandar-ghimire-3951b91b1/">
            <Icon icon="ri:linkedin-fill" />
          </a>

          <a target="_blank" href="https://twitter.com/nanda2000dev">
            <Icon icon="mdi:twitter" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { getTheme, theme, switchTheme } from "./../utils/theme";

export default {
  setup() {
    return {
      getTheme,
      theme,
      switchTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(var(--navbar-blur));
  -webkit-backdrop-filter: blur(--navbar-blur);
  background-color: var(--navbar-bg-color);
  box-shadow: 0 0 4px rgb(14 55 54 / 15%);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
  padding: 15px 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: var(--max-width);
  margin: auto;

  .logo {
    font-family: "Oleo Script Swash Caps", cursive;
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--main-color);
  }

  .right-link {
    display: flex;
    align-items: center;
    color: var(--icon-color);
    cursor: pointer;

    ul {
      display: flex;
      gap: 35px;
      padding-right: 2px;
      a {
        font-weight: 500;
        font-size: var(--nav-link-font-size);
        color: black;
        transition: 0.4s;
        &:hover {
          color: var(--link-hover-color);
        }
      }
    }

    .theme {
      display: flex;
      align-items: center;
      margin-top: -3px;
      font-size: var(--nav-icon-size);

      .light {
        color: #fdbd40;
      }

      .dark {
        color: #4d5b98;
      }

      &::after,
      &::before {
        margin: 0 15px;
        width: 1px;
        height: 24px;
        background-color: var(--divider-color);
        content: "";
      }

      // &::before {
      //   margin: 0 13px;
      //   width: 1px;
      //   height: 24px;
      //   background-color: var(--divider-color);
      //   content: "";
      // }
    }

    .socials {
      display: flex;
      gap: 15px;
      align-items: center;
      font-size: var(--nav-icon-size);

      a {
        color: var(--icon-color);
        &:hover {
          color: var(--link-hover-color);
        }
      }
    }
  }
}
</style>
