// Main page with fading effect when image changes
// Makes image const so that nobody can change it
const images = [
  "images/lychee.jpg",
  "images/lychee2.jpg",
];

let currentImageIndex = 0;
const heroImage = document.getElementById("hero-image");

function changeHeroImage() {
  // Fade out effect
  heroImage.style.opacity = 0;

  // After 500ms change image and fade back in
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
    heroImage.style.opacity = 1;
  }, 500);
}

setInterval(changeHeroImage, 5000); // Change every 5 seconds

// flashcards
document.querySelectorAll(".flashcard").forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("flipped");
  });
});

// Lychee Catch Game
const lychee = document.getElementById("lychee");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");
const catchSound = document.getElementById("catch-sound");

let basketX = window.innerWidth / 2 - 50;
let lycheeY = -100;
let lycheeX = Math.random() * (window.innerWidth - 50);
let score = 0;
let speed = 4;

function update() {
  lycheeY += speed;
  lychee.style.top = lycheeY + "px";
  lychee.style.left = lycheeX + "px";
  basket.style.left = basketX + "px";

  const basketTop = window.innerHeight - 60;
  if (
    lycheeY >= basketTop &&
    lycheeX + 50 > basketX &&
    lycheeX < basketX + 100
  ) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    catchSound.currentTime = 0;
    catchSound.play();
    resetLychee();
  }

  if (lycheeY > window.innerHeight) {
    resetLychee();
  }

  requestAnimationFrame(update);
}

function resetLychee() {
  lycheeY = -100;
  lycheeX = Math.random() * (window.innerWidth - 50);
}

document.addEventListener("keydown", (e) => {
  const step = 40;
  if (e.key === "ArrowLeft") {
    basketX = Math.max(0, basketX - step);
  } else if (e.key === "ArrowRight") {
    basketX = Math.min(window.innerWidth - 100, basketX + step);
  }
});

update();


function checkQuiz() {
  const answers = {
    q1: "3",
    q2: "alt",
    q3: "70",
    q4: "5to20",
    q5: "plant"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${total}.`;
  result.style.color = score === total ? "green" : "orange";
}

const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


