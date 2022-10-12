"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



let width = context.canvas.width;
let height = context.canvas.height;
console.log("height", height);

let marginW = 50;
let marginH = 50;
console.log("height_without_margins" , height-2*marginH);

drawlines();


function drawlines(){
    
    context.beginPath();
    //juist positioneren
    context.moveTo(marginW , marginH);

    //eerste horizontale lijn
    context.lineTo(width-marginW , marginH);

    //1ste schuine lijn
    context.lineTo(marginW , (height-(2*marginH))/4);
    console.log("einde_schuine_lijn" , (height-(2*marginH))/4);

    //2de horizontale lijn
    context.lineTo(width-marginW , (height-(2*marginH))/4);

    //2de schuine lijn
    context.lineTo(marginW , (height-(2*marginH))/2);
    console.log("einde_schuine_lijn" , (height-(2*marginH))/2);

    //3de horizontale lijn
    context.lineTo(width-marginW , (height-(2*marginH))/2);

    //3de schuine lijn
    context.lineTo(marginW , (height-(2*marginH))*3/4);
    console.log("einde_schuine_lijn" , (height-(2*marginH))*3/4);

    //4de horizontale lijn
    context.lineTo(width-marginW , (height-(2*marginH))*3/4);

    //4de schuine lijn
    context.lineTo(marginW , height-(2*marginH));
    console.log("einde_schuine_lijn" , height-(2*marginH));

    //5de horizontale lijn
    context.lineTo(width-marginW , height-(2*marginH));

    //grote schuine lijn
    context.lineTo(marginW , marginH);

    context.stroke();
}