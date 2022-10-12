"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
console.log("width" , width);
console.log("height" , height);

let marginH = 100;
let marginW = 100;


pattern();


function pattern (){
    //donkerblauwe achtergrond
    context.fillStyle = "#00008b";
    context.fillRect(marginW   ,   marginH   ,   width-2*marginW   ,   (height-2*marginH)*2/3);
    //lichtblauwe onderste balk
    context.fillStyle = "#add8e6";
    context.fillRect(marginW   ,   marginH + (height-2*marginH)*2/3 ,   width-2*marginW   ,   (height-2*marginH)/3);
    //beige kollom
    context.fillStyle = "#a48f7a";
    context.fillRect(marginW + (width-2*marginW)/3   ,   marginH   ,   (width-2*marginW)/3   ,   height - 2*marginH);
    //rood vak
    context.fillStyle = "rgb(255,0,0)";
    context.fillRect(marginW   ,   marginH + (1/4)*((height-2*marginH)*2/3) ,   width-2*marginW   ,   (height-2*marginH)/3);


    console.log("width-marginW" , width-marginW);
    console.log("height-marginH" , height-marginH);
}