import PostFeed from './components/post.js';

const postElement = document.querySelector('#postList');
const privateMessageBtn = document.querySelector('#privateMessage');

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://my-json-server.typicode.com/dancosta-fed/mockjsonserver/UserData')
    .then(response => response.json())
    .then(posts => {
      console.log('Dados recebidos: ', posts);
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
  });
}

postElement.addEventListener('click', function(event) {
  const posts = getPostFromLocalStorage();
  if (event.target.classList.contains('deletePost')) {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");

    if (confirmDelete) {
      const post = event.target;
      const postId = post.dataset.postId;
      console.log('id', postId);
      deletePost(posts, postId);
    }
  }
});

const saveToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const getPostFromLocalStorage = () => {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
};

const deletePost = (posts, postId) => {
  console.log('delete', postId);

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

const agendarPost = (posts, postId) => {
  console.log('agendar', postId);

  const indexToAgendar = posts.findIndex(post => post.id === Number(postId));

  if (indexToAgendar !== -1) {
    const postToAgendar = posts[indexToAgendar];
    const postEmail = postToAgendar.monitor.email;

    alert(`Para agendar, é necessário enviar um email para: ${postEmail}`)

  } else {
    console.error('Algo aconteceu de errado. Não foi possível agendar o post.');
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
      agendarPost(posts, postId);
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