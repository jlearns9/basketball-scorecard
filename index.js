let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")
let foulHomeEl = document.getElementById("foul-home-el")
let foulGuestEl = document.getElementById("foul-guest-el")
let periodEl = document.getElementById("period-el")

let scoreHome = 0
let scoreGuest = 0
let foulHome = 0
let foulGuest = 0
let period = 1

function updateScores() {
    if (scoreHome > scoreGuest) {
        scoreHomeEl.classList.add("higher-score");
        scoreGuestEl.classList.remove("higher-score");
    } else if (scoreGuest > scoreHome) {
        scoreGuestEl.classList.add("higher-score");
        scoreHomeEl.classList.remove("higher-score");
    } else {
        scoreHomeEl.classList.remove("higher-score");
        scoreGuestEl.classList.remove("higher-score");
    }
}
// HOME FUNCTIONS //
function homeincrement1() {
    scoreHome += 1
    scoreHomeEl.innerText = scoreHome
    updateScores()
}

function homeincrement2() {
    scoreHome += 2
    scoreHomeEl.innerText = scoreHome
    updateScores()
}

function homeincrement3() {
    scoreHome += 3
    scoreHomeEl.innerText = scoreHome
    updateScores()
}

function homefoulincrement() {
    foulHome += 1
    foulHomeEl.innerText = foulHome
}
// GUEST FUNCTIONS //
function guestincrement1() {
    scoreGuest += 1
    scoreGuestEl.innerText = scoreGuest
    updateScores();
}

function guestincrement2() {
    scoreGuest += 2
    scoreGuestEl.innerText = scoreGuest
    updateScores()
}

function guestincrement3() {
    scoreGuest += 3
    scoreGuestEl.innerText = scoreGuest
    updateScores()
}

function guestfoulincrement() {
    foulGuest += 1
    foulGuestEl.innerText = foulGuest
}
// OTHER //
function periodincrement() {
    period += 1;
    if (period >4) {
        period = 1;
    }
    periodEl.textContent = period;
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    foulHome = 0
    foulGuest = 0
    period = 1
    scoreHomeEl.innerText = scoreHome
    scoreGuestEl.innerText = scoreGuest
    foulHomeEl.innerText = foulHome
    foulGuestEl.innerText = foulGuest
    periodEl.innerText = period
    scoreHomeEl.classList.remove("higher-score");
    scoreGuestEl.classList.remove("higher-score");
}