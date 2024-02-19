// Manipulating Styles
$("h1").css("color", "red"); // Selecting elements and adding the css property in there
$("button"); // For selecting all the buttons on the screen, and there's no difference between selecting one or many

console.log($("h1").css("font-size")); // NOTE:-> With this method that if we have a single property in it then we're getting the value of it
console.log($("h1").css("font-size", "5rem")); // NOTE:-> And if we have two properties in it then we're setting the value of it

// Manipulating Text
$("h1").addClass("big-title margin-50");
$("button").text("click");

// Manipulating Attributes
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

// Adding Event Listeners
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// Javascript code
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// jQuery code
$("button").click(function () {
  $("h1").css("color", "purple");
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "black");
});

$(document).keypress(function (e) {
  console.log(e.key);
  $("h1").text(e.key);
});

// Adding or Removing ELements
// Adding Elements
$("h1").before("<button>New</button>"); // This will create a new element before the element we have selected
$("h1").after("<button>New</button>"); // This will create a new element after the element we have selected
// Removing Elements
// $("button").remove();

// Website Animations
$("button").on("click", function () {
  $("h1").fadeToggle(); // This will hide and show our h1 element text whenever we clicks the button
});

// NOTE:-> Make sure that the second value in the CSS of the animate functon should be a number value
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 }); // This allows us to define some custom css that we want to gradually animate towards
});

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); // This allows us to define some custom css that we want to gradually animate towards
});
