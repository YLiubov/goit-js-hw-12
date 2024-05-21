import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { fetchData } from "./js/pixabay-api";

import { createMarkup } from "./js/render-functions";

const PIXABAY_URL = "https://pixabay.com/api/"


const form = document.querySelector(".ask-form");
const container = document.querySelector(".container");
 const load = document.querySelector(".loader");
const target = document.querySelector('.js-backdrop');
const loadBtn = document.querySelector('.js-load-more');

 load.style.display = "none";
let page = 1;
let serh = null;
let ligthBox;
// const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
loadBtn.addEventListener('click', handleBtn);
//

// async function fetchData(url, options = {}) {
//     const response = await fetch(url, options);
//     if(!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return await response.json();
// }


async function handleSubmit(event) {
    event.preventDefault();
    container.innerHTML = "";
   loadBtn.classList.add('is-hidden');
  load.style.display = "flex";
  page = 1;
    const searchOption = event.target.elements.askChoice;
     serh = searchOption.value.trim();

    try {
        const response = await fetchData(serh, page);

       
    
        if (!response.total) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: 'yellow',
                color: 'white',
                position: 'topRight',
                close: true,
                timeout: 5000
            })
        }

        
        container.insertAdjacentHTML("beforeend", createMarkup(response.hits))

        ligthBox = new SimpleLightbox('.container a', {
            captionsData: "alt", captionPosition: "bottom",
            captionDelay: 250
        });

        ligthBox.refresh();
      
         if (response.totalHits > 15) {
             loadBtn.classList.remove('is-hidden');
         }
  
    } catch (error) {
        console.log(error.message);
    } finally {
    
        load.style.display = "none";
        form.reset();
  
    }

}


async function handleBtn() {
  load.style.display = "flex";
  page += 1;
  try {
    const response = await fetchData(serh, page)
    
      container.insertAdjacentHTML("beforeend", createMarkup(response.hits));
      ligthBox = new SimpleLightbox('.container a', {
              captionsData: "alt", captionPosition: "bottom",
              captionDelay: 250
          });
      ligthBox.refresh();
      // Функція для скролу
      const { height: cardHeight } = document.querySelector('.container')
      .firstElementChild.getBoundingClientRect();

      window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
      });
      const lastPage = Math.ceil(response.totalHits / 15);
      
      if (lastPage === page) {
        loadBtn.classList.add('is-hidden');
        return iziToast.show({
          message:
                "We're sorry, but you've reached the end of search results",
             backgroundColor: 'yellow',
                color: 'white',
                position: 'topRight',
                close: true,
                timeout: 5000
        });
      }
    
  } catch (error) {
    console.log(error.message);
  } finally {
  load.style.display = "none";
  }

}



