function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;


    if (login == "admin@admin.com" && senha == "admin"){
        alert('sucesso');
        location.href="/SRC/pages/Sistema_Pedidos.html"
    }else{
        alert('Usuario incorreto!')
    }
}
