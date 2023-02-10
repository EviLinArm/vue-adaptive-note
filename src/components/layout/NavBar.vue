<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-bold">Notes</RouterLink>
        <RouterLink to="/stats" class="navbar-item is-size-4 is-bold">Stats</RouterLink>
        <a @click.prevent="showMobileNav = !showMobileNav" ref="navbarBurgerRef" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active' : showMobileNav }">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div ref="navbarMenuRef" class="navbar-menu" :class="{ 'is-active' : showMobileNav }" id="navbarBasicExample">
        <div class="navbar-end">
          <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
          <RouterLink @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)
onClickOutside(navbarMenuRef, () => {
  showMobileNav.value = false
}, {
  ignore: [navbarBurgerRef]
})
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>