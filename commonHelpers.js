import{a as p,S as y,i as d}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function u(r,t){const e="https://pixabay.com/"+"/api/",o={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};return(await p.get(e,{params:o})).data}function b(){d.warning({title:"Caution",message:"Please, enter something to search!",position:"topRight"})}function L(){d.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function w(){d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function v(r){return r.hits.map(({webformatURL:t,largeImageURL:l,tags:n,likes:e,views:o,comments:i,downloads:h})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${n}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${e}</p>
  <p><b>Views</b> ${o}</p>
  <p><b>Comments</b> ${i}</p>
  <p><b>Downloads</b> ${h}</p>
 </div>
</li>`).join(`
`)}function f(r){const t=v(r);a.galleryForm.insertAdjacentHTML("beforeend",t)}const a={formEl:document.querySelector(".form"),galleryForm:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".more")};new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.formEl.addEventListener("submit",B);a.loadBtn.addEventListener("click",S);let s,m,c;async function B(r){if(r.preventDefault(),c=r.target.elements.text.value.trim(),s=1,!c){b();return}a.loader.classList.remove("hidden");try{const t=await u(c,s);t.hits.length===0&&L(),m=Math.ceil(t.totalHits/15),a.galleryForm.innerHTML="",f(t),gallery.show(),gallery.refresh()}catch{}a.loader.classList.add("hidden"),g(),r.target.reset()}async function S(){s+=1,a.loader.classList.remove("hidden");const r=await u(c,s);f(r),gallery.show(),gallery.refresh(),a.loader.classList.add("hidden"),g();const t=a.galleryForm.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:t*2})}function E(){a.loadBtn.classList.remove("hidden")}function P(){a.loadBtn.classList.add("hidden")}function g(){s>=m?(P(),w()):E()}
//# sourceMappingURL=commonHelpers.js.map
