const vm = new Vue({
  el: "#app",
  data: {
    contador: 0,
    ativo: true,
    mouse: ""
  },
  methods: {
    handleClick(event) {
      console.log(event.key);
    },

    handleMove(event) {
      this.mouse = event;
    }
  }
})


const api = new Vue({
  el: "#api",
  data: {
    acao: {}
    //empresa: "",
    //valorMercado: "",
    //valorCotaAcao: "",
    //urlImage: "",
  },

  methods: {
    puxarAcao(event){
      const url = event.currentTarget.href
      fetch(url)
      .then(r => r.json())
      .then(r => {
        this.acao = r.profile;
      })
    }
  },
})
