const vm = new Vue({
  el: "#app",
  data: {
    mensagem: "Essa é uma mensagem",
    contador: 0,
    github: {},
  },

  methods: {
    puxarGithub() {
      fetch("https://api.github.com/users/origamid")
      .then(r => r.json())
      .then(r => {
        this.github = r;
      })
    },

    destruir() {
      this.$destroy();
    }
  },

  beforeCreate() {
    console.log(this.mensagem);
  },

  created() {
    this.puxarGithub();
    console.log("Created", this.mensagem);
    console.log("Created", this.$el);
  },

  beforeMount() {
    console.log("Before Mount", this.mensagem);
    console.log("Before Mount", this.$el);
  },

  mounted() {
    console.log("Mounted", this.mensagem);
    console.log("Mounted", this.$el);
  },

  beforeUpdate() {
    console.log("Before Update");
  },

  updated() {
    console.log("updated");
  },
});



const api = new Vue({
  el: "#app1",
  data: {
    github: {}

  },
  methods: {
    puxarGithub() {
      fetch("https://api.github.com/users/origamid")
      .then((resposta) => {
        return resposta.json();
      })
      .then((resposta) => {
        this.github = resposta;
      })
    }
  },

  created(){
    this.puxarGithub();
  }
})
