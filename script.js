
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

