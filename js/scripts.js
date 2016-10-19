$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();
    var beverage = $("#beverage").val();
    var music = $("input:radio[name=music]:checked").val();
    var color = $("#color").val();


    $(".personname").text(personnameInput);
    $(".beverage").text(beverage);
    $(".music").text(music);
    $(".color").text(color);



    $("#bookinginfo").show();


    event.preventDefault();
    alert("Thanks for completing my survey, your answers will be available below");
  });
});
