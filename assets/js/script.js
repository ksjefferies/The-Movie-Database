//jQuery variable elements
var searchBtn = $('#searchBtn');
var searchImages = $('#searchResults');
var trailers = $('#trailers');
var upComing = $('#upComing');

//global variables
const api_key = '1fc2de251859dcddc136157f2a89acbe';
var currentSlide = 1;

$('#landingBtn').on("click",function () {
  location.href = "search.html";
} )

// API functions start gathering movie information on click
searchBtn.on('click', async function (event) {
  event.preventDefault();

  //let genre = await genresLookup() // Genre ID's   

  let movieName = $('#searchInput').val();
  let movieResult = await movieLookup(movieName); // Movie data for movie search
  displaySearchResults(movieResult.results.slice(0,12));

  console.log(movieResult);
})

// Param URL and api_key + any parameters
function paramApiUrl(url, params) {
  params === null ? params = {} : params
  params = Object.assign({ api_key: api_key }, params)
  return url + jQuery.param(params)
}

// Fetch function to process the fetch using prepared string as arguement
async function apiRequest(requestString) {
  return fetch(requestString)
    .then(function (response) {
      return response.text()
    })
    .then(function (text) {
      return JSON.parse(text)
    })
}

// Fetch API data for movie inputed into search
async function movieLookup(movieName) {
  let apiSite = 'https://api.themoviedb.org/3/search/movie?'
  let requestUrl = paramApiUrl(apiSite, { query: movieName })
  return apiRequest(requestUrl)
}

async function movieIDLookup(movie_id) {
  let apiSite = 'https://api.themoviedb.org/3/movie/' + movie_id + "?"

  let requestUrl = paramApiUrl(apiSite,{
    append_to_response: 'videos,images,credits,similar,release_dates'
  })
  console.log(requestUrl)
  return apiRequest(requestUrl)
}

// Fetch API list of upcoming movies
async function upcomingMovies() {
  let apiSite = 'https://api.themoviedb.org/3/movie/upcoming?';
  let requestUrl = paramApiUrl(apiSite)
  return apiRequest(requestUrl)
}

async function topPopularMovies() {
  let apiSite = 'https://api.themoviedb.org/3/movie/popular?';
  let requestUrl = paramApiUrl(apiSite)
  return apiRequest(requestUrl)
}

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}

function displaySearchResults(movieResult) {
  searchImages.empty();
  for (var i = 0; i < movieResult.length; i++) {
    let imageProperties = {
      src: 'https://image.tmdb.org/t/p/' + 'w185' + movieResult[i].poster_path,
      alt: movieResult[i].title
    }
    let linkParams = jQuery.param({id: movieResult[i].id})
    $link = $("<a>", {href: "movie-page.html?" + linkParams})
    $img = $('<img>', imageProperties)
    
    searchImages.append($link.append($img));
  }
}

// Search history slide show (aside index.html)
function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

// *** Console.log statements for testing ***
// console.log(genre) // (genresLookup)
// console.log(movieResult) // (movieLookup)
// console.log(castResult) // (creditLookup)
// console.log(videoResult) // (videoLookup)
// console.log(sneakResult.results[0].id) //(upcomingMovies)
// console.log(sneakPreview) // (VideoLookup)
// console.log(videoTrailer[videoTrailer.length - 1].key) // (videoTrailer) Key

  // let castResult = await creditLookup(movieResult.results[0].id) // Retrieve cast information

  // // let popularMovies = await topPopularMovies()
  // // console.log(topRated)

  // let videoResult = await videoLookup(movieResult.results[0].id) // Retrieve video info for movie being searched
  // let videoTrailer = videoResult.results.filter(function (item) {
  //   return item.type == 'Trailer'
  // })

  // let sneakResult = await upcomingMovies(); // Retrieve list of upcoming movies 

  // let sneakPreview = await videoLookup(sneakResult.results[(Math.floor(Math.random() * 10))].id) // Retrieve random upcoming movie trailer
  // let previewResult = sneakPreview.results.filter(function (item) {
  //   return item.type == 'Trailer'
  // })
 
  // Images for thumbnail and search results pages
  // $('body').append($('<img>', { src: 'https://image.tmdb.org/t/p/' + 'w154' + movieResult.results[0].poster_path }))
  // $('body').append($('<img>', { src: 'https://image.tmdb.org/t/p/' + 'w342' + movieResult.results[0].poster_path }))

  // // Trailers for both selected movie and upcoming movie
  // trailers.attr('src', 'https://www.youtube.com/embed/' + videoTrailer[videoTrailer.length - 1].key)
  // upComing.attr('src', 'https://www.youtube.com/embed/' + previewResult[previewResult.length - 1].key)