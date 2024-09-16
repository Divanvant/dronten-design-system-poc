<script setup lang="ts">
defineProps<{
  title?: string
  description: string
}>()
</script>

<template>
  <div class="dev-note-callout">
    <img src="/favicon.ico" alt="" />
    <template v-if="title && title !== ''">
      <strong>{{ title }}</strong>
    </template>
    {{ description }}
  </div>
</template>

<style scoped>
.dev-note-callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #2981e4;
  background-color: #2981e420;
  border-left: 0.25rem solid #2981e4;
  display: flex;
  align-items: center;

  img {
    margin-inline-end: 0.75rem;
  }

  strong {
    margin-inline-end: 0.25rem;
  }
}
</style>
