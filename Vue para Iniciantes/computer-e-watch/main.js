const vm = new Vue({
  el: "#app",
  data: {
    preco: 59,
    desconto: 10
  },

  computed:{
    total(){
      return "R$ " + (this.preco - this.desconto);
    }
  }
});


const carros = new Vue({
  el: "#carros",
  data: {
    contador: 0,
    carros: [
      {
        marca: "VW",
        cor: "Azul"
      },
      {
        marca: "Ford",
        cor: "Preto"
      },
      {
        marca: "Tesla",
        cor: "Azul"
      }
    ]
  },
  computed: {
    carrosAzuis() {
      return this.carros.filter(({cor}) => cor === "Azul");
    }
  },
  methods: {
    removerCarro(){
      this.carros.pop();
    }
  },

  watch: {
    contador(valorNovo, valorAntigoo){
      console.log(valorNovo);
      console.log(valorAntigoo);

    }
  }
});


const api = new Vue({
  el: "#api",
  data: {
    cep: "",
    enderenco: {},

  },
  watch: {
    cep(valor){
      if(valor.length === 8){
        fetch(`https://viacep.com.br/ws/${valor}/json/`)
        .then(r => r.json())
        .then(r => {
          this.enderenco = r;
        })
      }
    }
  }
});

/*
  Você possui o nome e sobrenome do usuário em data,
  crie uma propriedade computed que retorne o nome completo

  Utilize a rest API para puxar as capitais dos paises
  Use um campo de select, onde o usuário pode selecionar o país.
  https://restcountries.eu/rest/v2/all

  Com uma função watch, mude a capital de acordo com o país selecionado:

  Ex de campo select:

  <select name="paises" id="paises" v-model="selecionado">
    <option v-for="pais in paises" :value="pais.name">
      {{pais.name}}
    </option>
  </select>
*/
const exer = new Vue({
  el: "#exer",

  data:{
    nome: "Marcos ",
    sobrenome: "Barbosa"
  },

  computed: {
    nomeCompleto(){
      return this.nome + " " + this.sobrenome
    }
  }
})



const novoexer = new Vue({
  el: "#novoexer",
  data:{
    paises: {},
    paisSelecionado: "",
    capital: "",
  },

  methods: {
    puxarPaises(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(r => r.json())
        .then(r => {
          this.paises = r;
        })
    }
  },
  watch: {
    paisSelecionado(valor){
      this.capital = this.paises.find((pais) => pais.name === valor);
    }
  }
})
