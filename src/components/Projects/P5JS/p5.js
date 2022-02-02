import React from 'react';
import Sketch from "react-p5";

/* let x = 50;
let y = 50; */

const P5 = (props) => {

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        //p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.createCanvas(1350, 655).parent(canvasParentRef);
        p5.background(100);

    };

    const draw = (p5) => {
        //p5.fill(255, 0, 0);
        //p5.text("hello world!", 50, 50)
        p5.fill(200, 50, 8);
        p5.ellipse(50, 50, 20, 20);
        p5.fill(20, 250, 8);
        p5.ellipse(250, 250, 20, 20);
        p5.fill(20, 150, 250);
        p5.ellipse(450, 450, 20, 20);
        //p5.background(1);
        //p5.ellipse(x, y, 70, 70);
        //p5.background(255, 0, 0);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        //x++;
    };

    return <Sketch setup={setup} draw={draw} />;
}

export default P5;