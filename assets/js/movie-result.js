// Get ID encoded in URL
let url = new URL(location.href)
let movie_id = url.searchParams.get('id');

async function displayData() {
    let test = await videoLookup(movie_id);
    console.log(test)
}









var testBtn = $("#test");

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