"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height; 
let x = 100;
let dX = 1;
let y = 100;
let dY = 1;
let setting = 1;
let isPlaying = true;

setup();
update();

function setup(){
    
}



function update(){  
    context.clearRect(0 , 0, width,height);
    context.fillStyle = "blue";
    context.strokeStyle = "blue";

    movingBubble();

    window.onclick = stop;

    window.requestAnimationFrame(update);
}


function movingBubble(){
    x = x + dX;
    y = y + dY;

    if (y + dY >= height  || y + dY <= 0){
        dY = -dY;
    }

    if (x + dX >= width  || x + dX <= 0){
        dX = -dX;
    }
    
    if (isPlaying){
        Utils.fillAndStrokeCircle(x , y , 75);
    }
}


function stop(eventData){
    let mouseX = eventData.pageX;
    let mouseY = eventData.pageY;
    

    console.log(" mouse x = ", x -mouseX);
    console.log(" mouse y = ", y - mouseY);

    isPlaying = false;

    if (Math.abs(x - mouseX) < 38  && Math.abs(y - mouseY) < 38 ){
        console.log("bots");
        context.fillStyle = "red";
        context.strokeStyle = "red";
        Utils.fillAndStrokeCircle(mouseX , mouseY , 30);
    }
}