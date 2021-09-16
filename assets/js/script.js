document.addEventListener("DOMContentLoaded", function() {
    setTimeout(changeColors() * 5, 99999999999999999);
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
return changeColors();
});



function calculateCorrectAnswer() {
    let box = recs;
    let boxCol = box.getAttribute(backgroundcolor);
    for(let i = 0; i < boxCol. length; i++) {
       return boxCol;
} 
   
    





