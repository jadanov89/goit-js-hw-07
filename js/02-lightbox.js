import { galleryItems } from './gallery-items.js';
// Change code below this line

const paretteContainer = document.querySelector('.gallery');
const cre = createGalleryItems(galleryItems);

paretteContainer.insertAdjacentHTML('beforeend', cre);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
}


const lightbox = new SimpleLightbox(".gallery a", {
  selector: "img",
  data: "alt",
  position: "bottom",
  delay: 250,
});
