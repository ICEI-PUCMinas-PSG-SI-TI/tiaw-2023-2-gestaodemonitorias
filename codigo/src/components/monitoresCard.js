import { UserPostData } from '../utils/userData.js';

const createMonitoresCard = (monitores) => {
  const card = document.createElement('div');
  card.classList.add('card-monitor');

  const header = document.createElement('div');
  header.classList.add('card-header');
  header.textContent = 'Monitores';

  const body = document.createElement('div');
  body.classList.add('card-body');

  const list = document.createElement('ul');
  list.classList.add('list-group');

  UserPostData.forEach(dadosMonitor => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');

    const divWithImage = document.createElement('div');
    divWithImage.classList.add('monitor-image-container');
    item.appendChild(divWithImage);

    const img = document.createElement('img');
    img.classList.add('monitor-image');
    img.src = dadosMonitor.image;
    divWithImage.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info');

    const nomeMatDiv = document.createElement('div');
    nomeMatDiv.classList.add('nome-mat-div');
    info.appendChild(nomeMatDiv);

    const nome = document.createElement('span');
    nome.textContent = dadosMonitor.monitor.name;
    nomeMatDiv.appendChild(nome);

    const materia = document.createElement('span');
    materia.textContent = `Matéria: ${dadosMonitor.monitor.materia}`;
    nomeMatDiv.appendChild(materia);

    const button = document.createElement('p');
    button.classList.add('ver-btn');
    button.textContent = '+ Ver';
    button.addEventListener('click', () => {
      // window.location.href = `perfil/${monitor.id}`; // Redireciona para o perfil do monitor com base no ID
      console.log(`Redireciona para o perfil do monitor com base no ID ${dadosMonitor.id}`);
      alert(`Redireciona para o perfil do monitor com base no ID ${dadosMonitor.id}`);
    });
    info.appendChild(button);

    item.appendChild(info);
    list.appendChild(item);
  });

  body.appendChild(list);
  card.appendChild(header);
  card.appendChild(body);

  return card;
}

const card = createMonitoresCard(monitores);

const asideMonitores = document.getElementById('monitores');
asideMonitores.appendChild(card);
