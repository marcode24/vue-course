<template>
  <h2>{{ customedTitle }}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>

  <!-- <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p> -->

  <div>
    <!-- <button v-on:click="increase()"> +1 </button>
    <button v-on:click="decrease()"> +1 </button> -->
    <button @click="increase()"> +1 </button>
    <button @click="decrease()"> -1 </button>
  </div>

</template>

<script>
export default {
  name: 'Counter', // naming para vue tools
  // props: ['title', 'start'],
  props: {
    title: String,
    // start: Number
    start: { // mas control sobre la prop
      type: Number,
      default: 100,
      validator(value) {
        return value > 100;
      }
      // required: true
    }
  },
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    }
  },
  computed: { // se guarda el proceso en la caché
    squareCounter() {
      return this.counter * this.counter;
    },
    customedTitle() {
      return this.title ?? 'Counter';
    }
  }
}
</script>

<style>

button {
  background: #64BB87;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background: #5aa67b;
  transition: 0.3s ease-in-out;
}

</style>