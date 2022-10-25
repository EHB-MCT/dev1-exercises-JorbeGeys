"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    while (i <= 14) {
        let gray = (14 - i) * (255/14) ;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50 + i*22 , 50 + i*11 , 11 , 300 - i*20);
        i++;
    }
}