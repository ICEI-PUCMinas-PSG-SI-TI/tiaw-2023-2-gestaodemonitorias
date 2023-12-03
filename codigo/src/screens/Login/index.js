document.getElementById('entrarBtn').addEventListener('click', function() {
    var loginemail = document.getElementById('email').value;
    var loginsenha = document.getElementById('senha').value;

    fetch('https://jsonserver-puctoria--tiviin.repl.co/cadastros')
        .then(response => response.json())
        .then(data => {
            var usuarioEncontrado = data.find(usuario => usuario.email === loginemail && usuario.senha === loginsenha);
            if (usuarioEncontrado) {
                alert(`Seja bem-vindo ${usuarioEncontrado.nome}. Espero que goste do site!`);
                window.location.href = '../Feed/feed.html';
            } else {
                alert('Credenciais inválidas. Verifique seu nome de usuário e senha. Caso não possua conta, cadastre-se no botão abaixo do login.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar informações de login:', error);
            alert('Erro ao buscar informações de login. Por favor, tente novamente.');
        });
});
