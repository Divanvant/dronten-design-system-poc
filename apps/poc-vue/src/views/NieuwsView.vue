<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import NieuwsCard from '../components/design-system-components/NieuwsCard.vue'
import DevNoteCallout from '../components/DevNoteCallout.vue'
import { useNieuwsItems } from '../composables/useNieuwsItems'
import { usePrettyDate } from '../composables/usePrettyDate'

const nieuwsData = ref<any[]>([])
const { nieuwsPosts, fetchNieuwsPosts } = useNieuwsItems()

onMounted(() => {
  fetchNieuwsPosts().then(() => {
    nieuwsData.value = nieuwsPosts.value.data.map(
      // @ts-ignore
      ({ id, title, excerpt, image, portal_url, date_modified }) => ({
        id,
        title,
        description: excerpt,
        imageUrl: image.srcset,
        linkUrl: portal_url,
        dateTime: usePrettyDate(date_modified)
      })
    )
  })
})
</script>
<template>
  <div class="container">
    <h1>Nieuws</h1>

    <DevNoteCallout title="Developer nota:" description="Deze informatie wordt vanuit de OpenPUB bron opgeroepen" />

    <div v-if="nieuwsData && nieuwsData.length">
      <NieuwsCard
        v-for="nieuwsItem in nieuwsData"
        :key="nieuwsItem.id"
        :title="nieuwsItem.title"
        :description="nieuwsItem.description"
        :imageUrl="nieuwsItem.imageUrl"
        :linkUrl="nieuwsItem.linkUrl"
        :dateTime="nieuwsItem.dateTime"
      />
    </div>
  </div>
</template>
