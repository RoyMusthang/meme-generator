const textInput = document.querySelector('#text-input');
const imageInput = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const images = document.getElementsByClassName('images');

textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});

imageInput.addEventListener('input', () => {
  memeImage.src = URL.createObjectURL(imageInput.files);
});

fireButton.addEventListener('click', () => {
  memeContainer.className = 'fire';
});

waterButton.addEventListener('click', () => {
  memeContainer.className = 'water';
});

earthButton.addEventListener('click', () => {
  memeContainer.className = 'earth';
});

for (let i = 0; i < images.length; i += 1) {
  images[i].addEventListener('click', () => {
    memeImage.src = images[i].src;
  })
}