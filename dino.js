const idleDino=document.getElementById("idleDino")
const dino = document.getElementById("dino");
const deadDino=document.getElementById("deadDino")

const gameArea = document.getElementById("game");
const startGameArea=document.getElementById("start")
const newGameArea=document.getElementById("gameOver")

const reload_btn=document.getElementById("reload")
const start_btn=document.getElementById("startBtn")

let scoreElement;
let currentScore = 0;

//Show the corect gameArea
startGameArea.style.display='block';

newGameArea.style.display='none';
gameArea.style.display='none';


idleDino.classList.add("idle")

// Create and display the start message
const startMessage = document.createElement('div');
startMessage.classList.add("startMessage")
startMessage.innerText = 'START';

document.body.appendChild(startMessage);

function info(){
    alert("Press the space bar to jump over the obstacles and earn points!")
}
function start(){
    //hide start screen + text
    startGameArea.style.display='none';
    startMessage.style.display='none';
    start_btn.style.display='none'

    //show normal game screen
    gameArea.style.display='block';

    // Start running animation as soon as the game begins
    dino.classList.add("run");

    scoreElement= document.getElementById('score');
    scoreElement.innerText(scoreElement.innerText = `Points: ${currentScore}`);
}

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 600); // Increased time to make the dino stay in the air longer

        //update score after succesful jump
        currentScore+=1;
        scoreElement.innerText = `Points: ${currentScore}`;
    }
}

// Listen for keydown event to trigger jump
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.key === " ") {
        jump();
    }
});

function handleGameOver() {
    // Hide the game content
    gameArea.style.display = 'none';

    //Create new gameArea to display the gameOver text + animation
    newGameArea.style.display='block'

    // Create and display the game over message
    const message = document.createElement('div');
    message.classList.add("gameOverMessage")
    message.innerText = 'GAME OVER';

    document.body.appendChild(message);

    // Clear the interval if it was set
    if (typeof interval !== 'undefined') {
        clearInterval(interval);
    }
    deadDino.classList.add("die")

    //Show the end score
    scoreElement= document.getElementById('endScore');
    scoreElement.innerText = `Points: ${currentScore}`;

}


// Collision detection logic
let checkAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // Loop through all active obstacles for collision detection
    document.querySelectorAll(".tree, .forest, .snowman").forEach(function(obstacle) {
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

        // Collision detection: Adjust values to match the obstacle dimensions and Dino position
        if (obstacleLeft > 0 && obstacleLeft < 70 && dinoTop >= 140) {
            handleGameOver()
            
        }
    });
}, 10);

function refresh(){
        window.location.reload();
}
