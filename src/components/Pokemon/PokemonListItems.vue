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
  <div v-if="!props.name && !props.type && !props.image && !props.evolution">
    <p colspan="4" class="px-6 py-4 text-center">
      Aucun pokémon
    </p>
  </div>
  <div v-else="pokemon in props" class="card">
    <div class="title-wrapper">
      <h1 class="text-center">{{ props.name }}</h1>
    </div>
    <div class="pokemon-img">
      <img class="" :src="props.image" :alt="`${props.name} Photo`" />
    </div>
    <div class="info-wrapper">
      <h2>Types&nbsp;:</h2>
      <p>{{props.types.map(type => type.name).join(', ')}}</p>
      <h2>Evolutions&nbsp;: </h2>
      <p v-if="props.evolution.length === 0">
        Aucune
      </p>
      <span v-else v-for="evolution in props.evolution" :key="evolution">
        {{ evolution.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.title-wrapper {
  margin: 10px auto 20px auto;
}

h1 {
  font-size: 1.5em;
  font-weight: 600;
  font-weight: 500;
}

h2 {
  font-weight: 600;
  color: rgb(66, 124, 107);
}

.info-wrapper {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap:5px;
}

.pokemon-img {
  height: 130px;
}

.pokemon-img img {
  height: 100%;
  margin: 0 auto;
}
</style>
