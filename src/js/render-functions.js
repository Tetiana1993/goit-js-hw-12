import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

import {refs} from "../main";


export function checkupInput() {
    iziToast.warning({
      message: 'Please, enter something to search!',
      position: 'topRight',
    });
  }
  
  export function notFound() {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    refs.spanEl.style.display = 'none';
  }

  export function imgTemplate(data) {
    return data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <div class="gallery-descr">
    <p><b>Likes</b> ${likes}</p>
    <p><b>Views</b> ${views}</p>
    <p><b>Comments</b> ${comments}</p>
    <p><b>Downloads</b> ${downloads}</p>
   </div>
  </li>`;
        }
      )
      .join('\n');
 
  }

  export function renderImg(data) {
    const markup = imgTemplate(data);
    refs.listEl.insertAdjacentHTML('afterbegin', markup);
  
    
  }
 export const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'attr',
  });
  lightbox.on('show.simplelightbox');
  lightbox.refresh();