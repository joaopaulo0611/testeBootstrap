let estudante = document.getElementById('estudante')
let bilbiotecario = document.getElementById('biblio')

function redirecionar() {
    if(estudante.checked){
        window.location.href = 'pagina_estudante.html';
    } else if(bilbiotecario.checked){
        window.location.href = 'pagina_bibliotecario.html';
    }else{
        alert("Por favor, selecione uma opção.")
    }
}
function btnSair(){
    window.location.href = 'index.html'
}






