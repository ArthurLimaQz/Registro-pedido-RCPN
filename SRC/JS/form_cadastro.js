const input_cliente = document.querySelector('#cliente');
const input_pedido = document.querySelector('#pedido');
const input_valor = document.querySelector('#valor');
const input_data = document.querySelector('#data');
const tabela = document.querySelector('#tabela tbody');
const adicionar = document.querySelector('#btn_cadastro');


adicionar.addEventListener ('click', () => {
    const cliente = input_cliente.value.trim();
    const pedido = input_pedido.value.trim();
    const valor = input_valor.value.trim();
    const data = input_data.value.trim();

    if (cliente !== '' && pedido !== '') {

        const novalinha = document.createElement('tr');

        const colunacliente = document.createElement('td');
        const colunapedido = document.createElement('td');
        const colunavalor = document.createElement('td');
        const colunadata = document.createElement('td');


        colunacliente.textContent = cliente;
        colunapedido.textContent = pedido;
        colunavalor.textContent = valor;
        colunadata.textContent = data;

        novalinha.appendChild(colunacliente);
        novalinha.appendChild(colunapedido);
        novalinha.appendChild(colunavalor);
        novalinha.appendChild(colunadata);

        tabela.appendChild(novalinha);

        input_cliente.value = '';
        input_pedido.value = '';
        input_valor.value = '';
        input_data.value = '';
        input_cliente.focus()
    } else {
        alert('Preencha todos os campos!')
    }
})



