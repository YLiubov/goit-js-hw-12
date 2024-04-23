import axios from "axios";

export async function searchImages(value, page) {
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = "43313350-287c14b2000f5e13b9dad3a59";
    const perPage = 15;

    const params = new URLSearchParams({
        key: API_KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
    })

    try {
        const response = await axios(`${BASE_URL}?${params}`);
    return response.data;

    }  catch(error){
        if(error.length != undefined) {
          iziToast.error({
              title: 'Error',
              message:
                'Sorry, there are no images matching your search query. Please try again!',
                
            });
        }
      }  
    

    // return fetch(`${BASE_URL}?${params}`)
    // .then(recponse => {
    //     if(!recponse.ok) {
    //         throw new Error(recponse.statusText)
    //     }
      
    //     return recponse.json();
    // } );
}