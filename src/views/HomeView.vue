<script setup>
import PokemonList from "../components/PokemonList.vue";
import { ref, computed } from "vue";
import { fetchPokemon } from "../api/pokemon";

const pokemons = ref([]);

function getPokemons() {
  fetchPokemon().then((data) => {
    pokemons.value = data;
  });
}

</script>

<template>
  <div class="max-w-[80%] shadow-md sm:rounded-lg m-auto text-gray-900 dark:text-white dark:bg-gray-800">
    <h1>Pokedex</h1>
    <button class="fetch-button p-5 bg-red-500 rounded-md" @click="getPokemons">Fetch Pokemon</button>

    <!-- Component Filter -->
    <div class="filter p-5 text-lg font-semibold text-left rtl:text-right flex gap-5">
      <input type="text"  placeholder="Search for a Pokemon" class="input" />
      <select id="type"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Tous</option>
        <option value="poison">Poison</option>
        <option value="plante">Plante</option>
        <option value="eau">Eau</option>
        <option value="feu">Feu</option>
      </select>
    </div>

    <!-- Pokemon Liste -->
    <table class="w-full text-xl text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Nom</th>
          <th scope="col" class="px-6 py-3">Types</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">Evolution</th>
        </tr>
      </thead>
      <tbody>
        <PokemonList v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        :name="pokemon.name" 
        :types="pokemon.apiTypes"
        :image="pokemon.image" 
        :evolution="pokemon.apiEvolutions" />
      </tbody>
    </table>
  </div>

</template>

<style scoped>
  h1 {
    font-size: 2em;
  }
</style>
