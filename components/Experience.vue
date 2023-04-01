<template>
  <section class="container experience" id="experience">
    <h1 class="section-title">Experiences</h1>
    <div class="timeline">
      <div class="card">
        <div>2010-2012</div>
        <h1>ABC Company</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
        </ul>
      </div>

      <div class="card">
        <div>2010-2012</div>
        <h1>ABC Company</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            deleniti!
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.experience {
  margin-top: var(--section-margin);

  .timeline {
    .card {
      padding: 20px;
      border-radius: 8px;
      border: solid 1px gainsboro;
      position: relative;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;

        &::after {
          content: "";
          position: absolute;
          top: 38px;
          left: -26px;
          height: 80%;
          background: red;
          width: 20px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: -26px;
        height: 20px;
        width: 20px;
        background: grey;
        border-radius: 50%;
      }

      &::after {
        content: "";
        position: absolute;
        top: 38px;
        left: -26px;
        height: 100%;
        background: red;
        width: 20px;
      }
    }
  }

  .card:nth-last-of-type(1) {
    background-color: green;
  }
}

// .name {
//             color: #E74700;
//             &:before {
//               background: #E74700;
//               box-shadow: 0 0 18px lighten(#E74700,24%);
//               animation: 1750ms linear infinite pulse;
//             }
//           }

// @keyframes pulse {
//   0% {
//     box-shadow: 0 0 2px lighten(#E74700,24%);
//   }
//   80% {
//     box-shadow: 0 0 18px lighten(#E74700,24%);
//   }
//   100% {
//     box-shadow: 0 0 2px lighten(#E74700,24%);
//   }
// }
</style>
