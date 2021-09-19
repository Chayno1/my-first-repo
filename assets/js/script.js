document.addEventListener("DOMContentLoaded", function() {
    changeColors();
});



function changeColors() {
    numberReds = 0;
    let colors = [ 'blue', 'purple', 'green', 'gold', 'orange', 'red'];
    let recs = document.getElementsByClassName("cell");
    for(let i = 0; i < recs. length; i++){
        let rand = Math.floor(Math.random()*6);
        var randomColor = colors[rand];
        if (randomColor == "red") {
            numberReds ++;
        }
        recs[i]. style. backgroundColor = randomColor;
    }
    }




let startButton = document.getElementById("start-game");


startButton.addEventListener('click', function() {
    let difficulty = document.getElementById("diff-options");
    runGame(difficulty.value);
});


function runGame(difficulty) {
    changeColors();
    let displayTime = 0;
    if (difficulty == 'easy'){
        displayTime = 2;    
    } else if (difficulty =='medium'){
        displayTime = 1;
    }else if (difficulty == "hard"){
        displayTime = 0.5;
    }else {
        alert("select diffuclty level!!!");
    }
    setTimeout(hideColors, displayTime * 1000);
};

function hideColors() {
    let recs = document.getElementsByClassName("cell");
    for(let i = 0; i < recs. length; i++){
        recs[i]. style. backgroundColor = "black";
    }
};



/*----------------------Answer functions---------------*/

var correctScore = 0;
var wrongScore = 0;
var numberReds = 0;

function calculateCorrectAnswer() {
    if ( randomColor == 'red') {
        correctScore + 1;
        console.log(correctScore);
     } else {
         wrongScore + 1;
         console.log(wrongScore);
     }
  
}

/*--------checkAnswer()------------*/


let submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener('click', function() {
    let answerBox = document.getElementById("answer-box");
    if (answerBox.value == numberReds) {
        correctScore ++;
        alert("Well Done!! You Guessed Correct!!!");
    } else {
        wrongScore ++;
        alert("Oh No!, that was wrong, try again!!!");
    }
    let score = document.getElementById("score");
    let incorrectScore = document.getElementById("incorrect");

    score.innerText = correctScore;
    incorrectScore.innerText = wrongScore;
});


/*



difficulty()




*/
