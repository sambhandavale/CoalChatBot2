var stars = document.getElementById("stars");
var coal = document.getElementById("coal");
var mountains_behind = document.getElementById("mountains_behind");
var text = document.getElementById("text");
var mountains_front = document.getElementById("mountains_front");

window.addEventListener('load', function() {
    // Initial position based on scrollY value
    coal.style.top = window.scrollY * 1.25 + "px";
});

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    stars.style.left = value  + "px";
    coal.style.top = value * 1.25  + "px";
    mountains_behind.style.top = value * 0.5  + "px";
    mountains_front.style.top = value * 0.5  + "px";
    text.style.marginRight = value * 3  + "px";
});
