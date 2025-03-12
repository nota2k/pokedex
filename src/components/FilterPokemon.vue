<script setup>
import { ref } from 'vue'

const emit = defineEmits(['fetch-pokemon'])
</script>

<template>
  <h1>Pokedex</h1>
  <button class="fetch-button p-5 bg-red-500 rounded-md" @click="$emit('fetch-pokemon')">Fetch Pokemon</button>

  <!-- Component Filter -->
  <div class="filter p-5 text-lg font-semibold text-left rtl:text-right flex gap-5">
    <input type="text" placeholder="Search for a Pokemon" class="input" />
    <select id="type"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Tous</option>
      <option value="poison">Poison</option>
      <option value="plante">Plante</option>
      <option value="eau">Eau</option>
      <option value="feu">Feu</option>
    </select>
  </div>
</template>

<style scoped>
  img{
    max-width: 70px;
  }
</style>
