
import { searchImg } from './js/pixabay-api';
import { checkupInput, notFound } from './js/render-functions';
import { renderImg } from './js/render-functions';
import { lightbox } from './js/render-functions';

export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('input[name="text"]'),
    listEl: document.querySelector('.gallery'),
    spanEl: document.querySelector('.loader')
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.text.value.trim();
  
  if (!search.trim().length) {
    refs.spanEl.style.display = 'none';
    return;
  }
  
  refs.spanEl.style.display = 'block';

  if (!search) {
    checkupInput();
    return;
  }

  refs.listEl.innerHTML = '';
  searchImg(search)
    .then(data => {
      if (data.hits.length === 0) {
        notFound();
      } else {
        renderImg(data);
        lightbox.on('show.simplelightbox');
        lightbox.refresh();
      }
      refs.spanEl.style.display = 'none';
    })
    .catch(err => console.log(err));

  e.target.reset();
}
