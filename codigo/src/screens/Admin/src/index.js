document.addEventListener("DOMContentLoaded", function() {
    var userTable = document.getElementById('user-list');

    fetch('https://jsonserver-puctoria--tiviin.repl.co/cadastros')
    .then(response => response.json())
    .then(data => {
        data.forEach(function(registro, index) {
            var row = userTable.insertRow();
            row.insertCell(0).textContent = registro.id; 
            row.insertCell(1).textContent = registro.nome; 
            row.insertCell(2).textContent = registro.email; 
            row.insertCell(3).textContent = registro.perfil; 
            row.insertCell(4).textContent = registro.linguagens; 

            var actionsCell = row.insertCell(5);
            var editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', function() {
                // Lógica de edição do usuário
                var novoNome = prompt('Digite o novo nome:', registro.nome);
                var novoEmail = prompt('Digite o novo email:', registro.email);
                var novoPerfil = prompt('Digite o novo perfil:', registro.perfil);

                // Verificar se o usuário cancelou a edição ou deixou algum campo em branco
                if (novoNome !== null && novoEmail !== null && novoPerfil !== null &&
                    novoNome.trim() !== '' && novoEmail.trim() !== '' && novoPerfil.trim() !== '') {
                    // Atualizar os dados do usuário
                    var dadosAtualizados = {
                        nome: novoNome,
                        email: novoEmail,
                        perfil: novoPerfil
                        // Adicione outros campos que deseja editar
                    };

                    fetch(`https://jsonserver-puctoria--tiviin.repl.co/cadastros/${registro.id}`, {
                        method: 'PUT', // ou 'PATCH' dependendo da lógica do seu servidor
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dadosAtualizados)
                    })
                    .then(response => {
                        if (response.ok) {
                            // Atualizar a tabela com os dados editados
                            registro.nome = novoNome;
                            registro.email = novoEmail;
                            registro.perfil = novoPerfil;

                            row.cells[1].textContent = novoNome; // Atualizar na tabela
                            row.cells[2].textContent = novoEmail; // Atualizar na tabela
                            row.cells[3].textContent = novoPerfil; // Atualizar na tabela

                            alert('Informações do usuário atualizadas com sucesso!');
                        } else {
                            throw new Error('Erro ao atualizar as informações do usuário.');
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao atualizar as informações do usuário:', error);
                        alert('Erro ao atualizar as informações do usuário. Por favor, tente novamente.');
                    });
                } else {
                    alert('Edição cancelada ou campos em branco. Nenhuma alteração realizada.');
                }
            });

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function() {
                fetch(`https://jsonserver-puctoria--tiviin.repl.co/cadastros/${registro.id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        userTable.deleteRow(row.rowIndex);
                        alert('Usuário excluído com sucesso!');
                    } else {
                        throw new Error('Erro ao excluir o usuário.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao excluir o usuário:', error);
                    alert('Erro ao excluir o usuário. Por favor, tente novamente.');
                });
            });


            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
        alert('Erro ao buscar os dados. Por favor, tente novamente.');
    });
});
