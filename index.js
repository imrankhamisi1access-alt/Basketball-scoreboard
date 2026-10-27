let homeScore = 0;
let homeScoreEl = document.getElementById("home-score-el");

function homeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homeScoreThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score-el");

function guestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestScoreThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
