$(document).ready(function() {
//Array for searched topics to be added
var topics = [];

	//Creating an AJAX call for the specific country button being clicked
	function displayCountry() {

	var x = $(this).data("search");
	console.log(x);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        	for (var i = 0; i < results.length; i++) {
        	
        	var showDiv = $("<div class='col-md-4'>");

        	var rating = results[i].rating;
        	var defaultAnimatedSrc = results[i].images.fixed_height.url;
        	var staticSrc = results[i].images.fixed_height_still.url;
        	var showImage = $("<img>");
        	var p = $("<p>").text("Rating: " + rating);

        	showImage.attr("src", staticSrc);
        	showImage.addClass("countryGiphy");
        	showImage.attr("data-state", "still");
        	showImage.attr("data-still", staticSrc);
        	showImage.attr("data-animate", defaultAnimatedSrc);
        	showDiv.append(p);
        	showDiv.append(showImage);
        	$("#gifArea").prepend(showDiv);

        }
	});
}

  //Submit button click  This function handles events where a country button is clicked
	$("#addCountry").on("click", function(event) {
        event.preventDefault();
        var newCountry = $("#countryInput").val().trim();
        topics.push(newCountry);
        
        displayButtons();
      });

  //Function for displaying country data
	function displayButtons() {

    $("#myButtons").empty();

    for (var i = 0; i < topics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("country"); //???
      a.attr("data-search", topics[i]);
      a.text(topics[i]);
      $("#myButtons").append(a);
    }
  }


  displayButtons();

  
  $(document).on("click", "#country", displayCountry);

  
  $(document).on("click", ".countryGiphy", pausePlayGifs);

  function pausePlayGifs() {
  	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  	 var state = $(this).attr("data-state");
  	 // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

  }
}

});
