import{a as m,i as f,S as h}from"./assets/vendor-6e0bf343.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();m.defaults.baseURL="https://pixabay.com/api/";const L="43258927-612e11e8a955b04f9334ad244",S=`?key=${L}`;async function y(s,i){return(await m.get(S,{params:{q:s,page:i,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function g(s){return s.map(({id:i,largeImageURL:o,webformatURL:l,tags:e,likes:t,views:a,comments:b,downloads:w})=>`
        <li class="list-card">
        <a class="gallery-link" href="${o}">
            <img src="${l}" alt="${e}" class="short-card" >
            <ul class="list-item" >
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Likes</p>
            <p class="item-div">${t}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Views</p>
            <p class="item-div">${a}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Comments</p>
            <p class="item-div">${b}</p>
            </div> 
            </li>
  
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Downloads</p>
            <p class="item-div">${w}</p>
            </div> 
            </li>
            
            </ul>
            </a>
        </li>
    `).join("")}const v=document.querySelector(".ask-form"),p=document.querySelector(".container"),n=document.querySelector(".loader");document.querySelector(".js-backdrop");const c=document.querySelector(".js-load-more");n.style.display="none";let r=1,u=null,d;v.addEventListener("submit",P);c.addEventListener("click",q);async function P(s){s.preventDefault(),p.innerHTML="",c.classList.add("is-hidden"),n.style.display="flex",r=1,u=s.target.elements.askChoice.value.trim();try{const o=await y(u,r);o.total||f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"yellow",color:"white",position:"topRight",close:!0,timeout:5e3}),p.insertAdjacentHTML("beforeend",g(o.hits)),d=new h(".container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d.refresh(),o.totalHits>15&&c.classList.remove("is-hidden")}catch(o){console.log(o.message)}finally{n.style.display="none",v.reset()}}async function q(){n.style.display="flex",r+=1;try{const s=await y(u,r);p.insertAdjacentHTML("beforeend",g(s.hits)),d=new h(".container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d.refresh();const{height:i}=document.querySelector(".container").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:i*2,behavior:"smooth"}),Math.ceil(s.totalHits/15)===r)return c.classList.add("is-hidden"),f.show({message:"We're sorry, but you've reached the end of search results",backgroundColor:"yellow",color:"white",position:"topRight",close:!0,timeout:5e3})}catch(s){console.log(s.message)}finally{n.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
