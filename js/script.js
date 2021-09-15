document.addEventListener("DOMContentLoaded", function() {

});

let running = false;
let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
    if (running) {
        running = false
        changeColors()
    } else {
        running = true
        changeColors()
    }
})

runGame()

DifficultSetting()

calculateCorrectAnswer()

revomeVisibilty()

checkAnswer()

incrementScore()

incrementWrongScore()

endGame()

let colors = [ 'blue', 'purple', 'green', 'gold', 'orange', 'red'];
let recs = document.getElementsByClassName("cells");
let totalColors = colors.length;
let rand = Math.random();
let randIndex = Math.floor(rand * totalColors);
let randomColor = colors[randIndex];


function changeColors() {
    if (running) {
        recs.forEach(color =>{
        color.style.background = randomColor;
    })
    }
    }

previousScore()

