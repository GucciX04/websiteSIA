
const settingsBtn = document.querySelector('.header-buttons button:nth-child(1)');
const menuBtn = document.querySelector('.header-buttons button:nth-child(2)');
const exitBtn = document.querySelector('.header-buttons button:nth-child(3)');


settingsBtn.addEventListener('click', () => {
  alert('Settings will be available soon!');
});


menuBtn.addEventListener('click', () => {
  alert('Menu options will be added here later!');
});


exitBtn.addEventListener('click', () => {
  const confirmExit = confirm('Are you sure you want to exit MatchMage?');
  if (confirmExit) {
    location.reload();
  }
});


const startBtn = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');

startBtn.addEventListener('click', () => {
  introScreen.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("start-btn");
    const introScreen = document.getElementById("intro-screen");
    const cardSelection = document.getElementById("card-selection");
  
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("hidden");
        cardSelection.classList.remove("hidden");
      });
    }
  });
  
