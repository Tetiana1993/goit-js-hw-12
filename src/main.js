import { searchImg } from './js/pixabay-api';gallery
import { checkUp, noMatch } from './js/render-functions';
import { imgRender } from './js/render-functions';
import { gallery } from './js/render-functions';
import { errNotify } from './js/render-functions';
import { infoNotify } from './js/render-functions';

export const refs = {
  formEl: document.querySelector('.form'),
  inputEl: document.querySelector('input[name="text"]'),
  listEl: document.querySelector('.gallery'),
  spanEl: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.more')
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadBtnClick);

let page;
let resultPages;
let search;

async function onFormSubmit(e) {
  e.preventDefault();
  search = e.target.elements.text.value.trim();
  page = 1;

  if (!search) {
    checkUp();
    return;
  }

  refs.spanEl.classList.remove('hidden');

  try {
    const data = await searchImg(search, page);

    if (data.hits.length === 0) {
      noMatch();
    }
    resultPages = Math.ceil(data.totalHits / 15);
    refs.listEl.innerHTML = '';

    imgRender(data);
    gallery.on('show.simplelightbox');
    gallery.refresh();
  } catch (err) {
    errNotify(err);
  }
  refs.spanEl.classList.add('hidden');
  checkBtnVisibleStatus();
  e.target.reset();
}

async function onLoadBtnClick() {
  page += 1;
  refs.spanEl.classList.remove('hidden');
  const data = await searchImg(search, page);
  imgRender(data);
  gallery.on('show.simplelightbox');
  gallery.refresh();
  refs.spanEl.classList.add('hidden');
  checkBtnVisibleStatus();
  const height =
    refs.formEl.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}

function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  if (page >= resultPages) {
    hideLoadBtn();
    infoNotify();
  } else {
    showLoadBtn();
  }
}