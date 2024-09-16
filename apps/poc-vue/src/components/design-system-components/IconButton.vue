<script setup lang="ts">
defineProps<{ iconName: string }>()
</script>

<template>
  <i :class="`dronten-icon-button fas fa-${iconName}`"></i>
</template>

<style src="@dronten/components-css/button/index.scss" />
