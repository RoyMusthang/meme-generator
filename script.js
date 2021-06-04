const textInputElement = document.getElementById('text-input');
const memeTextElement = document.getElementById('meme-text');
const memeInsertElement = document.getElementById('meme-insert');
const imageElement = document.getElementById('meme-image');
const memeImgContainerElement = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const suggestionsContainer = document.getElementById('suggestions');

function updateText() {
  memeTextElement.textContent = textInputElement.value;
}

function loadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (loadEvent) => {
    imageElement.src = loadEvent.target.result;
  });
  reader.readAsDataURL(file);
  memeTextElement.style.position = 'absolute';
  memeTextElement.style.bottom = '5%';
}

function applyFireBorder() {
  memeImgContainerElement.style.border = '3px dashed red';
}

function applyWaterBorder() {
  memeImgContainerElement.style.border = '5px double blue';
}

function applyEarthBorder() {
  memeImgContainerElement.style.border = '6px groove green';
}

function useSuggestion(event) {
  imageElement.src = event.target.src;
  memeTextElement.style.position = 'absolute';
  memeTextElement.style.bottom = '5%';
}

textInputElement.addEventListener('keyup', updateText);
memeInsertElement.addEventListener('change', loadImage);
fireButton.addEventListener('click', applyFireBorder);
waterButton.addEventListener('click', applyWaterBorder);
earthButton.addEventListener('click', applyEarthBorder);
suggestionsContainer.addEventListener('click', useSuggestion);