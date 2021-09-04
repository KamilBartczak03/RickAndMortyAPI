<template>
<div class="button" @click="handleClickAnimation" ref="button">
  <slot/>
</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const button = ref(null)

function handleClickAnimation(){
  const uuid = () => '_' + Math.random().toString(36).substr(2, 9);
  const id = uuid()
  const popElement = document.createElement('div')
  popElement.classList.add('popElement')
  popElement.classList.add(`popElement_${id}`)
  button.value.append(popElement)
  const appended = document.querySelectorAll(`.popElement_${id}`)
  setTimeout(() => {
    if(appended) appended[0].remove()
  }, 275);
}
</script>

<style lang="scss" scoped src="./im-button.scss"></style>
<style lang="scss" src="./im-button-popElement.scss"></style>