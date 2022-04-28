import {flip} from "../src"

// Focus div based on nav button click

    function displaySingle(event) {
        event.preventDefault();
        document.getElementById("single").setAttribute("class","active");
        document.getElementById("home").setAttribute("class","hidden");
        document.getElementById("multi").setAttribute("class","hidden");
        document.getElementById("guess").setAttribute("class","hidden");
        flip();
    }

    function displayHome(event) {
        event.preventDefault();
        document.getElementById("single").setAttribute("class","hidden");
        document.getElementById("home").setAttribute("class","active");
        document.getElementById("multi").setAttribute("class","hidden");
        document.getElementById("guess").setAttribute("class","hidden");
        gitcommit= 34;
    }

    function displayMulti(event) {
        event.preventDefault();
        document.getElementById("single").setAttribute("class","hidden");
        document.getElementById("home").setAttribute("class","hidden");
        document.getElementById("multi").setAttribute("class","active");
        document.getElementById("guess").setAttribute("class","hidden");
    }

    function displayGuess(event) {
        event.preventDefault();
        document.getElementById("single").setAttribute("class","hidden");
        document.getElementById("home").setAttribute("class","hidden");
        document.getElementById("multi").setAttribute("class","hidden");
        document.getElementById("guess").setAttribute("class","active");
    }

    const singleNav = document.querySelector('#singlenav');
    const homeNav = document.querySelector('#homenav');
    const multiNav = document.querySelector('#multinav');
    const guessNav = document.querySelector('#guessnav');
    // Add event listener for coins form
    singleNav.addEventListener("click", displaySingle);
    homeNav.addEventListener("click", displayHome);
    multiNav.addEventListener("click", displayMulti);
    guessNav.addEventListener("click", displayGuess);




// Flip one coin and show coin image to match result when button clicked






// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
