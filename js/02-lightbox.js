import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryImages = createGalleryItems(galleryItems);
// gallery.addEventListener('click', onModalOpen);

function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li class="item"><a class="gallery__item" style='display: inline-block; height: 240px' href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`,
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});