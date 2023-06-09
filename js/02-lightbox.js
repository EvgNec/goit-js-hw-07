import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryIt = galleryItems.map(function ({ preview, original, description }) {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}" target="_blank">
        <img 
    class = "gallery__image"
    src="${preview}"
    alt="${description}"
         />
    </a>
    </li>`;
}
).join("");

gallery.insertAdjacentHTML('beforeend', galleryIt);

new SimpleLightbox('.gallery__link',
        {   captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });
