// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000,
});

//Scrolling page w/o repload

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav a");
  const toggleButton = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Close the mobile menu
      if (navMenu.classList.contains("show")) {
        toggleButton.classList.add("collapsed");
        navMenu.classList.remove("show");
      }
    });
  });
});

// Js for about card img

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
});

// Animated header text

//Map setup

function initMap() {
  var myLatLng = { lat: 40.712776, lng: -74.005974 }; // Example coordinates

  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Marker Title",
  });
}
