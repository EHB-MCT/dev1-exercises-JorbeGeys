"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName (){
    context.lineWidth = 5;

    //draw letter J
    context.strokeStyle = "red";
    context.beginPath();

    context.moveTo(300,300);
    context.lineTo(300,500);
    context.lineTo(250,525);
    context.lineTo(200,500);
    
    context.stroke();


    //draw letter O
    context.strokeStyle = "yellow";
    context.beginPath();

    context.moveTo(400,300);
    context.lineTo(400,500);
    context.lineTo(500,500);
    context.lineTo(500,300);
    context.lineTo(400,300);

    context.stroke();


    //draw letter R
    context.strokeStyle = "blue";
    context.beginPath();

    context.moveTo(600,500);
    context.lineTo(600,300);
    context.lineTo(700,300);
    context.lineTo(700,400);
    context.lineTo(600,400);
    context.lineTo(700,500);

    context.stroke();


    //draw letter B
    context.strokeStyle = "green";
    context.beginPath();

    context.moveTo(800,400);
    context.lineTo(800,300);
    context.lineTo(900,300);
    context.lineTo(900,500);
    context.lineTo(800,500);
    context.lineTo(800,400);
    context.lineTo(900,400);

    context.stroke();


    //draw letter E
    context.strokeStyle = "purple";
    context.beginPath();

    context.moveTo(1100,300);
    context.lineTo(1000,300);
    context.lineTo(1000,500);
    context.lineTo(1100,500);
    context.moveTo(1000,400);
    context.lineTo(1100,400);

    context.stroke();
}