const form = document.getElementById('form-agenda');
const nomeInput = document.getElementById('nome-agenda');
const numeroInput = document.getElementById('numero-agenda');
const tabelaContatos = document.querySelector('tbody');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const nome = nomeInput.value;
    const numero = numeroInput.value;

    const newRow = document.createElement('tr');

    const nomeCell = document.createElement('td');
    nomeCell.textContent = nome;
    
    const numeroCell = document.createElement('td');
    numeroCell.textContent = numero;

    const seloCell = document.createElement('td');
    const seloImg = document.createElement('img');
    seloImg.src = './Imagens/Selo.png';
    seloImg.alt = 'Selo de verificado';
    seloCell.appendChild(seloImg);

    newRow.appendChild(nomeCell);
    newRow.appendChild(numeroCell);
    newRow.appendChild(seloCell);

    tabelaContatos.appendChild(newRow);

    nomeInput.value = '';
    numeroInput.value = '';
});