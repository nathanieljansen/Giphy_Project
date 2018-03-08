var foodGifs = ["I Need Food", "So Much Food", "Where's My Coffee", "It's Time for a Drink"];

$(function () {
  console.log("Ready!") 

  function getThoseGifs() {
    var gif = $(this).attr("data-name");;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=evVnm9XTmNBnX1XJi9IeDYkptevRw8it&q=" + gif + "&limit=25&offset=0&rating=G&lang=en";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $(".gifArea").empty();
      console.log(response.data);

      var results = response.data;

        console.log(results);

        // =============== put step 2 in between these dashes ==================

        // ========================

        for (var i = 0; i < results.length; i++) {
          console.log(results)
          var gifDiv = $("<div>");

          // var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + results[i].rating);

          var gifImage = $("<img>");

          gifImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(gifImage);
          $(".gifArea").prepend(gifDiv);
        }
    });
  }
  
  function createButtons(){
    $(".buttonSection").empty();
  for (var i = 0; i < foodGifs.length; i++) {
    var a = $("<button>");
    a.addClass("giphyButton");
    a.attr("data-name", foodGifs[i]);
    a.text(foodGifs[i]);
    $(".buttonSection").append(a);
    $("#giphyInput").val("");
    
  }
}

$("#addGiphy").on("click", function(event){
  event.preventDefault();
  var gif = $("#giphyInput").val().trim();
  if ($.trim($("#giphyInput").val()) === "") {
    alert("Put in some text")
    return false;
  }
  foodGifs.push(gif);
  
  createButtons();
});

  $(document).on("click", ".giphyButton", getThoseGifs);
  createButtons();
});

