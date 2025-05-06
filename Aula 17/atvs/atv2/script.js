fetch('./JSON/data.json')
  .then(response => response.json())
  .then(dados => {
    const listaPessoas = document.getElementById("listaPessoas");

    dados.pessoas.forEach(pessoa => {
      const div = document.createElement('div');

      div.innerHTML = `
        <b>Nome:</b> ${pessoa.nome}<br>
        Idade: ${pessoa.idade}<br>
        CPF: ${pessoa.cpf}<br>
        Telefone: ${pessoa.telefone}
        <hr>
      `;

      listaPessoas.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
