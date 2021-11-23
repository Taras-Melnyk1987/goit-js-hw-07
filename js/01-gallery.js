import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
gallery.addEventListener('click', onModalOpen);

//разметка
function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt='${description}'
          />
        </a>
      </div>`,
    )
    .join('');
}
const galleryImages = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryImages);

let instance = '';

//для inctance
const options = {
  once: true,
  onShow: instance => {
    window.addEventListener('keydown', eventHandler);
  },

  onClose: instance => {
    window.removeEventListener('keydown', eventHandler);
  },
};
function eventHandler(e) {
  if (e.key === 'Escape') {
    instance.close();
    return;
  }
}
//открытие модалки
function onModalOpen(e) {
  e.preventDefault();

  const targetImg = e.target.nodeName === 'IMG';
  if (!targetImg) return;

  const url = getImageUrl(e.target);

  instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
    options,
  );

  instance.show();
}

// функция image
function getImageUrl(image) {
  return image.dataset.source;
}
