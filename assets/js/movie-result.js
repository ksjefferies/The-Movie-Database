// Get ID encoded in URL
let url = new URL(location.href)
let movie_title = url.searchParams.get('title');
var movie="";
movieData(); //Test call to movieData

async function movieData() {
    let titleResults = await movieLookup(movie_title);
    console.log(titleResults)
}
