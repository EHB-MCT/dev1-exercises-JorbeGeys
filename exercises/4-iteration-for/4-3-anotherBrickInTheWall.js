"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "#8b0000";

for (let j = 1 ; j <=6 ; j++){
    for (let i = 1 ; i <=6 ; i++){
        if(j % 2 == 1){
            context.fillRect(100 * i + 5*(i-1) , 50*j + 5*(j-1) ,  100 , 50);
        }

        else{
            context.fillRect(100 * i + 5*(i-1) + 50 , 50*j + 5*(j-1) ,  100 , 50);
        }
    }
}