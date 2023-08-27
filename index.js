document.addEventListener('DOMContentLoaded', (event) => {

    let homeEl = document.getElementById("home-el");
    let homeScore = 0;

    let guestEl = document.getElementById("guest-el");
    let guestScore = 0;

    function incrementScore(target, value) {
        if (target === 'home') {
            homeScore += value;
            homeEl.innerText = homeScore;
        } else if (target === 'guest') {
            guestScore += value;
            guestEl.innerText = guestScore;
        }
    }

    function reset() {
        homeScore = 0;
        guestScore = 0;
        homeEl.innerText = homeScore;
        guestEl.innerText = guestScore;
    }

    window.homeincrement1 = function() {
        incrementScore('home', 1);
    }

    window.homeincrement2 = function() {
        incrementScore('home', 2);
    }

    window.homeincrement3 = function() {
        incrementScore('home', 3);
    }

    window.guestincrement1 = function() {
        incrementScore('guest', 1);
    }

    window.guestincrement2 = function() {
        incrementScore('guest', 2);
    }

    window.guestincrement3 = function() {
        incrementScore('guest', 3);
    }

    window.reset = reset;

});