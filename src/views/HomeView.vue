<script setup>
import PokemonList from "../components/Pokemon/PokemonList.vue";
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
    <PokemonList :pokemons="pokemons"/>
  </div>

</template>

<style scoped>
  h1 {
    font-size: 2em;
  }
</style>
