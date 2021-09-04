<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo-container">
        <img class="navbar__logo" src="@/assets/logo.png">
      </div>
      <div class="navbar__navigation" v-if="routes">
        <router-link v-for="route in routes" :key="route" :to="route.path" class="navbar__link">
          {{route.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
defineProps({routes: Array})
const route = useRoute()
</script>

<style lang="scss" scoped src="./im-navbar.scss"></style>