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
const scoreDisplay = document.getElementById("score");
const clickSound = document.getElementById("click-sound");
let score = 0;

function getRandomPosition() {
  const container = document.querySelector(".game-container");
  const maxX = container.clientWidth - lychee.offsetWidth;
  const maxY = container.clientHeight - lychee.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  lychee.style.left = `${x}px`;
  lychee.style.top = `${y}px`;
}

function increaseScore() {
  // Play the sound
  clickSound.currentTime = 0;
  clickSound.play();

  // Increase score
  score++;
  scoreDisplay.textContent = score;

  // Move the lychee
  getRandomPosition();
}

// Move the lychee every 1 second
setInterval(getRandomPosition, 1000);

// Score on click
lychee.addEventListener("click", increaseScore);

// Initial position
getRandomPosition();


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


