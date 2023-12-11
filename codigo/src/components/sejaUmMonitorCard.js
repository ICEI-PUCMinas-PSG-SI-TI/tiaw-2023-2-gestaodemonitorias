// create card element
const card = document.createElement('div');
card.style.marginTop = '20px';
card.style.backgroundColor = '#fff';
card.style.padding = '20px';
card.style.borderRadius = '10px';
card.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
card.style.display = 'flex';
card.style.flexDirection = 'column';
card.style.alignItems = 'center';

// create card title
const title = document.createElement('h2');
title.textContent = 'Seja um monitor';
title.style.marginBottom = '20px';
title.style.color = '#003459';

// create button
const button = document.createElement('button');
button.textContent = 'Inscreva-se';
button.style.backgroundColor = '#003459';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.padding = '10px 20px';
button.style.cursor = 'pointer';

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#00587A';
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#003459';
});

button.addEventListener('click', () => {
  console.log('Botão clicado');
  $('#myModal').modal('show');
});

// append elements to card
card.appendChild(title);
card.appendChild(button);

// append card to aside tag with id monitorAd
const monitorAd = document.getElementById('monitores');
monitorAd.appendChild(card);
