import { PostFeed } from '../../components/post.js';

const postElement = document.querySelector('#postList');
const privateMessageBtn = document.querySelector('#privateMessage');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado com sucesso!');

  const sairBtn = document.getElementById("sairBtn");
  sairBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/codigo/src/screens/Login/login.html";
  });

  const user = JSON.parse(localStorage.getItem('usuarioLogado'));
  cardContent(user);

  fetch('https://my-json-server.typicode.com/dancosta-fed/mockjsonserver/UserData')
    .then(response => response.json())
    .then(posts => {
      saveToLocalStorage(posts);
      renderPosts();
    })
    .catch(error => {
      console.error('Erro ao fazer o fetch dos dados: ', error);
    });

  renderPosts();
});


const renderPosts = () => {
  const posts = getPostFromLocalStorage();

  postElement.innerHTML = '';

  posts.forEach(post => {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = PostFeed(post);
    postElement.appendChild(newPost);

    onHandleNameClick();
  });
}

postElement.addEventListener('click', function(event) {
  const posts = getPostFromLocalStorage();
  if (event.target.classList.contains('deletePost')) {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");

    if (confirmDelete) {
      const post = event.target;
      const postId = post.dataset.postId;
      deletePost(posts, postId);
    }
  }
});

const cardContent = (userData) => {
  const imageUrl = "https://res.cloudinary.com/dognkye6x/image/upload/v1701608994/placeholder_pm716g.png";
  const image = userData.image ? userData.image : imageUrl;

  // Update HTML elements with the retrieved data
  document.getElementById("userNameCard").innerText = userData.nome;
  document.getElementById("status").innerText = userData.perfil;
  document.getElementById("profileImageCard").src = image;
}

const saveToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const getPostFromLocalStorage = () => {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
};

const deletePost = (posts, postId) => {
  const indexToDelete = posts.findIndex(post => post.id === Number(postId));

  if (indexToDelete !== -1) {
    posts.splice(indexToDelete, 1);
    saveToLocalStorage(posts);

    console.log('Post deletado com sucesso!');
  } else {
    console.log('Post não encontrado para exclusão.');
  }

  renderPosts();
};

const avaliarPost = (posts, postId) => {
  const indexToAvaliar = posts.findIndex(post => post.id === Number(postId));

  if (indexToAvaliar !== -1) {
    const postToAgendar = posts[indexToAvaliar];
    const postEmail = postToAgendar.monitor.email;

    window.location.href = `../Evento/evento.html`;

  } else {
    console.error('Algo aconteceu de errado. Não foi possível avaliar o evento.');
  }

  renderPosts();
};

document.addEventListener('input', function(event) {
  const posts = getPostFromLocalStorage();
  const searchValue = event.target.value.toLowerCase();

  const filteredPosts = posts.filter(post => {
    const postText = post.text.toLowerCase();
    const postMonitorName = post.monitor.name.toLowerCase();

    return postText.includes(searchValue) || postMonitorName.includes(searchValue);
  });

  postElement.innerHTML = '';

  filteredPosts.forEach(post => {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = PostFeed(post);
    postElement.appendChild(newPost);
  });
});

document.addEventListener('click', function(event) {
  const posts = getPostFromLocalStorage();

  if (event.target.classList.contains('booking')) {
    const post = event.target.parentElement;
    const postId = post.dataset.postId;

    if (postId) {
      avaliarPost(posts, postId);
    } else {
      console.error('ID do post não encontrado ou é indefinido.');
    }
  }
});

privateMessageBtn.addEventListener('click', function(event) {

  alert(`
    Para enviar uma mensagem privada, é necessário enviar um email para o email cadastrado.
    Este cadastro será feito em breve.
  `)
});

const onHandleNameClick = () => {
  const imageContainers = document.querySelectorAll('.monitorNome');

  imageContainers.forEach(container => {
    container.addEventListener('click', function(event) {
      const clickedMonitorName = event.target.textContent.trim();
      const posts = getPostFromLocalStorage();

      posts.forEach(post => {
        if (post.monitor.name === clickedMonitorName) {
          const serializedMonitor = encodeURIComponent(JSON.stringify(post));
          window.location.href = `../Profile/profile.html?monitor=${serializedMonitor}`;
        }
      });
    });
  });
};

