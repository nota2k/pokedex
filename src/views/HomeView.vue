<script setup>
import { ref, computed } from "vue";
import { fetchPokemon } from "../api/pokemon";


</script>

<template>
  <div class="max-w-[80%] shadow-md sm:rounded-lg m-auto text-gray-900 dark:text-white dark:bg-gray-800">
    <h1>Pokedex</h1>
    <button class="fetch-button p-5 bg-red-500 rounded-md" @click="fetchPokemon">Fetch Pokemon</button>

    <!-- Component Filter -->
    <div class="filter p-5 text-lg font-semibold text-left rtl:text-right flex gap-5">
      <input type="text" v-model="search" placeholder="Search for a Pokemon" class="input" />
      <select id="type"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Tous</option>
        <option value="poison">Poison</option>
        <option value="plante">Plante</option>
        <option value="eau">Eau</option>
        <option value="feu">Feu</option>
      </select>
    </div>

    <!-- Component table -->
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Product name
          </th>
          <th scope="col" class="px-6 py-3">
            Color
          </th>
          <th scope="col" class="px-6 py-3">
            Category
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">
            Silver
          </td>
          <td class="px-6 py-4">
            Laptop
          </td>
          <td class="px-6 py-4">
            $2999
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">
            White
          </td>
          <td class="px-6 py-4">
            Laptop PC
          </td>
          <td class="px-6 py-4">
            $1999
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">
            Black
          </td>
          <td class="px-6 py-4">
            Accessories
          </td>
          <td class="px-6 py-4">
            $99
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
  h1 {
    font-size: 2em;
  }
</style>
