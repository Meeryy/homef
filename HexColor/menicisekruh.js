var circle = document.getElementById("circle");

setInterval(function() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
  circle.style.backgroundColor = randomColor;
}, 500); 