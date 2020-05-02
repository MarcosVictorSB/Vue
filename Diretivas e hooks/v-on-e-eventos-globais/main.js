const vm = new Vue({
  el: "#app",
  data: {
    totalScroll: 0,
  },

  methods: {
    handleScroll() {
      this.totalScroll = window.scrollY;
      console.log(this.totalScroll);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  }

});
