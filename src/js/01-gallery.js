// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map(galleryItem => createGalatyItem(galleryItem));

galleryEl.append(...gallery);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalatyItem({ preview, original, description }) {
  const link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = original;

  const img = document.createElement('img');
  img.src = preview;
  img.alt = description;
  img.classList.add('gallery__image');

  link.append(img);

  return link;
}

console.log(galleryItems);
