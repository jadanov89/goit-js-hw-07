import { galleryItems } from "./js/gallery-items.js";
// Change code below this line

const paretteContainer = document.querySelector('.gallery');
const cre = createGalleryItems(galleryItems);

paretteContainer.insertAdjacentHTML('beforeend', cre);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
}
