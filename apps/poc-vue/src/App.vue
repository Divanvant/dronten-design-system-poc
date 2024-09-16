<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import DrontenBanner from './components/design-system-components/DrontenBanner.vue'
</script>

<template>
  <NavbarComponent />
  <div className="container">
    <DrontenBanner
      title="Developer nota:"
      description="Deze website is met Vue gebouwd"
      imageUrl="/favicon.ico"
      bannerType="info"
    />
  </div>
  <RouterView />
  <FooterComponent />
</template>
