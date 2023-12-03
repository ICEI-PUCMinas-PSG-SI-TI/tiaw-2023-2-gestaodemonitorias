var registros = [];

var registrosExistentes = localStorage.getItem('cadastros');

if (registrosExistentes) {
    registros = JSON.parse(registrosExistentes);
}

document.addEventListener("DOMContentLoaded", function() {
    var registrosExistentes = localStorage.getItem('cadastros');
    var registros = [];

    if (registrosExistentes) {
        registros = JSON.parse(registrosExistentes);
    }

    var userTable = document.getElementById('user-list');

    registros.forEach(function(registro, index) {
        var row = userTable.insertRow();
        row.insertCell(0).textContent = index + 1; // ID do usuário
        row.insertCell(1).textContent = registro.nome; // Nome do usuário
        row.insertCell(2).textContent = registro.email; // Email do usuário
        row.insertCell(3).textContent = registro.perfil; // Perfil do usuário

        var actionsCell = row.insertCell(4);
        var editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            // Lógica de edição do usuário
            alert('Implemente a lógica de edição aqui');
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            // Lógica de exclusão do usuário
            alert('Implemente a lógica de exclusão aqui');
        });

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
});

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
    window.location.href = 'paginaAdmin.html';
});


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