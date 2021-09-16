//document.addEventListener("DOMContentLoaded", function() {

//});


let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
return changeColors();
});

//runGame()

//DifficultSetting()

//calculateCorrectAnswer()

//revomeVisibilty()

//checkAnswer()

//incrementScore()

//incrementWrongScore()

//endGame()


function changeColors() {
    let colors = [ 'blue', 'purple', 'green', 'gold', 'orange', 'red'];
    let recs = document.getElementsByClassName("cell");
    for(let i = 0; i < recs. length; i++){
        let rand = Math.floor(Math.random()*6);
        let randomColor = colors[rand];
        recs[i]. style. backgroundColor = randomColor;
    }
    }
    
        
    
//previousScore()

