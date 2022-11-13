<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Counter title="Salieron"/> -->
  <!-- <Counter v-bind:start="15" /> -->
  <!-- <Counter :start="15" /> -->
  <Counter />
</template>

<script>

import Counter from '@/components/Counter.vue';

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
