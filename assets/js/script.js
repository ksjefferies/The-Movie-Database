//jQuery variable elements
// var searchBtn = $("searchBtn");

//global variables
const api_key = '1fc2de251859dcddc136157f2a89acbe';
var movieName = 'ready player one';

// API function starts on click
searchBtn.on('click', async function (event) {
    event.preventDefault();

    movieName = $('movieSearchInput').val();
    movieResult = await movieLookup(movieName);
    console.log(movieResult)
})

// movieLookup(movieName)
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
    //fetch OMDB
    // parse into usable array of objects