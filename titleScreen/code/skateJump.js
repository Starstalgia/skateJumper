var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var skateboardRight = 35;
var skateboardDown = 440;
let baseline = 465;
let maxHeight = 100;
var img = document.getElementById("skateboard");
let gravity = 2;

function startGame() {
    drawGround();
   drawSkateboard();
    document.addEventListener('keyup', control);
    setInterval(handleSkateboard, 20);
}
function handleSkateboard(){

}

function drawGround() {
    ctx.beginPath();
    ctx.moveTo(0, baseline);
    ctx.lineTo(600, baseline);
    ctx.stroke();
    ctx.closePath();
}

function drawSkateboard() {
    ctx.beginPath();
    ctx.drawImage(img, skateboardRight, skateboardDown, 100, 25);
    ctx.stroke();
    ctx.closePath();
}





function control(e) {
    if (e.keyCode === 32) {
        jump();
    }

}

function jump() {

    skateboardDown -= 50;
    drawSkateboard();

}




// function generateObstacle() {
//    const obstacle = document.createElement('div');
//     obstacle.classList.add('obstacle');
//     gameDisplay.appendChild(obstacle);
//
// }
// generateObstacle()

// console.log ()
// if (skateboardDown < maxHeight) skateboardDown -=50