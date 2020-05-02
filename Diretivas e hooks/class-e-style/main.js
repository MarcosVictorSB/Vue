const vm = new Vue({
  el: "#app",
  data: {
    cor: "verde",
    estaAtivo: true,
    elementoVerde: true,
    background: "vermelho",
    bgColor: "blue",
    tamanho: 20,
    corLink: "black",
    estiloBotao: {
      background: "tomato",
      fontSize: "20px",
      color: "#fff"
    }
  },

  methods: {
    gerarCor(){
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.bgColor = color;
    }

  }

});
