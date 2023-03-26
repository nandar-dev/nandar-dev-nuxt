<template>
  <section class="container home" id="home">
    <div class="info">
      <h4>Hello, I'm</h4>
      <h1>NANDAR</h1>
      <h2>Web Developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo nihil
        eligendi rem animi illum voluptas, maxime illo veniam tempora?
      </p>
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
  padding-top: calc(var(--navbar-height) + 50px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .info {
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
  }

  img {
    width: 100%;
    min-width: 500px;
  }
}

.mouse {
  width: 26px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #000;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
}

.mouse .roll {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  height: 4px;
  border-radius: 4px;
  background: #000;
  -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
    alternate;
  animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  z-index: 2;
}

.mouse .rollshadow {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  height: 4px;
  background: #aaa;
  border-radius: 4px;
  -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
    alternate;
  animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  animation-delay: 0s;
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
  z-index: 1;
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

.scroll-down {
  position: absolute;
  bottom: 4rem;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
}

.scroll-down a {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--text-color);
}

.scroll-icon {
  font-size: 2rem;
}
</style>
