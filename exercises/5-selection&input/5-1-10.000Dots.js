"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
context.fillRect(0,0,width,height);


for(let i = 0 ; i < 100000 ; i++){
    drawDots();
}


function drawDots(){
    let x = Math.random() * width;
    let y = Math.random() * height;

////////////////////////////////////////////////////////////////////

    /* Portugal
    if ( x > width/2){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    }

    else{
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    */

////////////////////////////////////////////////////////////////////


    /* Holland
    if( y < height/3){
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }

    else if( y < 2*height/3){
        context.strokeStyle = "white";
        context.fillStyle = "white";
    }

    else {
        context.strokeStyle = "blue";
        context.fillStyle = "blue";
    }
    */

////////////////////////////////////////////////////////////////////


    /* Red white yellow
    if( x < width/4){
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }

    else if ( x < 3* width/4){
        context.strokeStyle = "white";
        context.fillStyle = "white";
    }

    else{
        context.strokeStyle = "yellow";
        context.fillStyle = "yellow";
    }
    */

////////////////////////////////////////////////////////////////////


    /* green square
    if ( x < 2* width/3 && y < 2* height/3){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    }

    else{
        context.strokeStyle = "white";
        context.fillStyle = "white";
    }
    */


////////////////////////////////////////////////////////////////////

    
    /* blue and white square
    if ( width/4 < x && x < 3*width/4 && y > height/4 && y < 3*height/4){
        context.fillStyle = "white";
    }

    else{
        context.fillStyle = "blue";
    }
    */

////////////////////////////////////////////////////////////////////


    
    let distance = Utils.calculateDistance(width/2 , height/2 , x , y);

    if (distance < 200){
        context.fillStyle = "red";
    }

    else {
        context.fillStyle = "white";
    }

    context.strokeStyle = context.fillStyle;
    Utils.fillAndStrokeCircle(x , y , 2 );
}