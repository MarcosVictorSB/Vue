const vm = new Vue({
  el: "#app",
  data: {
    frutas: ["Banana", "Uva", "Laranja"],
    lista: ["Item 1", "Item 2", "Item 3"],
    estados: {
      sp: {
        populacao: "45 milhões",
        nome: "São Paulo"
      },

      mg: {
        populacao: "21 milhões",
        nome: "Minas Gerais"
      },

      rj: {
        populacao: "17 milhões",
        nome: "Rio de Janeiro"
      }
    }
  },
  methods: {
    removerItem() {
      this.lista.pop();
    },

    modificarItem() {
      // this.lista[0] = "banana";
      this.$set(this.lista, 0, "Banana");
    }
  }
})


const api = new Vue({
  el: "#apiCep",
  data:{
    local: {}

  },

  methods: {
    puxarCep() {
      fetch("https://viacep.com.br/ws/04538133/json/")
      .then(r => r.json())
      .then(r => {
          this.local = r
      })
    }
  }
})

const apiCursos = new Vue({
  el: "#cursos",
  data: {
    cursos: {}
  },

  methods: {
    puxarCursos(){
      fetch("./cursos.json")
      .then(r => r.json())
      .then( r => {
        this.cursos = r
      })
    }
  }
})
