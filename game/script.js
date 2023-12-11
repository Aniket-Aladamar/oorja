// JavaScript Logic
// Get the level links, game titles, game descriptions, play buttons, and game images
const levelLinks = document.querySelectorAll('.link');
const gameTitles = document.querySelectorAll('.card-info h2');
const gameDescriptions = document.querySelectorAll('.card-info p');
const playButtons = document.querySelectorAll('.percentage a');
const gameCards = document.querySelectorAll('.card');
const gameImages = document.querySelectorAll('.card img');


// Game data for each level
const gameData = [
  {
    titles: ['Count the Shapes', 'Join the Dots', 'Words', 'Gears'],
    descriptions: [' ', ' ', ' ', ' '],
    links: ['https://reethuthota.github.io/count-the-triangles/', 'https://n-avanthi.github.io/', '#', 'https://sruthikasivakumar.github.io/Gears/'],
    images: [
      './images/count the shapes.jpg',
      './images/join the dots.jpg',
      './images/word.jpg',
      './images/gears.jpg'
    ]
  },
  {
    titles: ['Sequence', 'Matchsticks', 'Prime Labyrinth'],
    descriptions: [' ', ' ', ' '],
    links: ['#', 'https://shreyasrajiv327.github.io/Matchstick-Version-2-/', 'https://sumedha-lolur.github.io/Prime-Labyrinth--POLISH/'],
    images: [
      './images/sequence.jpg',
      './images/matchsticks.jpg',
      './images/primelabyrinth.jpg',
    ]
  },
  {
    titles: ['Tower of Hanoi', 'Magic Square', '2048'],
    descriptions: [' ', ' ', ' '],
    links: ['#', 'https://aniket-aladamar.github.io/magic-square-oorja/', 'https://fms08.github.io/Oorjja_Games_FMS/'],
    images: [
      './images/towerofhanoi.jpg',
      './images/magicsquare.jpg',
      './images/2048.jpg'
    ]
  }
];

// Set Level 1 as highlighted on page load
levelLinks[0].classList.add('highlighted');

// Function to update the game details
function updateGameDetails(level) {
  // Update the game titles, descriptions, play button links, and images
  gameTitles.forEach((title, i) => {
    title.innerText = gameData[level].titles[i];
  });

  gameDescriptions.forEach((description, i) => {
    description.innerText = gameData[level].descriptions[i];
  });

  playButtons.forEach((button, i) => {
    button.href = gameData[level].links[i];
  });
  gameImages.forEach((image, i) => {
    image.src = gameData[level].images[i];
  });


  gameCards.forEach((card, i) => {
    if (gameData[level].images[i]) {
      card.style.display = 'flex';
      gameImages[i].src = gameData[level].images[i];
    } else {
      card.style.display = 'none';
    }
  });
}

// Add click event listeners to level links
levelLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Remove 'highlighted' class from all level links
    levelLinks.forEach((link) => link.classList.remove('highlighted'));

    // Add 'highlighted' class to the clicked level link
    link.classList.add('highlighted');

    // Update the game details based on the selected level
    updateGameDetails(index);
  });
});

// Update the game details for Level 1 on page load
updateGameDetails(0);
