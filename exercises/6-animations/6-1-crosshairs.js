"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let dikte = 5;
context.fillStyle = "red";


window.onmousemove = move;

function move(eventData){
    context.clearRect(0,0,width,height);

    let x = eventData.pageX;
    let y = eventData.pageY;

    console.log("x = ", x);
    console.log("y = ", y);
    
    context.fillRect(x , 0 , dikte , height);
    context.fillRect(0 , y , width , dikte);
}