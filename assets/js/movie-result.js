// Get ID encoded in URL
let url = new URL(location.href)
let movie_title = url.searchParams.get('title');
var testBtn = $("#test");

movieData(); //Test call to movieData

async function movieData() {
    let titleResults = await movieLookup(movie_title);
    console.log(titleResults)
}

testBtn.on("click", function(){
  title();
  description();
  rating();
  castList();
});

function title(){
  $("#description").append("<h1 id='selectedTitle'>")
  $("#selectedTitle").text("movieName")
}

function description(){
  $("#description").append("<p id='selectedDescription'>")
  $("#selectedDescription").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam dolore, molestiae blanditiis fugiat quae vero deserunt libero ab error placeat mollitia sint illo, cumque eaque repudiandae nisi, dolorem neque!")
}

function rating(){
  $("#selectedRating").text("R")
}

function castList(){
  $("#castList").append("<h3 class=castMember>")
  $("#castList").append("<h3 class=castMember>")
  $("#castList").append("<h3 class=castMember>")
  $(".castMember").text("test")
}