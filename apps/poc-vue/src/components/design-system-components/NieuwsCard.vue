<script setup lang="ts">
defineProps<{
  imageUrl: string
  linkUrl: string
  title: string
  description?: string
  dateTime: string
}>()
</script>

<template>
  <div class="dronten-nieuws-card">
    <div class="dronten-nieuws-card__image">
      <img :srcset="imageUrl" alt="" />
    </div>

    <div class="dronten-nieuws-card__content">
      <h3 class="dronten-nieuws-card__title">
        <a :href="linkUrl">{{ title }}</a>
      </h3>

      <time :date-time="Math.floor(new Date(dateTime).getTime() / 1000).toString()">
        <i class="fal fa-clock"></i>
        {{ dateTime }}
      </time>

      <div v-if="description" class="dronten-nieuws-card__excerpt">{{ description }}</div>

      <a class="dronten-nieuws-card__button" :href="linkUrl" tab-index="-1">
        Lees meer
        <i class="fa fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<style src="@dronten/components-css/card/index.scss" />
