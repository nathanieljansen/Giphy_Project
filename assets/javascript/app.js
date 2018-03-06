

$(function () {
  var stPatrickGiphs = ["I Need Food", "So Much Food", "Where's My Coffee", "It's Time for a Drink"];
  console.log("Ready!") 
  function createButtons(){
    $(".buttonSection").empty();
  // Looping through the array of movies
  for (var i = 0; i < stPatrickGiphs.length; i++) {
    var a = $("<button>");
    a.addClass("giphyButton");
    a.attr("data-name", stPatrickGiphs[i]);
    a.text(stPatrickGiphs[i]);
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
  stPatrickGiphs.push(gif);
  createButtons();
});
createButtons();
  
});