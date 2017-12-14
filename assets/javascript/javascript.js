$(document).ready(function() {
//Array for searched topics should be added
//Function with AJAX call to GIPHY; Q parameter for API link set to search term, limit 10 res

function displayCountry() {

var x = $(this).data("search");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

console.log(queryURL);
	}
});
