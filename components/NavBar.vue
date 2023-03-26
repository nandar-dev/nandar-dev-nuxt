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
      <div class="menu" @click="showMenu()">
        <Icon
          v-if="!panelVisible"
          icon="line-md:close-to-menu-alt-transition" />
        <Icon v-else icon="line-md:menu-to-close-alt-transition" />
      </div>
    </nav>
  </header>

  <transition-slide>
    <div v-if="panelVisible" class="menu-panel">
      <div class="menu-content">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#home">Skill</a></li>
          <li><a href="#home">Project</a></li>
          <li><a href="#home">Contect</a></li>
          <li class="preference">
            <h4>Preference</h4>

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
          </li>
        </ul>

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
    </div>
  </transition-slide>
</template>

<script lang="ts">
import { getTheme, theme, switchTheme } from "./../utils/theme";
import { TransitionSlide } from "@morev/vue-transitions";

export default {
  components: { TransitionSlide },
  setup() {
    var panelVisible = ref(false);

    const showMenu = () => {
      panelVisible.value = !panelVisible.value;
    };

    return {
      getTheme,
      theme,
      switchTheme,
      panelVisible,
      showMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin ul() {
  display: flex;
  gap: 35px;
  padding-right: 2px;
  a {
    font-weight: 500;
    font-size: var(--nav-link-font-size);
    color: var(--navbar-link-color);
    transition: var(--base-transaction);
    &:hover {
      color: var(--link-hover-color);
    }
  }
}

@mixin socialIcon($gap: 15px) {
  display: flex;
  gap: $gap;
  align-items: center;
  font-size: var(--nav-icon-size);
  a {
    transition: var(--base-transaction);
    color: var(--icon-color);
    &:hover {
      color: var(--link-hover-color);
    }
  }
}

@mixin theme() {
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
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(var(--navbar-blur));
  -webkit-backdrop-filter: blur(--navbar-blur);
  background-color: var(--navbar-bg-color);
  box-shadow: 0 0 4px rgb(14 55 54 / 15%);

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
        @include ul();
      }

      .theme {
        @include theme();
      }

      .socials {
        @include socialIcon();
      }
    }

    .menu {
      font-size: var(--nav-icon-size);
      color: var(--icon-color);
      margin: auto 0;
      margin-top: 2px;
      display: none;
      cursor: pointer;
    }
  }
}

.menu-panel {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: var(--navbar-height);
  z-index: 100;
  background-color: var(--menu-bg-color);
  backdrop-filter: blur(var(--menu-blur));
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .menu-content {
    border-top: solid 1px var(--divider-color);

    width: 100%;
    background: var(--menu-panel-bg-color);

    ul {
      @include ul();
      flex-direction: column;
      padding: 20px;
      text-align: center;
      li {
        width: 200px;
        margin: auto;
        border-bottom: solid 1px rgb(209, 207, 207);
        text-align: left;
      }

      .preference {
        display: flex;
        justify-content: space-between;

        h4 {
          font-weight: 500;
          font-size: var(--nav-link-font-size);
          color: var(--navbar-link-color);
        }

        .theme {
          @include theme();

          &::after,
          &::before {
            margin: 0;
            width: 0;
            content: "";
          }
        }
      }
    }

    .socials {
      @include socialIcon(50px);
      padding: 15px;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    box-shadow: none;
  }
  .right-link {
    display: none !important;
  }

  .menu,
  .menu-panel {
    display: block !important;
  }
}
</style>
