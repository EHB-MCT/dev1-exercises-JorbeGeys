"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let space = height / 5;
let positie = [ space/2 , space/2 , space/2 , space/2 , space/2 ];
let stillGoing = true;

setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}

function draw() {
    context.clearRect( 0 , 0 , width , height );

    drawLines();

    for(let k = 0 ; k < 5 ; k++){
        let getal = Math.random() * 10;
        console.log("getal = " , getal);
        positie[k] += getal;

        drawSnail(positie[k], k * space + space/2 , space, k+1);

        if (positie[k] >= width-85){
            context.font = "20px";
            context.fillStyle = Utils.rgb(148,29,28);
            context.fillText("Snail", width/2 - 55, k * space + space/2);
            context.fillText(k+1, width/2 , k * space + space/2);
            context.fillText("wins!", width/2 + 55 , k * space + space/2);
            stillGoing = false;
        }
    }

    if (stillGoing){
        window.requestAnimationFrame(draw);
    }
}




function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}



function drawLines(){
    for (let i = 1 ; i <=5 ; i++){
        if (i % 2 == 0){
            context.fillStyle = Utils.rgb(210 , 210 , 210);
        }

        else{
            context.fillStyle = Utils.rgb(128 , 128 , 127);
        }
        
        context.fillRect(0 , (i-1) * height/5 , width , height/5);
    }
}