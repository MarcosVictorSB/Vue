/*<!-- Crie um botão que troque a orientação da lista, ou seja,
ao invés de 4 colunas, uma única coluna com 4 linhas.

O botão será responsável por trocar para lista e também
responsável por reverter esse processo.
Utilize adição/remoção de classes para atingir este efeito.

A classe column já está criada, basta utilizar ela.
-->*/
const app = new Vue({
  el: "#app",
  data : {
    botao: {
      padding: "20px",
      background: "#84e",
      color: "white",
      borderRadius: "4px",
      margin: "10px",
      flex: "1",
      textAlign: "center",
      cursor: "pointer",
      borderRadius: "5px"
    },
    orientacaoLista: false,
    bgColor: "",

  },

  methods: {
    gerarCor(){
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.bgColor = color;
    }
  }
})

/*
<!-- Crie um gerador de cores, toda vez que o usuário clicar
em cima da lista, os itens trocam de cor.

Gerador de cor:

-->
*/
