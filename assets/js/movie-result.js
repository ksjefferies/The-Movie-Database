// Get ID encoded in URL
let url = new URL(location.href)
let movie_id = url.searchParams.get('id');

async function displayData() {
    let test = await videoLookup(movie_id);
    console.log(test)
}
