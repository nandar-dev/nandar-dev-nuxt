<template>
  <section class="container home" id="home">
    <div class="info">
      <h4>Hello, I'm</h4>
      <h1>NANDAR</h1>
      <h2>Web Developer</h2>
      <p>
        I am a passionate web developer with a strong focus on delivering high
        quality websites that are visually appealing and user friendly. I enjoy
        taking on new challenges and staying up to date with the latest
        technologies and trends in the industry.
      </p>
      <button><a target="_blank" href="./../assets/pdf/nandar's_resume.pdf">Resume</a></button>
    </div>
    <div class="image">
      <img src="./../assets/images/home-img.svg" alt="Home Image" />
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

<style lang="scss">
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
      font-size: 4.5rem;
      margin-top: -8px !important;
      background: -webkit-linear-gradient(120deg, #7066e2 30%, #eb9bee);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 2.5rem;
      margin-top: -15px !important;
      color: var(--main-color);
    }
    p {
      color: var(--text-grey-color);
    }

    button {
      margin-top: 20px;
      a{
        color: #fff;
        &:hover{
          color: #fff !important;
        }
      }
    }
  }

  .image {
    flex: 0.5;
    img {
      width: 100%;
      min-width: 600px;
    }
  }
}

.scroll-down {
  position: absolute;
  bottom: 4rem;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--text-color);
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

    .image {
      img {
        min-width: unset;
        max-width: 600px;
      }
    }
  }

  .scroll-down {
    display: none;
  }
}
</style>
