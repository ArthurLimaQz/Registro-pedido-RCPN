const login_usuario = 'admin@admin.com';
const senha_usuario = 'admin'


function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;


    if (login == login_usuario && senha == senha_usuario){
        alert('sucesso');
        location.href="/SRC/pages/Sistema_Pedidos.html"
    }else{
        alert('Usuario incorreto!')
    }
}
