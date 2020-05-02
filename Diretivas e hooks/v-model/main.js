const vm = new Vue({
  el: "#app",
  data: {
    nome: "",
    mensagem: "",
    email: "marcosvictorsb@gmail.com",
    receberEmail: "",
    ano: "",
  }
});


const vm1 = new Vue({
  el: "#app1",
  data: {
    cor: "",
  }
});


const vm2 = new Vue({
  el: "#app2",
  data: {
    fruta: "",
  }
});


const vm3 = new Vue({
  el: "#app3",
  data: {
    mensagem: "",
    total: "",
    email: "",
  }
});

/*
<!--
  1 - Crie um criador de botões.

  O usuário poderá definir:
  <!--
  1 - Crie um criador de botões.

  O usuário poderá definir:
  width,
  height,
  font-size,
  text-align,
  font-family,
  background,
  color,
  border-radius,

  As escolhas serão feitas em campos de
  formulário. Cada escolha deverá ser
  refletida em um elemento (o botão).
*/

const exer1 = new Vue({
  el: "#exer1",
  data: {
    btn: {
      background: "",
      width: "0px",
      height: "0px",
      fontSize: "",
      fontFamily: "monospace",
      textAlign: "",
      color: "",
      borderRadius: "",
    }
  }
})
/*

  2 - Crie um formulário com, nome, email, telefone e mensagem.
  Ao clicar em enviar, as informações preenchidas no formulário
  devem aparecer abaixo do mesmo. (previna o comportamento padrão do botão enviar)

 -->*/


 const form = new Vue({
   el: "#form",
   data: {
     nome: "",
     email: "",
     telefone: "",
     mensagem: "",
     resultado: {}
   },

   methods: {
     enviarFormulario(){
       this.resultado = {
         nome: this.nome,
         email: this.email,
         telefone: this.telefone,
         mensagem: this.mensagem
       }
     }
   }
 })
