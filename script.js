window.onload = function() {
    alert('Bem-vindo ao Portfólio de José Cauã');
};

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('mensagemSucesso').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
