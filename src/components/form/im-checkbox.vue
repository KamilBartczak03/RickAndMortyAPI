<template>
<div class="checkbox" @click="handleClick">
  <div :class="checkboxBoxClass">
    <img v-if="props.modelValue" src="@/assets/checkbox_done.svg" class="checkbox__box-icon">
  </div>
  <div class="checkbox__label">{{label}}</div>
</div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({label: String, modelValue: Boolean})
const emit = defineEmits(["update:modelValue"])

const checkboxBoxClass = computed(() => props.modelValue ? "checkbox__box--checked" : "checkbox__box")

function handleClick(){
  emit("update:modelValue", !props.modelValue)
}
</script>

<style lang="scss" scoped src="./im-checkbox.scss"></style>