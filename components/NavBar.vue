<template>
  <nav>
    <a class="logo" href="#home">Nandar</a>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#home">About</a></li>
      <li><a href="#home">Skill</a></li>
      <li><a href="#home">Contect</a></li>
    </ul>

    <div class="socials">
      <Icon name="uil:github" />

      <a target="_blank" href="https://github.com/nandar-dev/">
        <Icon name="uil:github" />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/nandar-ghimire-3951b91b1/">
        <Icon name="uil:github" />
      </a>

      <a target="_blank" href="https://twitter.com/nanda2000dev">
        <Icon name="uil:github"
      /></a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 15px 30px;
  box-sizing: border-box;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
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

  .socials {
    display: flex;
    gap: 20px;
    align-items: center;
    color: blue;

    &:first-of-type {
      color: red !important;
    }
  }
}
</style>
