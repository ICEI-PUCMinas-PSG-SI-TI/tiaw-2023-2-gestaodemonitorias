import PostFeed from './components/post.js';
import { UserPostData } from './utils/userData.js';

const postElement = document.querySelector('#postList');
const agendarLink = document.querySelector('#agendaLink');


document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('posts')) {
    saveToLocalStorage(UserPostData);
  }

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

    // Exibir o email do post em um alerta
    alert(`Para agendar, é necessário enviar um email para: ${postEmail}`);

    console.log('Post agendado com sucesso!');
  } else {
    console.log('Post não encontrado para agendamento.');
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
    console.log('ID do post:', postId);

    if (postId) {
      agendarPost(posts, postId);
    } else {
      console.log('ID do post não encontrado ou é indefinido.');
    }
  }
});

