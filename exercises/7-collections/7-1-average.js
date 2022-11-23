"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let som = 0;
let lijst = [];


for (let i = 0 ; i < 100 ; i++){
    numberGenerator(i);
}
calculateAverage(lijst);



function numberGenerator(j){
    let getal = Math.round(Math.random()) * 100;
    lijst[j] = getal;
    console.log("random getal = ",getal);
}

function calculateAverage (array){
    for (var number of lijst){
        som += number;
        
    }
    console.log("som = ",som);
    let gemiddelde = som/lijst.length;
    console.log("gemiddelde = ",gemiddelde);
}