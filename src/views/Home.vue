<template>
  <form id="new-message-form">
    <h1 class="form-header">Send a new message</h1>
    <im-input v-model="form.state.title" :error="form.error.title" label="Title"/>
    <im-textarea v-model="form.state.message" :error="form.error.message" label="Message"/>
    <im-select
      @dynamicScroll="rimAPI.fetchMoreCharacters()"
      label="Character"
      placeholder="Pick a character"
      v-model="form.state.character"
      :error="form.error.character"
      :loading="rimAPI.loading.value"
      :options="rimAPI.characterList.value"
    />

    <div class="row">
      <im-checkbox v-model="form.state.quickpost" label="I want to use InterGalaxy Quickpost™" />
      <im-button @click.native="form.submit(handleSubmit)">Send</im-button>
    </div>
  </form>
</template>

<script setup>
import useValidator from "@/composition/useValidator.js"
import useRickAndMorty from "@/composition/useRickAndMorty.js"
import messageFormSchema from "@/schemas/messageFormSchema.js"

import imInput from "@/components/form/im-input.vue"
import imTextarea from "@/components/form/im-textarea.vue";
import imSelect from "@/components/form/im-select.vue"
import imCheckbox from "@/components/form/im-checkbox.vue"
import imButton from "@/components/form/im-button.vue"

const rimAPI = new useRickAndMorty()
rimAPI.fetchMoreCharacters()

const form = new useValidator(messageFormSchema)
function handleSubmit(v) {
  console.log("f: handleSubmit")
}
</script>

<style lang="scss" scoped>
#new-message-form {
  max-width: 500px;
  margin: auto;
  padding: 30px 20px;
  height: calc(100% - 90px);
}

.form-header {
  user-select: none;
  font-weight: 300;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 32px;
  color: var(--primary-color);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
}
</style>
