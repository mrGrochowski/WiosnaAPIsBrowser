<template>
  <div class="container text-black">
    <table class="table-fixed w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="text-white">
        <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th v-for="colHeader in headers" :key="colHeader" scope="col" class="p-3 text-left">
            {{ colHeader }}
          </th>
<!--           <th class="p-3 text-left" width="110px">Actions</th>
 -->        </tr>

        <!-- repeat ech row to add groups titles <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">Actions</th>
              </tr> -->
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr v-for="row in rows" :key="row.API" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td v-for="cell in row" :key="cell" class=" break-all border-grey-light border hover:bg-gray-100 p-3">{{cell}}</td>
<!--           <td
            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            Delete</td>
 -->        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup>
const props = defineProps({
  headers: { type: Array, default: ["header1", "header2"] },
  rows: { type: Array, default: ["row1", "row2"] },
})
</script>

<style>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}
</style>