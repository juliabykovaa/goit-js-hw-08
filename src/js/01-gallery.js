import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryBox = document.querySelector(".gallery")
const imagesMarkup = createGalleryItems(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', imagesMarkup);

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

new SimpleLightbox('.gallery__link', {  captionsData: "alt", captionDelay: "250" });