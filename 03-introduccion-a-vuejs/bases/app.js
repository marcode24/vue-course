const app = Vue.createApp({
  // template: `
  //   <h1> Hola Mundo </h1>
  //   <p> {{ true ? 'true' : 'false' }} </p>
  // `

  data() {
    return {
      quote: "I'm Batman",
    }
  },

  methods: {
    changeQuote() {
      // console.log('hola mundo');
      this.quote = 'Superman';
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }

});

app.mount('#myApp');