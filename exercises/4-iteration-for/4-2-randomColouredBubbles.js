"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
console.log("widht" , width);
console.log("height" , height);

for (let i = 0 ; i < 50 ; i++){
    drawBubbles();
}

function drawBubbles(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    let posX = 200 + Math.random()*(width-400);
    let posY = 200 + Math.random()*(height-400);
    let radius = 10 + Math.random() * 50;

    console.log("posX" , posX);
    console.log("posY" , posY);
    console.log("radius" , radius);

    context.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + 0.5 + ")";
    Utils.fillAndStrokeEllipse(posX , posY , radius , radius);
}