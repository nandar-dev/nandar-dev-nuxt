<template>
  <section class="container about" id="about">
    <h1>Who am I?</h1>
    <div class="img-content">
      <img src="./../assets/images/nd.png" alt="" />
    </div>

    <p>
      Hello, I'm [Your Name], a passionate and experienced web developer with
      [Number of years] of experience in creating responsive and user-friendly
      websites. My expertise lies in front-end web development, and I specialize
      in using HTML, CSS, and JavaScript to build beautiful and functional
      websites that engage users and meet business objectives. My passion for
      web development began [when/how you got interested in web development].
      <br />
      <br />
      Since then, I've had the opportunity to work on a wide range of projects
      for clients in various industries, from small businesses to large
      corporations. I'm dedicated to staying up-to-date with the latest trends
      and technologies in the field, and I enjoy the challenge of solving
      complex problems and finding innovative solutions. In my free time, I
      enjoy [hobbies or interests related to web development or technology]. I
      believe that a strong work-life balance is essential to maintaining
      creativity and productivity, and I'm always looking for new ways to
      improve my skills and grow as a developer. If you're looking for a skilled
      and reliable web developer who is passionate about creating websites that
      are both beautiful and functional, please feel free to get in touch. I'm
      always excited to hear about new projects and collaborate with like-minded
      individuals.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  h1 {
    text-align: center;
    font-size: var(--section-title-font-size);
    color: var(--section-title-color);
    padding-bottom: 50px;
  }

  .img-content {
    display: flex;
    justify-content: center;
  }
  img {
    width: 300px;
    padding-bottom: 50px;

  }
}
</style>
