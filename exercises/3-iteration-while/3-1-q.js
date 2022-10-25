"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 6;
    while (i >= 0) {
        let gray = (6 - i)*(255/6);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        let radius = 25;
        Utils.fillAndStrokeCircle(200, 200, i*radius);
        i--;
        console.log(i);
    }
}