
const selects = document.getElementsByClassName('form-select');
const modal = document.querySelector('.modal');
const button = document.querySelector('.botao-adicionar-pedido');
const button_closed = document.querySelector('.btn-fechar');



Array.from(selects).forEach(select => {
  select.addEventListener('change', () => {
    const valor = select.value;

    if (valor === 'novo') {
      select.style.backgroundColor = '#04BF10';
    } else if (valor === 'andamento') {
      select.style.backgroundColor = '#73A2BF';
    } else if (valor === 'finalizado') {
      select.style.backgroundColor = '#F20505';
    } else {
      select.style.backgroundColor = '';
    }
  });
});

button.onclick = function () {
  modal.showModal()
};

button_closed.onclick = function () {
  modal.close()
}