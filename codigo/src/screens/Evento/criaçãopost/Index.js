var contadorId = 0;

document.getElementById('btnenviar').addEventListener('click', LerDados);

function LerDados() {
    var materiasCheckboxes = document.querySelectorAll('input[name="form"]:checked');
    var url = document.getElementById('urlimg').value;
    var texto = document.getElementById('texto').value;
    var disponibilidade = document.getElementById('disponibilidade').value;

    if (materiasCheckboxes.length === 0 || texto === '') {
        alert("Por favor, preencha todos os campos de avaliação.");
    } else {
        contadorId++;
        SalvarDados(materiasCheckboxes, texto, url, disponibilidade);
        alert("Dados salvos com sucesso");
    }
}

function SalvarDados(materiasCheckboxes, texto, url, disponibilidade) {
    var materiasvalues = Array.from(materiasCheckboxes).map(checkbox => checkbox.value);
    var urlvalue = url;
    var textovalue = texto;
    var disponibilidadevalue = disponibilidade;

    var strados = {
        id: contadorId,
        url: urlvalue,
        Matérias: materiasvalues,
        disponibilidade: disponibilidadevalue,
        texto: textovalue
    };

    // Utilize a função fetch para enviar os dados para o JSON Server
    fetch('https://jsonserver--nathanaelsouza.repl.co/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(strados),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dados salvos com sucesso:", data);
    })
    .catch(error => {
        console.error('Erro ao salvar os dados:', error);
        alert("Erro ao salvar os dados. Por favor, tente novamente.");
    });
}
