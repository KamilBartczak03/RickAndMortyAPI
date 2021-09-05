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

<style lang="scss" scoped>
  .accordion{
    &__head{
      user-select: none;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      color: var(--primary-color);
      transition: ease-in-out 75ms background;
      &:hover{
        background: var(--light-grey);
      }
    }

    &__head-text{
      
    }

    &__head-arrow{
      transform: rotate(180deg);

      &--expanded{
        transform: rotate(0deg);
      }
    }

    &__body{
      height: 0;
      overflow: hidden;
      border-bottom: 2px solid var(--light-grey);
      padding: 0;
      transition: all ease-in-out 200ms;

      &--expanded{
        opacity: none;
        padding: 18px 0;
        height: auto;
      }
    }
  }
</style>