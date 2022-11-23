<script setup>
import { ref, onMounted } from 'vue'
import { sync, paginate, getCategoryOptionsList,getFilteredListByCategory, Storage } from '../composables/api.js'
//import { sync, paginate, categoryFilter } from '../composables/api.js'

const OptionsList = ref()

onMounted(async () => {
  await sync()
  paginate(30)
  OptionsList.value = getCategoryOptionsList()
  //store.value = Storage
})
</script>

<template>
  {{ Storage.paginationPagesIndexes }}
  <pre style="width:500px; text-align:left;">
    {{OptionsList}}
    {{getFilteredListByCategory("Vehicle")}}
    <!-- {{ Storage.paginatedList }} -->


  </pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
