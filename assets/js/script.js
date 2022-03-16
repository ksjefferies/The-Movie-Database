//jQuery variable elements
var searchBtn = $("#searchBtn");

//global variables
const api_key = '1fc2de251859dcddc136157f2a89acbe';
var movieName = '';

// API function starts on click
searchBtn.on('click', async function (event) {
    event.preventDefault();

    movieName = $('#searchInput').val();
    movieResult = await movieLookup(movieName);

    console.log(movieResult)

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

async function creditLookup() {

}
    //fetch OMDB
    // parse into usable array of objects