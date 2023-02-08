<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-bold">Adaptive note</RouterLink>
      </div>
      <div class="navbar-end">
        <RouterLink to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
        <RouterLink to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
      </div>
    </div>
  </nav>
</template>