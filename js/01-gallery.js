import { galleryItems } from "./gallery-items.js";
// Change code below this line

const paretteContainer = document.querySelector('.gallery');
const createMarkup = createGalleryItems(galleryItems);

paretteContainer.insertAdjacentHTML('beforeend', createMarkup);

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


paretteContainer.addEventListener('click', galleryGlleryImgClick);
window.addEventListener("keydown", closeModal);


function galleryGlleryImgClick(evt) {
  evt.preventDefault();

    const isGalerryClick = evt.target.classList.contains("gallery__image");

    if(!isGalerryClick) {
      return;
    }
  

  const bigSizeImage = basicLightbox.create(
    `<img src=${evt.target.dataset.source}>`
  );

  bigSizeImage.show();
}

function closeModal(evt) {
  if (evt.code === "Escape") {
    fullSizeImage.close(() =>
      window.removeEventListener("keydown", closeModal)
    );
  }
}
  

