<template>
  <form id="new-message-form">
    <h1 class="page-header">Send a new message</h1>
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
import { reactive } from "vue"
import { useRouter } from "vue-router"

import useValidator from "@/composition/useValidator.js"
import useRickAndMorty from "@/composition/useRickAndMorty.js"
import useLocalStorage from "@/composition/useLocalStorage.js"

import messageFormSchema from "@/schemas/messageFormSchema.js"

import imInput from "@/components/form/im-input.vue"
import imTextarea from "@/components/form/im-textarea.vue";
import imSelect from "@/components/form/im-select.vue"
import imCheckbox from "@/components/form/im-checkbox.vue"
import imButton from "@/components/form/im-button.vue"

const rimAPI = new useRickAndMorty()
const form = new useValidator(messageFormSchema)
const storage = useLocalStorage("messages", reactive([]))
const router = useRouter()

rimAPI.fetchMoreCharacters()

function handleSubmit(formValue) {
  
  const saveMessageInStorage = () => {
    storage.push({
      title: formValue.title,
      character: formValue.character,
      message: formValue.message,
      date: Date.now(),
      quickpost: formValue.quickpost
    })
  }

  saveMessageInStorage()
  router.push("/history?success=true")
}
</script>

<style lang="scss" scoped>
#new-message-form {
  max-width: 500px;
  margin: auto;
  padding: 30px 20px;
  height: calc(100% - 90px);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
}
</style>
