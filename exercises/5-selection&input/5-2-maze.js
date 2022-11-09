"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.lineWidth = 5;


let y = 50;



line();



function line(){
    for ( let y = 0 ; y < height ; y = y + 10){
        for (let x = 0 ; x < width ; x = x + 10){
        
            let number = Math.round( Math.random() );

            if (number == 0){
                Utils.drawLine( x , y , x + 10 , y + 10 );
            }

            else if ( y >= 0 ){
                Utils.drawLine(x , y , x + 10 , y - 10 );
            }
        }
    }
}