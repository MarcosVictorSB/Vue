const vm = new Vue({
  el: "#app",
  data: {
    logado: true,
  }
})


const app = new Vue({
  el: "#pratica",
  data: {
    estoqueBanana: 7,
    carrinho: 0,
  }
})

const aula = new Vue({
  el: "#aula",
  data:{
    estoqueBanana: 7,
    carrinho: 0,
  },

  methods: {
    adicionarItem(){
      this.carrinho++;
      this.estoqueBanana--;
    },
    removerItem(){
      this.carrinho--;
      this.estoqueBanana++;
    }
  }
})
