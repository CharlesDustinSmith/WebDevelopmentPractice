//This is to add one class to the h1 element using jQuery
$("h1").addClass("big-title");

//This is to remove a class from the h1 element using jQuery
$("h1").removeClass("big-title");

//Selects all of the buttons using jQuery instead of javaScript
$("button")

//This is to add more than one class to the h1 element
$("h1").addClass("big-title margin-50");

//This is to manipulate the text in the h1 element
$("h1").text("GoodBye");

//This is how to change the html element usinh jQuery
$("button").html("<em>Hey</em>");

//This is how to change the h1 element in html to a different color
// $("h1").on("click", function(event) {
//     $("h1").css("color", "purple");
// });

//This will hide the h1 element whenever you click any of the button elements
// $("button").on("click", function(event) {
//     $("h1").hide();
// });

//This will show the h1 element whenever you click any of the button elements
// $("button").on("click", function(event) {
//     $("h1").show();
// });

//This will toggle the h1 element on and off whenever you click any of the button elements
// $("button").on("click", function(event) {
//     $("h1").toggle();
// });

//This will fadeout the h1 element whenever the button is clicked
$("button").on("click", function(event) {
    // $("h1").fade();

    //This is fade toggle
    //$("h1").fadeToggle();

    //This is slide up
    //$("h1").slideUp();

    //This is slide down
    //$("h1").slideDown();

    //This is slide toggle
    $("h1").slideToggle();
});

//This will custom animate
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

