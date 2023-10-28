import PostFeed from './components/post.js';
import { UserPostData } from './utils/userData.js';

const postElement = document.querySelector('#postList');


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