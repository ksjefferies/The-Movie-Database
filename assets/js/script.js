//jQuery variable elements
var searchBtn = $("#searchBtn");
var trailers  = $('#trailers');

//global variables
const api_key = '1fc2de251859dcddc136157f2a89acbe';
var movieName = '';

// API function starts on click
searchBtn.on('click', async function (event) {
    event.preventDefault();

    movieName = $('#searchInput').val();
   let  movieResult = await movieLookup(movieName);

    console.log(movieResult)
    let castResult = await creditLookup(movieResult.results[0].id)
    console.log(castResult)
    let videoResult = await videoLookup(movieResult.results[0].id)
    console.log(videoResult)



    trailers.attr('src', "https://www.youtube.com/embed/" + videoResult.results[0].key)
})

// movieLookup(movieName)
// movie ID, original title, overview, backdrop img, poster img, release date, voter average(rating)
async function movieLookup(movieName) {
    let apiSite = 'https://api.themoviedb.org/3/search/movie?';
    let requestParam = {
        api_key: api_key,
        query: movieName,
    };
    let queryString = jQuery.param(requestParam);
    let requestUrl = apiSite + queryString;

    return fetch(requestUrl)
        .then(function (response) {
            return response.text()
        })
        .then(function (text) {
            return JSON.parse(text)
        })
}

async function creditLookup(movie_id) {
    let apiSite = 'https://api.themoviedb.org/3/movie/' + movie_id +'/credits?';
    let requestParam = {
        api_key: api_key,
    };
    let queryString = jQuery.param(requestParam);
    let requestUrl = apiSite + queryString;

    return fetch(requestUrl)
        .then(function (response) {
            return response.text()
        })
        .then(function (text) {
            return JSON.parse(text)
        })
}

async function videoLookup(movie_id) {
    let apiSite = 'https://api.themoviedb.org/3/movie/' + movie_id +'/videos?';
    let requestParam = {
        api_key: api_key,
    };
    let queryString = jQuery.param(requestParam);
    let requestUrl = apiSite + queryString;

    return fetch(requestUrl)
        .then(function (response) {
            return response.text()
        })
        .then(function (text) {
            return JSON.parse(text)
        })
}





    
    //fetch OMDB
    // parse into usable array of objects

    // movie DataTransferItemLi



