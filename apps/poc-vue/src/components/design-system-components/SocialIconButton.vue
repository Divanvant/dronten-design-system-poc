<script setup lang="ts">
defineProps<{
  iconName: string
  link: string
}>()
</script>

<template>
  <a :href="link" target="_blank" rel="noreferrer">
    <i :class="`dronten-social-icon fab fa-${iconName}`"></i>
    <span class="sr-only">{{ `${iconName.split('-')[0]} van Gemeente Dronten, opent in nieuw tabblad` }} </span>
  </a>
</template>

<style src="@dronten/components-css/button/index.scss" />
