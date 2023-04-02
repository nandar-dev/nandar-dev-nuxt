<template>
  <section class="container education">
    <h1 class="section-title">Education</h1>

    <div class="list">
      <div class="card">
        <div v-for="school in appConfig.education.school" class="item">
          <div class="header">
            <h2 class="content-title">{{ school.name }}</h2>
            <p class="sub-text">{{ school.from }} - {{ school.to }}</p>
          </div>
          <h5 class="sub-text">{{ school.profession }}</h5>
          <ul class="sub-text">
            <li v-for="course in school.courses">
              {{ course }}
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="item">
          <h2 class="content-title">Certificate Course</h2>
          <div class="certificates">
            <template
              v-for="certificate in appConfig.education.certificateCourse">
              <a class="sub-card" target="_blank" :href="certificate.link">
                <div class="icon">
                  <Icon :icon="certificate.icon" />
                </div>
                <p>{{ certificate.name }}</p>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.education {
  margin-top: var(--section-margin);

  .list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    .card {
      padding: var(--base-content-padding);
      display: inline-block;
      width: 100%;

      .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }

      h5 {
        font-weight: 600;
      }

      ul {
        margin-top: 5px;
        li {
          margin-left: var(--base-content-padding);
          list-style: disc;
        }
      }

      .certificates {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 30px;
        .sub-card {
          height: 140px;
          padding: 8px;
          border-radius: var(--base-border-radius);
          border: solid 1px var(--gray-bg-color);
          display: flex;
          flex-direction: column;
          gap: 22px;
          color: var(--text-black-color);

          .icon {
            display: flex;
            justify-content: flex-end;
            font-size: 1.4rem;
          }
        }
      }
    }
    .card:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
