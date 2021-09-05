<template>
  <div class="accordion">
    <div class="accordion__head" @click="expanded = !expanded">
      <span class="accordion__head-text">{{title}}</span>
      <img v-bem:accordion__head-arrow--expanded="expanded" src="@/assets/options_arrow.svg">
    </div>
    <div v-bem:accordion__body--expanded="expanded">
      <slot/>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue"
  const expanded = ref(false)
  defineProps({title: String})
</script>

<style lang="scss" scoped src="./im-accordion.scss"></style>