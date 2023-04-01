<template>
  <section class="container projects" id="projects">
    <h1 class="section-title">My Projects</h1>
    <div class="list">
      <div v-for="item in 6" class="card">
        <!-- <img src="https://picsum.photos/200/300?random=1" alt="Card Image" /> -->
        <div class="card-content">
          <div class="header">
            <h2 class="content-title">Title</h2>
            <div class="links">
              <a href=""><Icon icon="mdi:github" /></a>

              <a href=""><Icon icon="ph:link-simple-bold" /></a>
            </div>
          </div>
          <p class="sub-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            perspiciatis magni nemo officia, at quibusdam impedit ipsa doloribus
            aperiam?
          </p>
          <div class="card-tags">
            <span>Vue.js</span>
            <span>Typescipt</span>
            <span>Tailwind</span>
            <span>Vue.js</span>
            <span>Typescipt</span>
            <span>Tailwind</span><span>Vue.js</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
    border-radius: 8px;
    background-color: var(--card-bg-color);
    box-shadow: var(--base-box-shadow);
    overflow: hidden;
    padding: 18px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      padding-bottom: 10px;
    }

    .card-content {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-title {
          margin-bottom: 10px;
        }
        .links {
          @include socialIcon();
        }
      }

      .sub-text {
        margin-bottom: 20px;
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
          border-radius: 16px;
          font-size: 0.75rem;
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
