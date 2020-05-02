const checkbox = new Vue({
  el: "#teste",
  data: {
      exibir: false
  },

  methods: {
    esconderOutrasOcoes(){
      if(checkbox.checked == true){
            console.log('esconder');
            exibir = true;
      }else{
          exibir = false;
          console.log('mostar');
      }
    }
  }
})
