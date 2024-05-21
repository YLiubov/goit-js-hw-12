export function createMarkup(arr) {
    return arr.map(({id, largeImageURL, webformatURL, tags, likes, views, comments, downloads }
) => `
        <li class="list-card">
        <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" class="short-card" >
            <ul class="list-item" >
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Likes</p>
            <p class="item-div">${likes}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Views</p>
            <p class="item-div">${views}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Comments</p>
            <p class="item-div">${comments}</p>
            </div> 
            </li>
  
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Downloads</p>
            <p class="item-div">${downloads}</p>
            </div> 
            </li>
            
            </ul>
            </a>
        </li>
    `).join("")
}