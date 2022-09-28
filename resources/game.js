//function to create 100 box
const main = document.getElementById("main");
function gameready() {
    for (var i = 0; i < 100; i++) {
        main.innerHTML += '<div class="cell"></div>';
    }

}
gameready();

//selecting all tags
const player = document.getElementById("player");
const pc = document.getElementById("pc");
const scorecard = document.getElementById("scorecard");
//global variables
var move = 1;//for player board movement
var pcrandom = 1;//pc box moving horizontally left right
var pcdownmove = 1;//pc box moving vertically down
var score = 0;//main score card

//random function for generating random box
function random() {
    pcrandom = (Math.floor(Math.random() * 9) + 1);
    return (pcrandom);
}

//score function to calculate the score
function mainscore() {

    if (pcdownmove == 11 && pcrandom == move) {
        score = score + 10;
    }
    else
        score = score - 100;
}
//game interval box
function gameplay(){
setInterval(() => {
    
    if (pcdownmove <= 10) {
        pc.style.gridRowStart = pcdownmove;
        pcdownmove++;

    }
    else {
        mainscore();
        scorecard.innerText ="Score:- "+score;
        pcdownmove = 1;
        pc.style.gridRowStart = pcdownmove;
        pc.style.gridColumnStart = random();


    }

}, 200);
}
//for moving player board left right
window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key == "ArrowLeft") {
        if (move != 1) {
            move--;
            player.style.gridColumnStart = move;
        }
    }
    if (e.key == "ArrowRight") {
        if (move != 10) {
            move++;
            player.style.gridColumnStart = move;
        }
    }

});

gameplay();