alert("Wello Word!");

var titulo = document.querySelector("#titulo");
titulo.textContent = "novo texto";
titulo.style.color="red";

function mostraAlerta(){
    alert("Funciona!");

}
function mostraTexto(texto){
    alert(texto);
}

 mostraTexto("Tung tung");