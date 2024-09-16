<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import LocationCard from '../components/design-system-components/LocationCard.vue'
import { useLocations } from '../composables/useLocations'

const locationData = ref<any[]>([])
const { locations, fetchLocations } = useLocations()

onMounted(() => {
  fetchLocations().then(() => {
    // @ts-ignore
    locationData.value = locations.value.data.map(({ title, location, general }) => {
      return {
        title,
        description: general.description,
        location,
        imageUrl: location.image.srcset
      }
    })
  })
})
</script>
<template>
  <div class="container">
    <h1>Contact</h1>

    <h2>Locaties</h2>

    <div v-if="locationData && locationData.length" class="locations-wrapper">
      <LocationCard
        v-for="location in locationData"
        :key="location.id"
        :cardTitle="location.title"
        :imageUrl="location.imageUrl"
        :description="location.description"
        :mapLink="location.location.mapLink"
        :street="location.location.street"
        :zipCode="location.location.zipCode"
        :city="location.location.city"
      />
    </div>
  </div>
</template>

<style scoped>
.locations-wrapper {
  max-width: 680px;
}
</style>
