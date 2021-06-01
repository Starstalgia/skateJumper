
var skateboardRight= 35;
var skateboardDown= 440;
let baseline=465;
let maxHeight=5;


window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // ctx.translate(0,250);
    // ctx.scale(1,-1);
    var img = document.getElementById("skateboard");
    ctx.drawImage(img, skateboardRight, skateboardDown, 100, 25);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, baseline);
    ctx.lineTo(600, baseline);
    ctx.stroke();
};




document.addEventListener('DOMContentLoaded',() => {
    const box=document.querySelector('.box')
    const gameDisplay=document.querySelector('.game-container')
    const ground= document.querySelector('.street')

    let boxLeft= 100
    let boxBottom= 0
    let gravity= 2

    function startGame() {
        if (skateboardDown > 6) skateboardDown -= gravity
        box.style.bottom= boxBottom + 'px'
        box.style.left= boxLeft + 'px'
    }
    let timerId= setInterval(startGame,20)
    function control (e) {
        if (e.keyCode===32) {
            jump()
        }

    }
    function jump() {
       if (skateboardDown < maxHeight) skateboardDown -=50
        skateboardDown -=50
        console.log ()
    }
    document.addEventListener('keyup',control)


    // function generateObstacle() {
    //    const obstacle = document.createElement('div');
    //     obstacle.classList.add('obstacle');
    //     gameDisplay.appendChild(obstacle);
    //
    // }
    // generateObstacle()
})