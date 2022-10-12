"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



let size = 400;


drawrect(1);
drawrect(2);
drawrect(3);
drawrect(4);
drawrect(5);
drawrect(6);
drawrect(7);
drawrect(8);
drawrect(9);
drawrect(10);


function drawrect (number){

    let red =  Math.round( Math.random() * 255);
    let green =  Math.round( Math.random() * 255);
    let blue =  Math.round( Math.random() * 255);
    console.log("rgb code rechthoek nummer" , number , red,green,blue);
    let color = "rgb("+ red + "," + green + "," + blue + ")";



    context.fillStyle = color;
    context.fillRect(50 + (number-1)* 20   ,   50 + (number-1)* 20   ,   size - (number-1)* 40   ,   size - (number-1)* 40);
}