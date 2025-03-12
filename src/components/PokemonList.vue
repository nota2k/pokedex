<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  types: String,
  image: String,
  evolution: String
})

</script>

<template>
  <tr v-if="!props.name && !props.type && !props.image && !props.evolution">
    <td colspan="4" class="px-6 py-4 text-center">
      Aucun pokémon
    </td>
  </tr>
  <tr v-else="pokemon in props" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.name }}
    </th>
    <td class="px-6 py-4">
      <span>
        {{props.types.map(type => type.name).join(', ')}}
      </span>
    </td>
    <td class="px-6 py-4">
      <img class="" :src="props.image" :alt="`${props.name} Photo`" />
    </td>
    <td class="px-6 py-4">
      <span v-if="props.evolution.length === 0">
        Aucune
      </span>
      <span v-else v-for="evolution in props.evolution" :key="evolution">
        {{ evolution.name }}
      </span>
    </td>
  </tr>
</template>

<style scoped>
  img{
    max-width: 70px;
  }
</style>
