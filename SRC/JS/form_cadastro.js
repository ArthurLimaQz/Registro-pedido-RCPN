class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();
        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        };
        this.listaTabela();
        this.limpar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_pedido = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_data = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arrayProdutos[i].id;
            td_cliente.innerText = this.arrayProdutos[i].nomeProduto;
            td_pedido.innerText = this.arrayProdutos[i].nomePedido;
            td_valor.innerText = this.arrayProdutos[i].nomeValor;
            td_data.innerText = this.arrayProdutos[i].nomeData;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = '/SRC/assets/edit.svg';
            imgEdit.setAttribute("onclick", "produto.deletar('" + JSON.stringify(this.arrayProdutos[i]) + "')");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/SRC/assets/delete.svg'
            imgDelete.setAttribute("onclick", "produto.deletar('" + this.arrayProdutos[i].id + "')");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;

    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('cliente').value;
        produto.nomePedido = document.getElementById('pedido').value;
        produto.nomeValor = document.getElementById('valor').value;
        produto.nomeData = document.getElementById('data').value;
        return produto;
    }


    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += '- informe o nome do Produto \n'
        }
        if (produto.nomePedido == '') {
            msg += '- informe o numero do pedido \n'
        }
        if (produto.nomeData == '') {
            msg += '- informe a data \n'
        }
        if (produto.nomeValor == '') {
            msg += '- informe o Valor \n'
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true
    }

    limpar() {
        document.getElementById('cliente').value = '';
        document.getElementById('pedido').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('data').value = '';
    }

    deletar(id) {
        if (confirm('Deseja realmente deletar o produto do ID' + id)) {
            let tbody = document.getElementById('tbody');

            for (let i = this.arrayProdutos.length - 1; i >= 0; i--) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }

            // 🔄 Reatribuir IDs sequenciais
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                this.arrayProdutos[i].id = i + 1;
            }

            // Atualizar o contador de ID
            this.id = this.arrayProdutos.length + 1;

            // Atualizar a tabela na tela
            this.listaTabela();
        }
    }

    edicao(dados) {
        document.getElementById('cliente').value = dados.produto;
        document.getElementById('pedido').value = dados.produto;
        document.getElementById('valor').value = dados.produto;
        document.getElementById('data').value = dados.produto;
    }



}
var produto = new Produto()