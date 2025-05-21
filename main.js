document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const tabela = document.querySelector('#contact-table tbody');
    const novaLinha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);
    tabela.appendChild(novaLinha);

    document.getElementById('contact-form').reset();
});
