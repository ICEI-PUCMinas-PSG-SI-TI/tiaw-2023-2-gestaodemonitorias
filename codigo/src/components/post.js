export const PostFeed = (post) => {
  if(!post){
    return `
      <div class="post notFound">
        <h2 class="notFound">Não há posts no momento</h2>
        <i class="fas fa-folder-open"></i>
      </div>
    `;
  };

  return `
    <div class="postHeader">
      <div class="monitor">
        <div class="imageContainer">
          <img src="${post.image}" alt="Profile Image" class="monitorImage">
        </div>

        <div class="monitorInfo">
          <div class="monitorInfoIcon">
            <i class="fas fa-user-tie"></i>
            <h2 class="monitorNome">${post.monitor.name}</h2>
          </div>
          <p class="aprovamMonitor">${post.monitor.aprovacao} aprovam</p>
        </div>
      </div>

      <div class="deletePost" data-post-id="${post.id}">
        <i data-post-id="${post.id}" class="fas fa-times deletePost"></i>
      </div>
    </div>

    <p class="postText">${post.text}</p>
    <div class="postImageContainer">
    <img src="${post.postImage}" alt="Post Image" class="postImage">
    </div>

    <div class="materia">
    <p class="materiaNome">Matéria: ${post.monitor.materia}</p>
    </div>

    <div class="disponibilidade">
    <p class="disponibilidadeNome">Disponibilidade: ${post.monitor.disponibilidade}</p>
    </div>

    <div class="agendar">
      <a id="agendaLink" href="#" class="agendarLink" data-post-id="${post.id}">
        <p class="agendarNome booking">Avaliar</p>
        <i class="agendarIcon fas fa-star"></i>
      </a>
    </div>
  `;
}

