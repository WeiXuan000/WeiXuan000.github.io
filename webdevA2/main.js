// Hero Image

// Array of image paths to cycle through
const images = [
  "images/lychee.jpg",
  "images/lychee2.jpg",
];

let currentImageIndex = 0;
const heroImage = document.getElementById("hero-image");

// Function to change the image with a fading effect
function changeHeroImage() {
  // Fade out
  heroImage.style.opacity = 0;

  // After 500ms, update the image and fade back in
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
    heroImage.style.opacity = 1;
  }, 500);
}

// Automatically change image every 5 seconds
setInterval(changeHeroImage, 5000);


// flashcard flip

// When a flashcard is clicked, toggle the "flipped" class to show the back
document.querySelectorAll(".flashcard").forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("flipped");
  });
});


// Lychee Catching Game

const lychee = document.getElementById("lychee");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");
const catchSound = document.getElementById("catch-sound");

let basketX = window.innerWidth / 2 - 50; // Starting position of basket
let lycheeY = -100;                       // Start lychee above the screen
let lycheeX = Math.random() * (window.innerWidth - 50); // Random X position
let score = 0;
let speed = 4; // Falling speed of lychee

// Game update loop
function update() {
  lycheeY += speed; // Move lychee down
  lychee.style.top = lycheeY + "px";
  lychee.style.left = lycheeX + "px";
  basket.style.left = basketX + "px";

  const basketTop = window.innerHeight - 60;

  // Check if lychee is caught by the basket
  if (
    lycheeY >= basketTop &&
    lycheeX + 50 > basketX &&
    lycheeX < basketX + 100
  ) {
    score++; // Increase score
    scoreDisplay.textContent = "Score: " + score;
    catchSound.currentTime = 0; // Restart sound
    catchSound.play(); // Play sound effect
    resetLychee(); // Reset lychee position
  }

  // If lychee falls off screen, reset it
  if (lycheeY > window.innerHeight) {
    resetLychee();
  }

  requestAnimationFrame(update); // Loop the update function
}

// Reset lychee to top and random X position
function resetLychee() {
  lycheeY = -100;
  lycheeX = Math.random() * (window.innerWidth - 50);
}

// Handle keyboard arrow key movement for basket
document.addEventListener("keydown", (e) => {
  const step = 40;
  if (e.key === "ArrowLeft") {
    basketX = Math.max(0, basketX - step); // Move left
  } else if (e.key === "ArrowRight") {
    basketX = Math.min(window.innerWidth - 100, basketX + step); // Move right
  }
});

// Handle mobile control buttons
document.getElementById("left-btn").addEventListener("click", () => {
  basketX = Math.max(0, basketX - 40);
});

document.getElementById("right-btn").addEventListener("click", () => {
  basketX = Math.min(window.innerWidth - 100, basketX + 40);
});

// Start the game loop
update();


// Quiz Game

function checkQuiz() {
  // Correct answers for each question
  const answers = {
    q1: "3",
    q2: "alt",
    q3: "70",
    q4: "5to20",
    q5: "plant"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  // Check each selected answer
  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display the result to the user
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${total}.`;
  result.style.color = score === total ? "green" : "orange";
}


// Fullscreen / Exit Fullscreen

const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");

// Add event listeners to buttons
btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

// Function to enter fullscreen mode
function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen(); // Firefox
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, Opera
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen(); // IE/Edge
  }
}

// Function to exit fullscreen mode
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen(); // Firefox
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // Chrome, Safari, Opera
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen(); // IE/Edge
  }
}


// Hamburger Menu

// Show/hide nav links when hamburger is clicked (for mobile)
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
