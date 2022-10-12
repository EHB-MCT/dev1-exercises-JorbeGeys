"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



let width = context.canvas.width;
let height = context.canvas.height;
console.log("height", height);

let marginW = 50;
let marginH = 200;
console.log("height_without_margins" , height-2*marginH);

drawlines();


function drawlines(){
    
    context.beginPath();
    //juist positioneren
    context.moveTo(marginW , marginH);

    //eerste horizontale lijn
    context.lineTo(width-marginW , marginH);

    //1ste schuine lijn
    context.lineTo(marginW , marginH +(height-(2*marginH))/4);
    console.log("einde_schuine_lijn" , marginH + (height-(2*marginH))/4);

    //2de horizontale lijn
    context.lineTo(width-marginW , marginH + (height-(2*marginH))/4);

    //2de schuine lijn
    context.lineTo(marginW , marginH + (height-(2*marginH))/2);
    console.log("einde_schuine_lijn" , marginH + (height-(2*marginH))/2);

    //3de horizontale lijn
    context.lineTo(width-marginW , marginH + (height-(2*marginH))/2);

    //3de schuine lijn
    context.lineTo(marginW , marginH + (height-(2*marginH))*3/4);
    console.log("einde_schuine_lijn" , marginH + (height-(2*marginH))*3/4);

    //4de horizontale lijn
    context.lineTo(width-marginW , marginH + (height-(2*marginH))*3/4);

    //4de schuine lijn
    context.lineTo(marginW , height-marginH);
    console.log("einde_schuine_lijn" , height-marginH);

    //5de horizontale lijn
    context.lineTo(width-marginW , height-marginH);

    //grote schuine lijn
    context.lineTo(marginW , marginH);

    context.stroke();
}