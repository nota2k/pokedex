<script setup>
import PokemonListItems from './PokemonListItems.vue'
import { ref } from 'vue'

const props = defineProps({
  pokemons: {
    type: Array,
    required: true
  },
  types: String,
  image: String,
  evolution: String
})
</script>

<template>
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
      <PokemonListItems v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" :types="pokemon.apiTypes"
        :image="pokemon.image" :evolution="pokemon.apiEvolutions" />
    </tbody>
  </table>
</template>

<style scoped>
  img{
    max-width: 70px;
  }
</style>
