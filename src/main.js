import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';


document.addEventListener('DOMContentLoaded', () => {
  const loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'Load more';
  loadMoreButton.classList.add('button');
  loadMoreButton.classList.add('custom-class');
  loadMoreButton.style.display = 'none';
  document.body.appendChild(loadMoreButton);

  const form = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  const loader = document.querySelector('.loader');
  let currentPage = 1;

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    clearGallery();
    loader.style.display = 'block';
    currentPage = 1; 

    try {
      const images = await fetchImages(query, currentPage);
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        toggleLoadMoreButton(false); 
      } else {
        renderImages(images);
        currentPage++; 
        toggleLoadMoreButton(true); 
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.'
      });
    } finally {
      loader.style.display = 'none';
    }
  });

  loadMoreButton.addEventListener('click', async () => {
    loader.style.display = 'block';
    try {
      const images = await fetchImages(searchInput.value.trim(), currentPage);
      if (images.length === 0) {
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results."
        });
        toggleLoadMoreButton(false); 
      } else {
        renderImages(images);
        currentPage++;
        window.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.'
      });
    } finally {
      loader.style.display = 'none';
    }
  });

  function toggleLoadMoreButton(show) {
    loadMoreButton.style.display = show ? 'block' : 'none';
  }
});

