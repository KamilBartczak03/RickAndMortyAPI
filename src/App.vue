<template>
  <div id="app_container">
    <im-navbar :routes="routes"></im-navbar>
    <router-view/>
  </div>
</template>

<script setup>
import imNavbar from "@/components/ui/im-navbar.vue"
import { reactive } from "@vue/reactivity";
const routes = reactive([
  {name: "New message", path: '/'},
  {name: "History",     path: "/history"}
])
</script>

<style lang="scss" src="@/assets/global.scss"></style>

<style lang="scss" scoped>
  #app_container{
    height: 100vh;
    width: 100%;
  }
</style>
