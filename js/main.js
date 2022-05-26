var canvas = document.createElement("canvas");
b = canvas.getContext("2d");
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-10;

document.body.appendChild(canvas);
b.fillStyle ="black";
b.fillRect (0,0, canvas.width, canvas.height);

var posinX = 200;
var posinY = 200;

dx = 0;
dy = 0;
var height = window.innerHeight;
var width = window.innerWidth;

setInterval(function (){
    b.fillStyle ="black";
    

    posinX += dx;
    posinY += dy;

    if(posinX > width - 30){
        dx = 0;
        posinX = width -30;
    }
    else if(posinX < 0){
        dx = 0;
        posinX = 0;
    }
    else if(posinY > height-25){
        dy = 0;
        posinY = height-25;
    }
    else if( posinY < 0){
        dx = 0;
        posinY = 0
    }

    b.fillStyle ="white";
    b.fillRect(posinX,posinY,10,10);
    
}, 20)

window.addEventListener("keydown",function(event){

    switch(event.keyCode){
        case 37:
            dx= -10;
            dy = 0;
            break;
        case 38:
            dx = 0;
            dy = -10;
            break;
        case 39:
            dx = 10;
            dy = 0;
            break;
        case 40:
            dx = 0;
            dy = 10;
            break;
        case 32:
            dx = 0;
            dy = 0;
    }

}, true)


