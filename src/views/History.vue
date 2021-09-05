<template>
  <h1 class="page-header">Message history</h1>
  <div class="about" style="padding: 0 300px;">
    <im-accordion>
      <div class="message">
        <div class="message__details">
          <img class="message__details-avatar" src="https://source.unsplash.com/random">
          <div class="message__details-text">
            <span class="message__details-span">Sent to: Rick Sanchez</span>
            <span class="message__details-span">Date: 01.01.2021</span>
            <span class="message__details-span">At: 21:37</span>
          </div>
        </div>
        <div class="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, asperiores. Rem cum hic, incidunt ducimus eum blanditiis praesentium, quibusdam quo, assumenda officia laboriosam eius tenetur exercitationem accusantium cupiditate temporibus itaque.
        </div>
      </div>
    </im-accordion>

    <im-accordion>
      content
    </im-accordion>

    <im-accordion>
      content
    </im-accordion>
  </div>
</template>

<script setup>
import imAccordion from "@/components/ui/im-accordion.vue"
</script>

<style lang="scss" scoped>
  .about{
    margin-top: 40px;
  }
</style>

<style lang="scss" scoped src="@/components/ui/message.scss"></style>