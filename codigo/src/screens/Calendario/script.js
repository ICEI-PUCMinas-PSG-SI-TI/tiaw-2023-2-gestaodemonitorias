const prevButton = document.querySelector(".seta-anterior");
const nextButton = document.querySelector(".seta-proxima");
const dataElement = document.querySelector(".data");
const diasElement = document.querySelector(".dias");
var agendamentos = localStorage.getItem("agendamentos");
agendamentos = JSON.parse(agendamentos);
const tbody = document.querySelector("table tbody");

if (!agendamentos || agendamentos.length == 0) {
  const arrayVazio = [];
  localStorage.setItem("agendamentos", JSON.stringify(arrayVazio));
}
function gerarTabela() {
  agendamentos = localStorage.getItem("agendamentos");
  agendamentos = JSON.parse(agendamentos);
  if (agendamentos.length > 0) {
    tbody.innerHTML = "";
    for (let i = 0; i < agendamentos.length; i++) {
      const agendamento = agendamentos[i];

      const novaLinha = document.createElement("tr");

      const tdNome = document.createElement("td");
      tdNome.textContent = agendamento.nome;

      const tdData = document.createElement("td");
      tdData.textContent = agendamento.data;

      const tdMensagem = document.createElement("td");
      tdMensagem.textContent = agendamento.mensagem;

      const tdAcoes = document.createElement("td");
      console.log(i);
      tdAcoes.innerHTML = '<a onclick="editar(' + i + ')"> Editar </a> <a onclick="excluir(' + i + ')"> Excluir </a>';

      novaLinha.appendChild(tdNome);
      novaLinha.appendChild(tdData);
      novaLinha.appendChild(tdMensagem);

      novaLinha.appendChild(tdAcoes);

      tbody.appendChild(novaLinha);
    }
  } else {
    tbody.innerHTML = "";
  }
}
gerarTabela();
function excluir(i) {
  let agendamentos = localStorage.getItem("agendamentos");
  agendamentos = JSON.parse(agendamentos);
  agendamentos.splice(i, 1);
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  gerarTabela();
  alert("Excluiu");
}

function editar(i){
  let agendamentos = localStorage.getItem("agendamentos");
  agendamentos = JSON.parse(agendamentos);
  console.log(agendamentos[i]);
  document.getElementById("nome").value = agendamentos[i].nome;
  document.getElementById("mensagem").value = agendamentos[i].mensagem;
  document.getElementById("data_input").value = agendamentos[i].data;
  document.getElementById("indice").value = i;
  document.getElementById("myModal").style.display = "block";
   
}


const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let dataAtual = new Date();
let diaSelecionado = null;

function atualizarCalendario() {
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  const dia = dataAtual.getDate();

  dataElement.querySelector("h1").textContent = meses[mes];
  dataElement.querySelector("p").textContent = `${getDiaSemana(
    dataAtual
  )}, ${dia} ${meses[mes]}, ${ano}`;

  const primeiroDiaMes = new Date(ano, mes, 1);
  const ultimoDiaMes = new Date(ano, mes + 1, 0);

  const primeiroDiaSemana = primeiroDiaMes.getDay();
  const ultimoDiaMesDia = ultimoDiaMes.getDate();

  diasElement.innerHTML = "";

  for (let i = 0; i < primeiroDiaSemana; i++) {
    const diaElement = document.createElement("div");
    diaElement.classList.add("dia-mes-anterior");
    diaElement.textContent = ultimoDiaMesDia - (primeiroDiaSemana - i) + 1;
    diasElement.appendChild(diaElement);
  }

  for (let i = 1; i <= ultimoDiaMesDia; i++) {
    const diaElement = document.createElement("div");
    diaElement.textContent = i;
    diaElement.addEventListener("click", () => {
      if (diaSelecionado) {
        diaSelecionado.classList.remove("destacado");
      }
      diaSelecionado = diaElement;
      diaSelecionado.classList.add("destacado");
      labelDia = diaSelecionado.innerHTML + "/" + (mes + 1) + "/" + ano;
      dataSelecionada = new Date(ano, mes + 1, diaSelecionado.innerHTML);
      dataElement.querySelector("p").textContent = `${getDiaSemana(
        dataSelecionada
      )}, ${diaSelecionado.innerHTML} ${meses[mes]}, ${ano}`;

      document.getElementById("myModal").style.display = "block";

      const diaForm = String(dataSelecionada.getDate()).padStart(2, "0");
      const mesForm = String(dataSelecionada.getMonth() + 1).padStart(2, "0");
      const anoForm = dataSelecionada.getFullYear();

      const dataFormatada = `${diaForm}/${mesForm}/${anoForm}`;

      console.log(dataFormatada);

      document.getElementById("data_input").value = dataFormatada;
    });
    diasElement.appendChild(diaElement);
  }
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const data = document.getElementById("data_input").value;
    const indice = document.getElementById("indice").value;

    // Certifique-se de que 'agendamentos' seja um array inicializado corretamente ou recupere-o do localStorage se existir
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    const informacoes = {
      data: data,
      nome: nome,
      mensagem: mensagem,
    };
    if(indice){
      agendamentos[indice] = informacoes;
    }else{
      agendamentos.push(informacoes);
    }

    // Adicione o novo agendamento ao array
    // agendamentos.push(informacoes);

    // Atualize o array no localStorage
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    gerarTabela();

    document.getElementById("nome").value = "";
    document.getElementById("indice").value = "";
    document.getElementById("mensagem").value = "";
    document.getElementById("data_input").value = "";
    document.getElementById("myModal").style.display = "none";

    // // Adicione a nova linha na tabela
    // const tbody = document.querySelector("table tbody");
    // const novaLinha = document.createElement("tr");

    // const tdNome = document.createElement("td");
    // tdNome.textContent = nome;

    // const tdData = document.createElement("td");
    // tdData.textContent = data;

    // const tdMensagem = document.createElement("td");
    // tdMensagem.textContent = mensagem;

    // novaLinha.appendChild(tdNome);
    // novaLinha.appendChild(tdData);
    // novaLinha.appendChild(tdMensagem);

    // tbody.appendChild(novaLinha);
  });

  const diasRestantes = 7 - (diasElement.children.length % 7);
  for (let i = 1; i <= diasRestantes; i++) {
    const diaElement = document.createElement("div");
    diaElement.classList.add("dia-proximo-mes");
    diaElement.textContent = i;
    diasElement.appendChild(diaElement);
  }
}

function getDiaSemana(data) {
  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return diasSemana[data.getDay()];
}

atualizarCalendario();

prevButton.addEventListener("click", () => {
  dataAtual.setMonth(dataAtual.getMonth() - 1);
  atualizarCalendario();
});

nextButton.addEventListener("click", () => {
  console.log(localStorage.getItem("teste"));
  dataAtual.setMonth(dataAtual.getMonth() + 1);
  atualizarCalendario();
});
