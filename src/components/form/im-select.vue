<template>
  <label class="label">
    <span v-bem:label__text--error="error">{{ label }}</span>
    <div v-bem:input--expanded="expanded" v-bem:input--error="error" @keypress="expanded = !expanded" tabindex="0">
      <div
        class="input__head"
        @click="expanded = !expanded"
      >
        <span class="input__head-text">
          <b  v-if="modelValue" v-bem:input__head-value--error="error">{{ modelValue.name }}</b>
          <div  v-else-if="placeholder" v-bem:input__head-value--error="error">{{ placeholder }}</div>
        </span>
        <img class="spin" v-bem:input__head-loader--shown="loading" src="@/assets/loading.svg" />
        <img v-bem:input__head-icon--expanded="expanded" src="@/assets/options_arrow.svg" />
      </div>

      <div v-bem:input__options--expanded="expanded" @scroll="handleDynamicScroll">
        <div
          tabindex="0"
          v-if="props.options.length"
          v-for="character in props.options"
          v-bem:input__options-element--bold="
          props.modelValue &&
          props.modelValue.value &&
          props.modelValue.value === character.value"
          @click="handleSelect(character)"
          @keypress="handleSelect(character)"
        >{{ character.name }}</div>
        <span class="input__options-empty" v-else>No data...</span>
      </div>
    </div>
    <div v-bem:label__error-message--error="error">{{ error }}</div>
  </label>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  options: { type: Object },
  loading: { type: Boolean },
  error: { type: String },
  modelValue: { type: Object },
  label: { type: String },
  placeholder: { type: String }
})

const emit = defineEmits(["update:modelValue"])

const handleSelect = (value) => {
  if (
    props.modelValue &&
    props.modelValue.value &&
    props.modelValue.value === value.value
  ) emit("update:modelValue", null)
  else emit("update:modelValue", value)
}

const handleDynamicScroll = (e) => {
  const el = e.target
  if ((el.scrollHeight - el.scrollTop - el.clientHeight) < 25) emit("dynamicScroll")
}

const expanded = ref(false)
</script>

<style lang="scss" scoped src="./im-select.scss"></style>