"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

/* DEEL OEFENING 1
context.fillStyle = "#7dc4e8";
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , height/18);
    }
}
*/


/* DEEL OEFENING 2
context.fillStyle = "rgb(" + 125 + "," + 196 + "," + 232 + "," + 0.5 + ")";
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        let radius = 10 + Math.random()*75;
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , radius);
    }
}
*/


/* DEEL OEFENING 3
context.fillStyle = "rgb(" + 125 + "," + 196 + "," + 232 + "," + 0.5 + ")";
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , j * 5 + 15);
    }
}
*/


/* DEEL OEFENING 4
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        if(i % 2 == 1){
            context.fillStyle = "#7dc4e8";
            context.strokeStyle = "#7dc4e8";  
        }
        else{
            context.fillStyle = "#e87d7d";
            context.strokeStyle = "#e87d7d";
        }
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , height/18);
    }
}
*/


/* DEEL OEFENING 5
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        if(j % 2 == 1){
            context.fillStyle = "#7dc4e8";
            context.strokeStyle = "#7dc4e8";  
        }
        else{
            context.fillStyle = "#e87d7d";
            context.strokeStyle = "#e87d7d";
        }
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , height/18);
    }
}
*/


context.fillStyle = "#7dc4e8";
context.strokeStyle = "#7dc4e8";
for (let j = 0 ; j < 10 ; j++){
    for (let i = 0 ; i < 10 ; i++){
        Utils.fillAndStrokeCircle(i * height/9 , j * height/9 , height/18);
    }
}