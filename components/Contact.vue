<template>
  <section class="container contact" id="contact">
    <h1 class="section-title">Get In Touch</h1>

    <div class="contact-container">
      <form
        class="card"
        action="https://formsubmit.co/5aa9fcc8ff2ba952bdd6ae1c0280ab9a"
        method="POST">
        <h2 class="content-title">Message me</h2>
        <div class="sub-text">
          Please feel free to contact me any time. Will get back to you as soon
          as I can.
        </div>
        <div class="contact-grid">
          <input type="hidden" name="_subject" value="New email for web!" />
          <div class="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              required />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required />
          </div>
          <div class="form-group message">
            <textarea
              name="message"
              class="message"
              placeholder="Your message goes here"></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://nandar.netlify.app/thanks.html" />
          <button type="submit">Send message</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  margin-top: var(--section-margin);
  .contact-container {
    margin: 0 auto;
    // padding: 0 32px;

    form {
      width: 100%;
      max-width: 400px;
      margin: 0 auto 0;
      padding: 24px 32px;
      // border-radius: 10px;

      .content-title {
        font-size: var(--section-title-font-size);
        margin-bottom: 10px;
      }
      .sub-text {
        margin-bottom: 40px;
      }

      .contact-grid {
        display: grid;
        column-gap: 80px;
        row-gap: 24px;
        align-items: end;

        .form-group {
          margin-bottom: 24px;
        }
      }
    }

    .message {
      grid-column: 1 / -1;
    }
  }
}
@media screen and (min-width: 768px) {
  .contact {
    .contact-container {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
      }

      form {
        max-width: 800px;
      }
    }
    button {
      grid-column: 1 / -1;
      justify-self: end;
    }
  }
}
</style>
