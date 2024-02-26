import{a as y,S as b,i as u}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function m(r,t){const e="https://pixabay.com/"+"/api/",o={key:"42514527-f0e4c02a7a5e34a1148846eb5",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};return(await y.get(e,{params:o})).data}function L(){u.warning({message:"Please, enter something to search!",position:"topRight"})}function E(){u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function v(r){u.warning({message:`Error: ${r}`,position:"topRight"})}function w(){u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function S(r){return r.hits.map(({webformatURL:t,largeImageURL:l,tags:i,likes:e,views:o,comments:s,downloads:g})=>`<li class="gallery-item">
   <a class="gallery-link" href="${l}">
     <img
       class="gallery-image"
       src="${t}"
       alt="${i}"
       loading="lazy"
     />
   </a>
   <div class="gallery-descr">
   <p><b>Likes</b> ${e}</p>
   <p><b>Views</b> ${o}</p>
   <p><b>Comments</b> ${s}</p>
   <p><b>Downloads</b> ${g}</p>
  </div>
 </li>`).join(`
`)}function p(r){const t=S(r);n.formEl.insertAdjacentHTML("beforeend",t)}let d=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n={formEl:document.querySelector(".form"),inputEl:document.querySelector('input[name="text"]'),listEl:document.querySelector(".gallery"),spanEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".more")};n.formEl.addEventListener("submit",B);n.loadMoreBtn.addEventListener("click",P);let a,f,c;async function B(r){if(r.preventDefault(),c=r.target.elements.text.value.trim(),a=1,!c){L();return}n.spanEl.classList.remove("hidden");try{const t=await m(c,a);t.hits.length===0&&E(),f=Math.ceil(t.totalHits/15),n.listEl.innerHTML="",p(t),d.on("show.simplelightbox"),d.refresh()}catch(t){v(t)}n.spanEl.classList.add("hidden"),h(),r.target.reset()}async function P(){a+=1,n.spanEl.classList.remove("hidden");const r=await m(c,a);p(r),d.on("show.simplelightbox"),d.refresh(),n.spanEl.classList.add("hidden"),h();const t=n.formEl.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}function M(){n.loadMoreBtn.classList.remove("hidden")}function N(){n.loadMoreBtn.classList.add("hidden")}function h(){a>=f?(N(),w()):M()}
//# sourceMappingURL=commonHelpers.js.map
