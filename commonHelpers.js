import{S as u,i as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(r){const o="https://pixabay.com/",n="/api/",l="?key=42514527-f0e4c02a7a5e34a1148846eb5",e=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+n+l+e;return fetch(t).then(s=>s.json())}function f(){c.warning({message:"Please, enter something to search!",position:"topRight"})}function g(){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.spanEl.style.display="none"}function d(r){return r.hits.map(({webformatURL:o,largeImageURL:n,tags:l,likes:e,views:t,comments:s,downloads:p})=>`<li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${l}"
        loading="lazy"
      />
    </a>
    <div class="gallery-descr">
    <p><b>Likes</b> ${e}</p>
    <p><b>Views</b> ${t}</p>
    <p><b>Comments</b> ${s}</p>
    <p><b>Downloads</b> ${p}</p>
   </div>
  </li>`).join(`
`)}function y(r){const o=d(r);i.listEl.insertAdjacentHTML("afterbegin",o)}const a=new u(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt",captionDelay:250,captionType:"attr"});a.on("show.simplelightbox");a.refresh();const i={formEl:document.querySelector(".form"),inputEl:document.querySelector('input[name="text"]'),listEl:document.querySelector(".gallery"),spanEl:document.querySelector(".loader")};i.formEl.addEventListener("submit",h);function h(r){r.preventDefault();const o=r.target.elements.text.value.trim();if(!o.trim().length){i.spanEl.style.display="none";return}if(i.spanEl.style.display="block",!o){f();return}i.listEl.innerHTML="",m(o).then(n=>{n.hits.length===0?g():(y(n),a.on("show.simplelightbox"),a.refresh()),i.spanEl.style.display="none"}).catch(n=>console.log(n)),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
