<template>
  <h1 v-if="!pokemon"> Espere por favor... </h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonOptions" @selection="checkAnswer"/>
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions';
import PokemonPicture from '@/components/PokemonPicture';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonOptions = await getPokemonOptions();
      const randomIndex = Math.floor(Math.random() * this.pokemonOptions.length);
      this.pokemon = this.pokemonOptions[randomIndex];
    },
    checkAnswer(pokemonId) {
      if(pokemonId === this.pokemon.id) {
        this.message = '¡Correcto!';
      } else {
        this.message = `¡Incorrecto! El pokémon correcto es ${this.pokemon.name}`;
      }
      this.showPokemon = true;
      this.showAnswer = true;
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon  = null;
      this.pokemonOptions = [];
      this.mixPokemonsArray();
    }
  },
  mounted() {
    this.mixPokemonsArray();
  }
}
</script>

<style>

</style>