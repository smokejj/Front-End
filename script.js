function validaBusca(){
    if(document.querySelector('#inputlupa').value ==""){
            alert('Não pode está vazio ')
            return false;
    }
}

document.querySelector("busca").onSubmit = validaBusca;