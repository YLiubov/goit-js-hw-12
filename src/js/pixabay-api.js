// key_pixabay 43258927-612e11e8a955b04f9334ad244

import axios from 'axios';

axios.defaults.baseURL =  "https://pixabay.com/api/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const API_KEY = "43258927-612e11e8a955b04f9334ad244";
const urlAXIOS = `?key=${API_KEY}`;
export async function fetchData(query, page) {
  
  const response = await axios.get(urlAXIOS,  {
    params: {
      q: query,
      page,
         per_page: 15,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }

     
  })
  return response.data;
}

//   export  async function fetchData(url, options = {}) {
//     const response = await fetch(url, options);
//     if(!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return await response.json();
// }
