const vm = new Vue({
  el: "#app",
  data: {
    link: "<a href='https://www.origamid.com'>Origamid</a>",
    fruta: "Banana",
    total: 150,
    gasto: 20
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
