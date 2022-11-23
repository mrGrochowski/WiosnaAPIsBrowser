<script setup>
import { ref, onMounted } from 'vue'
import { sync, paginate, Storage } from '../composables/api.js'

const store = ref([])

onMounted(async () => {
  await sync()
  paginate(30)
  store.value = Storage
})
</script>

<template>
  {{ store.paginationPagesIndexes }}
  <pre style="width:500px; text-align:left;">
    {{ store.paginatedList }}
  </pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
