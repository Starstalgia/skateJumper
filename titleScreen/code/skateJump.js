let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let skateboardRight = 35;
let skateboardDown = 440;
let baseline = 465;
let maxHeight = 100;
let obstacleX = randBetween(400,300)
let obstacleY= 435;
let img = document.getElementById("skateboard");
let gravity = 5;
setInterval (handleTime, 20);
document.addEventListener('keyup', control);

function startGame() {
    drawGround();
    drawSkateboard();
    drawObstacle();
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
    eraseSkateboard();
    skateboardDown -= 100;
    drawSkateboard();


}

function eraseSkateboard() {
    ctx.clearRect(skateboardRight, skateboardDown, 100, 25)
}

function handleTime() {
    if (skateboardDown < baseline - 30) {
        eraseSkateboard();
        skateboardDown += gravity;
        drawSkateboard();
    }

    if (obstacleY > -20) {
        drawObstacle(false);
        obstacleY -= 10;
        drawObstacle(true);

    }
    else {drawObstacle(false);

    }
    if (randBetween(50,1000)>995){
    newBlock();
    }

}

function drawObstacle(draw = true) {
    if (draw) {
        ctx.fillStyle = "black";
    } else {
        ctx.fillStyle = "white";
    }
    ctx.beginPath();
    ctx.fillRect(obstacleY, obstacleX, 30, 30);
    ctx.stroke();
}


function randBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function newBlock() {
     obstacleX = randBetween(400,434)
     obstacleY= 435;
}