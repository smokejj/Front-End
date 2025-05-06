//Funçãopara carregar o arquivo JSON e exibir os objetos
fetch('./JSON/obejcts.json')//realiza uma requisição para buscar o arquivo 'obejcts.json'
.then(Response => Response.json())//quando a resposta chegar, converte o corpo da resposta (JSON) para um objeto Js
.then(data =>{
    //após a conversão, os dados são passados para a função
    const obejctList = document.getElementById('obeject-list'); //Encontra o elemento html com o id 'object-list' onde vamos exibir a lista
    //Itera sobre a array 'obejcts' , executa o código abaixo
    data.objects.forEach(obj => {//para cada objeto no array, executa o código abaixo
        const listItem = document.createElement('li');//cria um novo item na lista
        listItem.textContent = obj;//define o texto do item da lista com o nome do objeto
        obejctList.appendChild(listItem);//adiciona o item de lista
    });
  
})
.catch(error => console.error('erro ao carregar o arquivo JSON:',error));