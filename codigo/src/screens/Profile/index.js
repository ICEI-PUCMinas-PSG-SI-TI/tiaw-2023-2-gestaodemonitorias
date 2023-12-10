import { PostFeed } from '../../components/post.js';

document.addEventListener('DOMContentLoaded', function() {
  localStorage.clear();
  const urlParams = new URLSearchParams(window.location.search);
  const serializedMonitor = urlParams.get('monitor');

  const sairBtn = document.getElementById("sairBtn");
  sairBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "/codigo/src/screens/Login/login.html";
  });

  
  if (serializedMonitor) {
    try {
      const monitor = JSON.parse(decodeURIComponent(serializedMonitor));
      localStorage.setItem('monitor', JSON.stringify(monitor));
    } catch (error) {
      console.error('Error parsing monitor data:', error);
    }
  } else {
    console.error('Monitor data not found in URL.');
  }
});


const populateHTML = async () => {
  const monitorFromLocalStorage = localStorage.getItem('monitor');
  const profileParse = monitorFromLocalStorage ? JSON.parse(monitorFromLocalStorage) : null;

  const profile = profileParse ? profileParse.monitor : null;

  try {
    document.getElementById('nome').textContent = profile.name || '';
    document.getElementById('curso').textContent = `${profile.materia}` || '';
    document.getElementById('availability').textContent = `${profile.disponibilidade}` || '';
    document.getElementById('email').textContent = `${profile.email}` || '';
    document.getElementById('descricao').textContent = profile.descricao || '';

    if (profileParse.isMonitor) {
      document.getElementById('alunoMonitor').textContent = `Monitor`;
      document.getElementById('alunoMonitor').classList.add('monitor');
      document.getElementById('alunoMonitor').classList.remove('aluno');
    } else {
      document.getElementById('alunoMonitor').textContent = `Aluno`;
      document.getElementById('alunoMonitor').classList.add('aluno');
      document.getElementById('alunoMonitor').classList.remove('monitor');
    }
    

    if (profileParse.image) {
      document.getElementById('profileImage').src = profile.image;
    } else {
      document.getElementById('profileImage').src = 'https://res.cloudinary.com/dognkye6x/image/upload/v1701608994/placeholder_pm716g.png';
    }

    const emailElement = document.getElementById('email');

    if (profile.email) {
      emailElement.textContent = `${profile.email}`;
      emailElement.style.cursor = 'pointer';

      emailElement.addEventListener('click', () => {
        sendEmail();
      });
    }
    renderPosts(profileParse);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', populateHTML);

const sendEmail = async () => {
  const monitorFromLocalStorage = localStorage.getItem('monitor');
  const profile = monitorFromLocalStorage ? JSON.parse(monitorFromLocalStorage) : null;

  const email = profile.email;
  const subject = 'Tenho interesse em agendar uma monitoria!';
  const body = 'Olá, gostaria de agendar uma monitoria com você!';

  const mailTo = `mailto:${email}?subject=${subject}&body=${body}`;

  window.location.href = mailTo;
}

const postElement = document.getElementById('postList');
const renderPosts = (post) => {

  postElement.innerHTML = '';

  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.innerHTML = PostFeed(post);
  postElement.appendChild(newPost);

}

const avaliarPost = (post) => {
  console.log('avaliar post: ', post);
  window.location.href = `../Evento/evento.html`;
};

const handleAvaliarClick = (event) => {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('avaliar')) {
    const postId = clickedElement.dataset.postId; 
    avaliarPost(postId);
  }
};

postElement.addEventListener('click', handleAvaliarClick);