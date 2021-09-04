<template>
  <label class="input">
    <span v-bem:input__title--error="error">{{ label }}</span>
    <input
      type="text"
      v-bem:input__field--error="error"
      placeholder="Enter the title"
      :value="modelValue"
      @input="handleInput"
    />
    <span v-bem:input__error-message--error="error">{{ error }}</span>
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

<style lang="scss" scoped src="./im-input.scss"></style>