import{a as f,S as b,i as c}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const e={formEl:document.querySelector(".js-search-form"),imagesList:document.querySelector(".js-images-list"),loaderEl:document.querySelector(".loader"),loaderMoreEl:document.querySelector(".loader-more"),buttonMoreEl:document.querySelector(".load-button"),ehdLoaderEl:document.querySelector(".end-loader"),imadgeItem:document.querySelector(".images-list-item")};function u(o){return o.map(({id:t,webformatURL:a,largeImageURL:i,tags:s,likes:r,views:l,comments:g,downloads:h})=>`<li class="images-list-item" data-id='${t}'>
        <a class="images-list-link" href="${i}">
            <img class="images-list-image" src="${a}" alt="${s}"></img>
        </a>
        <div class="tumb">
            <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="text">${r}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="text">${l}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="text">${g}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="text">${h}</p>
            </div>
        </div>
    </li>`).join("")}async function y(o,t){const a="https://pixabay.com/api/",i="43313350-287c14b2000f5e13b9dad3a59",r=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await f(`${a}?${r}`)).data}catch(l){l.length!=null&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}let d,n=1;const p=15,m=new b(".js-images-list a",{captions:!0,captionsData:"alt",captionDelay:250});e.loaderEl.style.display="none";e.loaderMoreEl.style.display="none";e.buttonMoreEl.style.display="none";e.ehdLoaderEl.style.display="none";e.buttonMoreEl.addEventListener("click",L);e.formEl.addEventListener("submit",E);async function E(o){if(o.preventDefault(),n=1,e.loaderEl.style.display="block",e.imagesList.innerHTML="",d=o.currentTarget.querySelector(".search-input").value.trim(),d===""){c.error({title:"Error",messege:"Sorry, there are no images matching your search query. Please try again!"});return}try{const t=await y(d,n),a=Math.ceil(t.totalHits/p);e.imagesList.insertAdjacentHTML("beforeend",u(t.hits)),e.formEl.reset(),e.loaderEl.style.display="none",t.totalHits?c.success({title:"Wow",message:`We found ${t.totalHits} pictures!`}):c.error({title:"Oops",message:"Undefined"}),n===a?(e.buttonMoreEl.style.display="none",e.ehdLoaderEl.style.display="block"):t.totalHits?e.buttonMoreEl.style.display="block":e.buttonMoreEl.style.display="none"}catch(t){return loader.style.display="none",c.error({message:`${t.message}`,position:"topCenter"})}m.refresh(),e.loaderEl.style.display="none"}async function L(){n+=1,e.loaderMoreEl.style.display="block",e.buttonMoreEl.style.display="none";try{const t=await y(d,n),a=Math.ceil(t.totalHits/p);e.imagesList.insertAdjacentHTML("beforeend",u(t.hits)),n===a?(e.buttonMoreEl.style.display="none",e.ehdLoaderEl.style.display="block"):e.buttonMoreEl.style.display="block"}catch(t){return loader.style.display="none",c.error({message:`${t.message}`,position:"topCenter"})}const o=()=>e.imadgeItem.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),m.refresh(),e.loaderMoreEl.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
