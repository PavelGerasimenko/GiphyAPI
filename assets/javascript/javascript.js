$(document).ready(function() {
//Array for searched topics should be added
//Function with AJAX call to GIPHY; Q parameter for API link set to search term, limit 10 res
//Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
//Submit button click event takes search term from form input, trims and pushes to topics array, displays button
//Function iterates through topics array to display button with array values in "myButtons"
//Click event on button with id of "country" executes displayCountry function
//Click event on gifs with class executes pausePlayGifs function
//Function accesses "data-state" attribute depending on status


function displayCountry() {

	var x = $(this).data("search");
	console.log(x);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

	console.log(queryURL);
	}
});
