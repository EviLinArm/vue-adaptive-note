<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Write your text here..."/>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add note</button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="i of 3">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aspernatur blanditiis corporis dolores est excepturi fugit iste laborum odio quae quam recusandae, reprehenderit rerum, sequi veniam veritatis voluptas.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>