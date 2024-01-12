function generateHexColor(letters) {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let letters = "0123456789ABCDEF";
let colors = [];
let circleCount = generateRandomCount(101, 200);
let correctCircleIndex = Math.floor(Math.random() * circleCount);

for (let i = 0; i < circleCount; i++) {
  colors.push(generateHexColor(letters));
}

document.querySelector(".output2").textContent = colors[correctCircleIndex];

for (let i = 0; i < circleCount; i++) {
  let circle = document.createElement("div");
  circle.classList.add("circ");
  circle.style.backgroundColor = colors[i];

  if (i === correctCircleIndex) {
    circle.addEventListener("click", () => {
      let currentColor = document.querySelector(".output2").textContent.trim();

      if (currentColor === colors[correctCircleIndex]) {
        alert("Correct Guess!");
      } else {
        alert("Wrong Guess!");
      }

      correctCircleIndex = Math.floor(Math.random() * circleCount);

      for (let i = 0; i < circleCount; i++) {
        colors[i] = generateHexColor(letters);
        document.querySelector(".output2").textContent = colors[correctCircleIndex];
        document.querySelectorAll(".circ")[i].style.backgroundColor = colors[i];
      }
    });
  } else {
    circle.addEventListener("click", () => {
      alert("Wrong Guess!");
    });
  }

  document.querySelector("#circles-container").appendChild(circle);
}