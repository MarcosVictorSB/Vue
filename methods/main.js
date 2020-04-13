const vm = new Vue({
  el: "#app",
  data: {
    total: 0,
    instrumento: "Qual instrumento ?"
  },
  methods: {
    incrementar() {
      this.total++;
    },
    diminuir(){
      this.total--;
    },
    mudarNome(instrumento){
      this.instrumento = instrumento
    }
  }
});

// https://cloud.iexapis.com/stable/stock/aapl/quote?token=COLAR_TOKEN_AQUI

const api = new Vue({
  el: "#api",
  data: {
    acoes:{}
  },
  methods: {
    puxarAcoes(){
      fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=COLAR_TOKEN_AQUI")
      .then(resposne => resposne.json())
      .then(json => {
        this.acoes = json;
      })
    }
  }
})
