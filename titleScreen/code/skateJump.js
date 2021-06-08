let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let skateboardRight = 35;
let skateboardDown = 440;
let baseline = 465;
let maxHeight = 100;
let obstacleY = 435;
let img = document.getElementById("skateboard");
let gravity = 4;
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
    skateboardDown -= 70;
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

}

function drawObstacle(draw = true) {
    if (draw) {
        ctx.fillStyle = "black";
    } else {
        ctx.fillStyle = "white";
    }
    ctx.beginPath();
    ctx.fillRect(obstacleY, 434, 30, 30);
    ctx.stroke();
}


