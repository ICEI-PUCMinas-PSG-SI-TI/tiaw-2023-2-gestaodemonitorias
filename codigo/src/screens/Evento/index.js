var contadorId = 1;

document.getElementById('btnenviar').addEventListener('click', LerDados);

function LerDados() {
    var ambienteElement = document.querySelector('input[name="formAmbiente"]:checked');
    var didaticaElement = document.querySelector('input[name="formdidatica"]:checked');
    var conteudoElement = document.querySelector('input[name="formconteudo"]:checked');
    var geralElement = document.querySelector('input[name="formgeral"]:checked');
    var comentario = document.getElementById('comentario').value;

    if (!ambienteElement || !didaticaElement || !conteudoElement || !geralElement || comentario === '') {
        alert("Por favor, preencha todos os campos de avaliação.");
    } else {
        SalvarDados(ambienteElement, didaticaElement, conteudoElement, geralElement, comentario);
    }
}

function SalvarDados(ambienteElement, didaticaElement, conteudoElement, geralElement, comentario) {
    var ambienteValue = ambienteElement.value;
    var didaticaValue = didaticaElement.value;
    var conteudoValue = conteudoElement.value;
    var geralValue = geralElement.value;

    var avaliacao = {
        id: contadorId,
        ambiente: ambienteValue,
        didatica: didaticaValue,
        conteudo: conteudoValue,
        geral: geralValue,
        comentario: comentario
    };

    fetch('https://jsonserver--nathanaelsouza.repl.co/avaliacoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(avaliacao),
    })
        .then(response => response.json())
        .then(data => {
            alert("Avaliação salva com sucesso!");
            contadorId++;
            console.log('Avaliação salva com sucesso:', data);
            window.location.href = "/codigo/src/screens/Feed/feed.html";
        })
        .catch(error => {
            console.error('Erro ao salvar a avaliação:', error);
            alert("Erro ao salvar a avaliação. Por favor, tente novamente.");
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const sairBtn = document.getElementById("sairBtn");
    sairBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/codigo/src/screens/Login/login.html";
    });
});