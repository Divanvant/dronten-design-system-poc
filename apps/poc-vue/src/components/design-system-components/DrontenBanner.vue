<script setup lang="ts">
defineProps<{ title?: string; imageUrl?: string; description: string; bannerType: string }>()
</script>

<template>
  <div :class="`dronten-banner dronten-banner__${bannerType}`">
    <template v-if="imageUrl">
      <img :src="imageUrl" alt="" />
    </template>
    <template v-if="title && title !== ''">
      <strong>{{ title }}</strong>
    </template>
    {{ description }}
  </div>
</template>

<style src="@dronten/components-css/banner/index.scss" />
