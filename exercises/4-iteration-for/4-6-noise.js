"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "c:/Me/1ste prof bachler/Multimedia/DEV 1/dev1-exercises-JorbeGeys/scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
alert("hello");

drawSquares();

function drawSquares() {
    let total = width;
    for (let i = 0 ; i < total ; i++){
        let y = Noise.perlinNoise(i/100) * 500;
        context.fillRect(i , y , 2 , 2);
    }
}