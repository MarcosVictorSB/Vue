const vm = new Vue({
    el: "#app",
    data: {
      produtos: [],
      produto: false,
      carrinho: [],
    },

    filters: {
      numeroPreco(valor) {
        return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
      }
    },
    computed: {
      carrinhoTotal(){
        let total = 0
        if(this.carrinho.length){
          this.carrinho.forEach(item => {
            total += item.preco;
          });

        }
        return total;
      }
    },

    methods: {
      fecthProdutos(){
        fetch("./api/produtos.json")
          .then(r => r.json())
          .then(r => {
            this.produtos = r
        })
      },

      fecthProduto(id){
        fetch(`./api/produtos/${id}/dados.json`)
          .then(r => r.json())
          .then(r => {
            this.produto = r;
          })
        },

        fechar_modal({target, currentTarget}){
            if(target === currentTarget) this.produto = false;
        },

        abrirModal(id){
          this.fecthProduto(id);
          window.scrollTo({
            top:0,
            behavior: "smooth"
          })
        },

        adicionarItem(){
          this.produto.estoque--;
          const {id, nome, preco } = this.produto;
          this.carrinho.push({id, nome, preco});
        },

        removerItem(index){
          this.carrinho.splice(index, 1)
        },
    },

    created() {
      this.fecthProdutos();
    }


})
