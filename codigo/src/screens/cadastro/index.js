document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('cadastrarBtn').addEventListener('click', function(event) {
        event.preventDefault();
  
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var perfil = document.querySelector('input[name="perfil"]:checked').value;
        
        var linguagens = [];
        var checkboxes = document.querySelectorAll('input[name="linguagem"]:checked');
        checkboxes.forEach(function(checkbox) {
            linguagens.push(checkbox.value);
        });
  
        var formData = {
            nome: nome,
            email: email,
            senha: senha,
            perfil: perfil,
            linguagens: linguagens
        };
  
        // Enviar os dados para o servidor usando fetch
        fetch('https://jsonserver-puctoria--tiviin.repl.co/cadastros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Cadastro realizado com sucesso:', data);
            alert('Cadastro realizado com sucesso!');
            window.location.replace('../Feed/feed.html');
        })
        .catch(error => {
            console.error('Erro ao cadastrar:', error);
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        });
    });
  
  });
  