<template>
  <label v-bem:input--error="error">
    <span v-bem:input__title--error="error">{{ label }}</span>
    <textarea
      v-bem:input__field--error="error"
      placeholder="Enter the title"
      :value="modelValue"
      @input="handleInput"
    ></textarea>
    <span v-bem:input__error-message--error="error">{{error}}</span>
  </label>
</template>

<script setup>
defineProps({
  error: { type: String },
  modelValue: { type: String },
  label: { type: String }
})

const emit = defineEmits(["update:modelValue"])
const handleInput = (e) => emit("update:modelValue", e.target.value)
</script>

<style lang="scss" scoped src="./im-textarea.scss"></style>