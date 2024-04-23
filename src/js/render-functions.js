export function createMarcup(arr) {

    return arr.map(({id, webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
        `<li class="images-list-item" data-id='${id}'>
        <a class="images-list-link" href="${largeImageURL}">
            <img class="images-list-image" src="${webformatURL}" alt="${tags}"></img>
        </a>
        <div class="tumb">
            <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="text">${likes}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="text">${views}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="text">${comments}</p>
            </div>
            <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="text">${downloads}</p>
            </div>
        </div>
    </li>`
    
    
    ).join('')
    }