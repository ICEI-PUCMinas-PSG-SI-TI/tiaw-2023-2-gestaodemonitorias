var registros = [];

var registrosExistentes = localStorage.getItem('cadastros');

if (registrosExistentes) {
    registros = JSON.parse(registrosExistentes);
}

document.getElementById('cadastrarBtn').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var perfil = document.querySelector('input[name="perfil"]:checked').value;
    
    var linguagens = [];
    var checkboxes = document.querySelectorAll('input[name="linguagem"]:checked');
    checkboxes.forEach(function(checkbox) {
        linguagens.push(checkbox.value);
    });

    // Recuperar os registros existentes no localStorage
    var registrosExistentes = localStorage.getItem('cadastros');
    var registros = [];

    if (registrosExistentes) {
        registros = JSON.parse(registrosExistentes);
    }

    var formData = {
        id: registros.length + 1, 
        nome: nome,
        email: email,
        senha: senha,
        perfil: perfil,
        linguagens: linguagens
    };

    registros.push(formData);

    localStorage.setItem('cadastros', JSON.stringify(registros));

    alert(`Seja bem-vindo ${nome}. Espero que goste do site!`);
    window.location.href = 'feed.html';
});
