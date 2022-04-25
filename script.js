// Requisito 1
const textInput = document.querySelector('#text-input');
function addMemeText() {
  document.querySelector('p').innerText = textInput.value;
}
textInput.addEventListener('keyup', addMemeText);

// Requisito 2
// Fonte (indicada no próprio repositório do projeto): https://stackoverflow.com/a/27165977
const imageInput = document.querySelector('#meme-insert');
function uploadImage(event) {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
imageInput.addEventListener('change', uploadImage);

// Requisito 6
const container = document.querySelector('#meme-image-container');
const buttons = document.querySelectorAll('button');
function changeBorder(event) {
  switch (event.target.id) {
  case 'fire':
    container.style.border = '3px dashed red';
    break;
  case 'water':
    container.style.border = '5px double blue';
    break;
  case 'earth':
    container.style.border = '6px groove green';
    break;
  default:
    window.onload('Erro!');
  }
}
for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', changeBorder);
}

// Requisito 7
const images = document.querySelectorAll('.mini');
function displayMeme(event) {
  const board = document.querySelector('#meme-image');
  board.src = event.target.src;
}
for (let index = 0; index < images.length; index += 1) {
  images[index].src = `imgs/meme${index + 1}.png`;
  images[index].addEventListener('click', displayMeme);
}
