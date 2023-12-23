<template>
  <div class="blog-detail">
    <h1 class="content-title">
      Stop using .value every time in Vue.js or Nuxt.js
    </h1>
    <p class="desc">
      I did this before. I used to use ref() on everything because someone said
      to do so in a comment on StackOverflow or GitHub issue, I don’t remember
      the
    </p>

    <div class="info">
      <p>2k views | 5 mins read</p>
      <p>Published 1 month ago</p>
    </div>

    <div class="content">
      <img class="cover-img" src="https://images.unsplash.com/photo-1702957954496-8bba5d73a390?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque
        non, nemo magni fugit perspiciatis omnis sunt corrupti nam sit, hic
        earum? Quae a perspiciatis accusantium aut dicta nulla quas, dolore
        odio! Assumenda dicta dolore eos, sunt ullam eaque, nam recusandae a
        tempore incidunt unde laudantium expedita magni beatae neque dolorum.
        Sequi aliquam facere vel fuga id, ea optio tenetur placeat, dolorum
        maxime veniam excepturi magni temporibus neque hic suscipit pariatur at
        dignissimos deleniti cumque fugit omnis! Laborum illum neque, animi rem
        tenetur sit! Incidunt nihil culpa et voluptas totam cupiditate a iure
        architecto? Laborum ratione tenetur eligendi quibusdam non quod illo
        ipsum. Nihil tempore animi dolor laboriosam, tenetur cumque commodi
        sequi expedita itaque ad suscipit facere? Blanditiis maiores sunt autem
        voluptas porro magni laborum dicta repellendus quibusdam nobis esse iure
        ea qui, neque, natus vitae officia cupiditate ducimus! Rem, explicabo,
        omnis autem ducimus pariatur adipisci reprehenderit veritatis officiis
        quod, aliquam dolores tempora dolore. Nulla totam minus deserunt odio
        accusamus illo assumenda repellat fugiat atque aspernatur libero
        architecto in vel itaque accusantium quaerat alias, eligendi perferendis
        veritatis, magnam excepturi nobis rerum beatae! Fugit tempore error in
        hic reiciendis earum est consequatur pariatur architecto, iste ea
        explicabo quis molestias eos et.
      </p>

      <code>
        <pre>
          body {
          color: yellow;
          font-size: 16px;
          line-height: 1.5;
          }
          </pre
        >
      </code>
    </div>
  </div>
  <div id="container">
            <div id="editor">
            </div>
        </div>
</template>
 

<style lang="scss" scoped>
.blog-detail {
 

  padding: calc(var(--navbar-height) + 50px) 150px 0 150px;

  .desc {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 300;
    color: var(--text-grey-color);
  }

  .info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .content {
    margin-top: 50px;

    .cover-img{
      max-height: 400px;
      width: 100%;
      object-fit: cover;
      border-radius: var(--base-border-radius);
    }
  }


}
</style>
