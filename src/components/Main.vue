<script setup>
import { ref, onMounted } from 'vue'
import { sync, paginate, categoryFilter, Storage } from '../composables/api.js'
//import { sync, paginate, categoryFilter } from '../composables/api.js'

const store = ref([])

onMounted(async () => {
  await sync()
  paginate(30)
  categoryFilter()
  //store.value = Storage
})
</script>

<template>
  {{ Storage.paginationPagesIndexes }}
  <pre style="width:500px; text-align:left;">
    {{ Storage.paginatedList }}
  </pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
