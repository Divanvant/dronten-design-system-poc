<script setup lang="ts">
import IconButton from './IconButton.vue'

defineProps<{
  cardTitle: string
  imageUrl: string
  description: string
  mapLink: string
  street: string
  zipCode: string
  city: string
}>()
</script>

<template>
  <div class="dronten-location-card">
    <img :srcset="imageUrl" class="dronten-location-card__image" />
    <div class="dronten-location-card__content">
      <h2>{{ cardTitle }}</h2>
      <p>{{ description }}</p>
      <div class="dronten-location-card__address">
        <a
          :href="mapLink"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Plan uw route op Google Maps naar ${cardTitle}, opent in een nieuw tabblad`"
        ></a>
        <IconButton iconName="map-marker-alt" />
        <address>
          <span class="sr-only">Adress: </span>
          <span>{{ street }}</span> <br />
          {{ zipCode }} {{ city }}
        </address>
      </div>
    </div>
  </div>
</template>

<style src="@dronten/components-css/card/index.scss" />
