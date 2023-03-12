import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery")
const imagesMarkup = createGalleryItems(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', imagesMarkup);
galleryBox.addEventListener('click', getOriginalImg)

function createGalleryItems(img) {
    return img.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>  
        </div>
        `;
    }).join('');
}

function getOriginalImg(evt) {
    evt.preventDefault()
    const isImg = evt.target.classList.contains('gallery__image');

    if (!isImg) {
        return;
    }

    const originalImage = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img width="100%" height="100%" src="${originalImage}">
`)
    instance.show()
    
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    instance.close()
  }
})
}
