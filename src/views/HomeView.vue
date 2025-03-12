<script setup>
import PokemonList from "../components/PokemonList.vue";
import FilterPokemon from "../components/FilterPokemon.vue";
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
    <FilterPokemon @fetch-pokemon="getPokemons"/>
    <!-- Pokemon Liste -->
    <table class="w-full text-xl text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Nom</th>
          <th scope="col" class="px-6 py-3">Types</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3 max-w-[100px]">Evolution</th>
        </tr>
      </thead>
      <tbody>
        <PokemonList v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" :types="pokemon.apiTypes"
          :image="pokemon.image" :evolution="pokemon.apiEvolutions" />
      </tbody>
    </table>
  </div>

</template>

<style scoped>
  h1 {
    font-size: 2em;
  }
</style>
