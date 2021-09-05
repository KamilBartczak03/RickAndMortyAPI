<template>
  <div id="app_container">
    <im-navbar :routes="routes"></im-navbar>
    <div id="container">
      <router-view/>
    </div>
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
