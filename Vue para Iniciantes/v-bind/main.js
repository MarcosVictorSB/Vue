const vm = new Vue({
  el: "#app",
  data: {
    link: "https://www.google.com",
    cor: "vermelho",
    comprou: false,
    liberar: "verde",
    naoliberar: "vermelho"
  }
});


const api = new Vue({
  el: "#api",
  data: {
    google: {},
    apple: {},
  },
  methods: {
    fetchGoogle() {
      fetch("https://api.iextrading.com/1.0/stock/googl/quote")
      .then(r => r.json())
      .then(google => {
        this.google = google;
      })
    },

    fetchApple() {
      fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
      .then(r => r.json())
      .then(apple => {
        this.apple = apple;
      })
    },

    puxarDados(){
      this.fetchGoogle();
      this.fetchApple();
    }
  }
})
