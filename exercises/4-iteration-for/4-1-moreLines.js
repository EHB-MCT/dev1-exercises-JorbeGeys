"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.strokeStyle = "white";

setup();
drawLines();

function setup(){
    context.fillStyle = "#ffa500";
    context.fillRect(0 , 0, width , height);
}

function drawLines(){
    for (let i = 0 ; i <= 60 ; i++){
        Utils.drawLine(i*(width/60) , 0 , width - i*(width/60) , height);
        if (i <= 30 ){
            Utils.drawLine(0 , i*(height/30) , width , height - i*(height/30));
        }
    }
}