// Botão de login
document.getElementById('entrarBtn').addEventListener('click', function() {
    var loginemail = document.getElementById('email').value;
    var loginsenha = document.getElementById('senha').value;

    var registrosExistentes = localStorage.getItem('cadastros');
    var registros = [];

    if (registrosExistentes) {
        registros = JSON.parse(registrosExistentes);
    }

    var usuarioEncontrado = false;
    var nomeDoUsuario; 

    registros.forEach(function(registro) {
        if (registro.email === loginemail && registro.senha === loginsenha) {
            usuarioEncontrado = true;
            nomeDoUsuario = registro.nome; 
        }
    });
    if (usuarioEncontrado) {
        alert(`Seja bem-vindo ${nomeDoUsuario}. Espero que goste do site!`);
        window.location.href = 'paginaAdmin.html';
    } else {
        alert('Credenciais inválidas. Verifique seu nome de usuário e senha. Caso não possua conta, cadastre-se no botão abaixo do login.');
    }
});


// Botão de cadastro
document.getElementById('cadastrarBtn').addEventListener('click', function() {
    const cadastroPath = './src/screens/cadastro/cadastro.html';
    window.location.href = cadastroPath;
});

