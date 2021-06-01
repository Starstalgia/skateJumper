var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var skateboardRight= 35;
var skateboardDown= 440;
let baseline=465;
let maxHeight=10;


window.onload = function() {
    drawSkateboard()

};

function drawSkateboard() {
    var img = document.getElementById("skateboard");
    ctx.drawImage(img, skateboardRight, skateboardDown, 100, 25);
    ctx.beginPath();
    ctx.moveTo(0, baseline);
    ctx.lineTo(600, baseline);
    ctx.stroke();
}


document.addEventListener('DOMContentLoaded',() => {
    const skateboard=document.querySelector('.skateboard')
    const gameDisplay=document.querySelector('.game-container')
    const ground= document.querySelector('.street')

    let skateboardLeft= 100
    let skateboardBottom= 0
    let gravity= 2

    function startGame() {
        if (skateboardDown > 6) skateboardDown -= gravity
        skateboard.style.bottom= skateboardBottom + 'px'
        skateboard.style.left= skateboardLeft + 'px'
    }
    let timerId= setInterval(startGame,20)
    function control (e) {
        if (e.keyCode===32) {
            jump()
        }

    }
    function jump() {

      skateboardDown -=50;
        drawSkateboard();

    }
    document.addEventListener('keyup',jump);
})

    // function generateObstacle() {
    //    const obstacle = document.createElement('div');
    //     obstacle.classList.add('obstacle');
    //     gameDisplay.appendChild(obstacle);
    //
    // }
    // generateObstacle()
})
// console.log ()
// if (skateboardDown < maxHeight) skateboardDown -=50