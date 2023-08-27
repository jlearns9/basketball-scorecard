// HOME //
let homeEl = document.getElementById("home-el")
let homeScore = 0

function homeincrement1() {
    homeScore += 1
    homeEl.innerText = homeScore
}

function homeincrement2() {
    homeScore += 2
    homeEl.innerText = homeScore
}

function homeincrement3() {
    homeScore += 3
    homeEl.innerText = homeScore
}

// GUEST //

let guestEl = document.getElementById("guest-el")
let guestScore = 0

function guestincrement1() {
    guestScore += 1
    guestEl.innerText = guestScore
}

function guestincrement2() {
    guestScore += 2
    guestEl.innerText = guestScore
}

function guestincrement3() {
    guestScore += 3
    guestEl.innerText = guestScore
}

// RESET //

function reset() {
    homeScore -= homeScore
    homeEl.innerText = homeScore
    guestScore -= guestScore
    guestEl.innerText = guestScore
}