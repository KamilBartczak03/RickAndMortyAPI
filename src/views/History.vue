<template>
  <h1 class="page-header success-header" v-if="messageSuccess">
    <span>Message sent successfully</span>
    <img class="success-header__icon" src="@/assets/success-done.svg">
  </h1>
  <h1 class="page-header">Message history</h1>
  <div class="about" style="padding: 0 300px;">
    <im-accordion v-if="messages.length" v-for="(message, i) in messages" :message="'msg_'+i" :title="message.title">
      <div class="message">
        <div class="message__details">
          <img class="message__details-avatar" :src="message.character.avatar" />
          <div class="message__details-text">
            <span class="message__details-span">Sent to: {{message.character.name}}</span>
            <span class="message__details-span">Date: {{parseDate(message.date)}}</span>
            <span class="message__details-span">At: {{parseTime(message.date)}}</span>
          </div>
          <div class="message__quickpost">
            <img class="message__quickpost-icon" src="@/assets/success-done.svg">
            <span>Using Quickpost™</span>
          </div>
        </div>
        <div class="message__text">{{message.message}}</div>
      </div>
    </im-accordion>
    <span class="about__no-data" v-else>No messages :(</span>
  </div>
</template>

<script setup>
import imAccordion from "@/components/ui/im-accordion.vue"
import useLocalStorage from "@/composition/useLocalStorage";
import { computed, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const messages = useLocalStorage("messages", reactive([]))
const messageSuccess = Boolean(route.query.success)
router.replace({query: null})

const parseDate = (date) => new Date(date).toLocaleDateString()
const parseTime = (date) => new Date(date).toLocaleTimeString()

</script>

<style lang="scss" scoped>
.about {
  margin-top: 40px;

  &__no-data{
    color: var(--light-grey);
    text-align: center;
    display: block;
  }
}

.success-header{
  color: var(--success-green);

  &__icon{
    margin-left: 7px;
  }
}
</style>
<style lang="scss" scoped src="@/components/ui/message.scss">
</style>