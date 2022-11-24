<script setup>
import { ref, watch, onMounted } from 'vue'
import { sync, paginate, getCategoryOptionsList, getFilteredListByCategory, Storage } from '../composables/api.js'
import Table from './Table.vue'
const OptionsList = ref(),
  selected = ref()

watch(selected, () => {
  getFilteredListByCategory(selected.value)
})

onMounted(async () => {
  await sync()
  paginate(30)
  getCategoryOptionsList()
  getFilteredListByCategory("all")
  selected.value = "all"
})
</script>

<template>
  <select
    class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
    v-model="selected" autofocus>
    <option v-for="Category in Storage.CategoryOptionsList" :key="Category" :value="Category"
      :selected="selected && Category == selected.value">
      {{ Category }}
    </option>
  </select>
<!-- {{Object.keys(Storage.ListByCategory[0])}} -->
  <Table :headers="Storage.ListByCategory[0] && Object.keys(Storage.ListByCategory[0])" :rows="Storage.ListByCategory"/>
  <!-- <Table /> -->
  <br>

  {{ Storage.paginationPagesIndexes }}
  <pre style="width:500px; text-align:left;">
    {{ Storage.ListByCategory }}
  </pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
