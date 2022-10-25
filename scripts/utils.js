"use strict";

import context from "../../scripts/context.js";

/**
 * 
 * @param {number} x1 x coordinate of the starting point
 * @param {number} y1 y coordinate of the starting point
 * @param {number} x2 x coordinate of the end point
 * @param {number} y2 y coordinate of the end point
 */

export function drawLine (x1 , y1 , x2 , y2){
    context.beginPath();
    context.moveTo(x1 , y1);
    context.lineTo(x2 , y2);
    context.stroke();
}


export function strokeCircle (x1 , y1 , r){
    context.beginPath();
    context.ellipse(x1 , y1 , r , r , Math.PI * 2 , 0 , Math.PI * 2);
    context.stroke();
}


export function rgb(r , g , b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}


export function fillAndStrokeCircle (x , y , r){
    strokeCircle(x , y , r);
    //context.fillstyle = "grey";
    context.fill();
}

export function fillAndStrokeEllipse (x , y , rx , ry){
    context.beginPath();
    context.ellipse(x , y , rx , ry , Math.PI * 2, 0 , Math.PI * 2);
    context.stroke();
    context.fill();
}