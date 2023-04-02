<template>
  <section class="container about" id="about">
    <h1 class="section-title">Who am I?</h1>
    <div class="img-content">
      <div class="wrapper">
        <img src="./../assets/images/nd.png" alt="" />
      </div>

      <div class="info">
        <h4>
          Name: <span>{{ appConfig.devName }}</span>
        </h4>
        <h4>
          Age: <span>{{ appConfig.age }} </span>
        </h4>
        <h4>
          Location:
          <span>
            <a target="_blank" :href="appConfig.location.link">{{
              appConfig.location.address
            }}</a>
          </span>
        </h4>
        <h4>
          Email:
          <span>
            <a :href="'mailto:' + appConfig.contact.email">{{
              appConfig.contact.email
            }}</a>
          </span>
        </h4>
        <h4>
          Phone:
          <span>
            <a :href="'tel:' + '+959960160802'">{{
              appConfig.contact.phone
            }}</a>
          </span>
        </h4>
      </div>
    </div>

    <p>
      Hello, I'm Nandar, a passionate and experienced web developer with 2 years
      of experience in creating responsive and user-friendly websites. My
      expertise lies in front-end web development, and I specialize in using
      HTML, CSS, and JavaScript to build beautiful and functional websites that
      engage users and meet business objectives.
    </p>

    <div class="socials">
      <a target="_blank" :href="appConfig.social.github">
        <Icon icon="mdi:github" />
      </a>

      <a target="_blank" :href="appConfig.social.linkedin">
        <Icon icon="ri:linkedin-fill" />
      </a>

      <a target="_blank" :href="appConfig.social.twitter">
        <Icon icon="mdi:twitter" />
      </a>

      <a target="_blank" :href="appConfig.social.facebook">
        <Icon icon="mdi:facebook" />
      </a>

      <a target="_blank" :href="appConfig.social.instagram">
        <Icon icon="mdi:instagram" />
      </a>
    </div>
  </section>

  <Education />
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
.about {
  margin-top: var(--section-margin);

  .img-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;

    .info {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      flex-direction: column;
      justify-content: space-between;
      color: var(--text-grey-color);
      a {
        color: var(--text-grey-color);
      }
      h4 {
        font-weight: normal;
      }
    }
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    border-radius: 50%;
    background-color: var(--image-color);
    height: var(--about-img-size);
    width: var(--about-img-size);

    img {
      width: var(--about-img-size);
      height: var(--about-img-size);
      border-radius: 50%;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
    }
    &:hover {
      background-color: transparent;

      img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
  }

  p {
    margin-top: 35px;
    color: var(--text-black-color);
    text-align: center;
  }

  .socials {
    margin-top: 10px;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    font-size: calc(var(--nav-icon-size) + 0.3rem);
    a {
      color: var(--icon-color);
    }
  }
}
</style>
