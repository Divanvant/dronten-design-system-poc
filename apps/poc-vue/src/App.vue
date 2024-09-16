<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import DevNoteCallout from './components/DevNoteCallout.vue'
</script>

<template>
  <NavbarComponent />
  <div className="container">
    <DevNoteCallout title="Developer nota:" description="Deze website is met Vue gebouwd" />
  </div>
  <RouterView />
  <FooterComponent />
</template>
