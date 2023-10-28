import PostFeed  from './components/post.js';
import { UserPostData } from './utils/userData.js';

const postElement = document.querySelector('#postList');

document.addEventListener('DOMContentLoaded', function() {
  let posts = [];
  
  if (UserPostData.length > 0) {
    posts = UserPostData;
  }

  posts.forEach(post => {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = PostFeed(post);
    postElement.appendChild(newPost);
  });

  // Append the new post element to the post element
  postElement.appendChild(newPost);
});

