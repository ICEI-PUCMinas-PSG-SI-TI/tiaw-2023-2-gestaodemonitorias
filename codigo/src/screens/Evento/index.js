var contadorId = 1;
var avaliacoes = [];

document.getElementById('btnenviar').addEventListener('click', LerDados);

function LerDados() {
    var ambienteElement = document.querySelector('input[name="formAmbiente"]:checked');
    var didaticaElement = document.querySelector('input[name="formdidatica"]:checked');
    var conteudoElement = document.querySelector('input[name="formconteudo"]:checked');
    var geralElement = document.querySelector('input[name="formgeral"]:checked');
    var comentario = document.getElementById('comentario').value;

    if (!ambienteElement || !didaticaElement || !conteudoElement || !geralElement || comentario === '') {
        alert("Por favor, preencha todos os campos de avaliação.");

    }
    else {

        alert(`${SalvarDados(ambienteElement,didaticaElement,conteudoElement,geralElement,comentario)}`);

        contadorId++;
    }

}

function SalvarDados(ambienteElement,didaticaElement,conteudoElement,geralElement,comentario) {
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

    avaliacoes.push(avaliacao);

    var jsonAvaliacao = JSON.stringify(avaliacoes);

    localStorage.setItem(`avaliacao`, jsonAvaliacao);

    return jsonAvaliacao;

}
