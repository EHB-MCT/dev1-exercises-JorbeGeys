"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

for (let i = 0 ; i < 100 ; i++){
    drawLines();
}

drawRandomText();
drawText();
drawSquare();





function drawSquare(){
    context.fillRect(0 , 0 ,width , 100);
    context.fillRect(0 , height - 100 ,width , 100);
    context.fillRect(0 , 0 , 100 , height);
    context.fillRect(width - 100 , 0 , 100 , height);


    let amount = (height - 200) / 2 ;
    let space = (width - 200) / 2;

    for (let j = 1 ; j <= amount ; j++){
        context.strokeStyle = "black";
        Utils.drawLine(100 , 100 + j , width/2 - (space/amount)*j , 100 + j);
        Utils.drawLine(100 , height/2 + j , 100 + (space/amount)*j , height/2 + j);
        Utils.drawLine(width/2 + (space/amount)*j , 100 + j, width-100 , 100 + j);
        Utils.drawLine(width - 100 - (space/amount)*j , height/2 + j , width-100 , height/2 + j);
    }
}


function drawLines(){
    let y1 = Math.random() * height;
    let y2 = Math.random() * height;
    let dikte = Math.random() * 15;
    let kleur = Math.random() * 255;
    console.log(dikte);

    context.strokeStyle = Utils.rgb(kleur , kleur , kleur);
    context.lineWidth = dikte;
    Utils.drawLine(0 , y1 , width , y2);
}


function drawRandomText(){

}


function drawText(){

}