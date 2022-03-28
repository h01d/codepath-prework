// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var placeInPattern = 0;
var mistakes = 0;
var countdown = 30000;
var myInterval;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  placeInPattern = 0;
  mistakes = 0;
  countdown = 30000;
  clueHoldTime = 2000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  getRandomSecretPattern();
  playClueSequence();
  countDown();
}

function stopGame() {
  //initialize game variables
  stopCountdown();
  gamePlaying = false;
  countdown = 30000;
  displayCountdownValue();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function playAudio(btn) {
  document.getElementById("audio" + btn).play();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playAudio(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 25;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. ;()");
}

function winGame() {
  stopGame();
  alert("Woohoo! You won congratulations! :D");
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    //correct
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //YOU WIN!
        winGame();
      } else {
        progress++;
        playClueSequence();
        countdown = 30000;
      }
    } else {
      guessCounter++;
    }
  } else {
    //LOST!
    mistakes++;
    if (mistakes == 3) {
      loseGame();
    }
  }
}

function getRandomSecretPattern() {
  while (placeInPattern < 10) {
    pattern[placeInPattern] = getRandomIntInclusive(1, 6);
    placeInPattern++;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function displayCountdownValue() {
  document.getElementById("timer").innerText = countdown / 1000;
}

function countDown() {
  displayCountdownValue();
  myInterval = setInterval(updateCountdownValue, 1000);
}

function updateCountdownValue() {
  if (countdown > 0) {
    countdown = countdown - 1000;
    displayCountdownValue();
  } else {
    stopCountdown();
    loseGame();
  }
}

function stopCountdown() {
  clearInterval(myInterval);
}
