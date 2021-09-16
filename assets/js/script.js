document.addEventListener("DOMContentLoaded", function() {
    changeColors().repeat(999, 9999) *999;
});



function changeColors() {
    let colors = [ 'blue', 'purple', 'green', 'gold', 'orange', 'red'];
    let recs = document.getElementsByClassName("cell");
    for(let i = 0; i < recs. length; i++){
        let rand = Math.floor(Math.random()*6);
        let randomColor = colors[rand];
        recs[i]. style. backgroundColor = randomColor;
    }
    }


    let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
         if(level == true) {
             runGame(level);
         } else {
             alert('You need to select a Difficulty Level!');
         }
});



function calculateCorrectAnswer() {
     let box = document.getElementsByClassName("cell");
    for(let i = 0; i < box. length; i++) {
        let redScore = "0";
        let otherScore = "0";
        if(box[i].style.backgroundColor = 'red') {
            redScore + 1;
        } else {
          otherScore + 1;
        }
    }
} 
  let gameType = level;

function runGame(gameType) {
    
    if (gameType === 'easy') {
        changeColors().hide('slow')
    } else if (gameType === 'medium') {
        changeColors().hide('medium')
    } else if (gameType === 'hard'){
        changeColors().hide('fast')
    } else {
        alert('game type unknown!')
    }

}

function difficulty(){
    let level = document.getElementById("levels");
    let easy = level[0];
    let medium = level[1];
    let hard = level[3];
        if (level) {
            level == easy;
        } else if (level){
            level == medium;
        } else if (level){
            level == hard;
        } else {
            alert('You need to select a Difficulty Level!')
        }
}


/*




difficulty()




*/
