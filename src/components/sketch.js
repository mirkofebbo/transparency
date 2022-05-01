import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

// motion speed;
let noise_speed = 0;
let speed = 0.005;

// rectangles info
let num_rect = 50;
let max_width = 200;
let max_height = 200;
let page_max_width = 200;

// Array of objects
let my_rectangles = [];
let xyz;

export default (props) => {
    const [p5, setP5] = useState();

    // Just register event as mounted
    useEffect(() => {
        window.addEventListener("resize", windowResized);
             
        return () => window.removeEventListener("resize", windowResized);
    }, []);

	const setup = (p5, canvasParentRef) => {
        setP5(p5)
        max_width   =  window.innerWidth*0.2;
        max_height  =  window.innerHeight*0.2;
        // use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        page_max_width =  window.innerWidth*0.315;
        p5.createCanvas(page_max_width, window.innerHeight).parent(canvasParentRef)
        // xyz = p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)

        // //Calculation to center the canvas 
        // let x = (p5.windowWidth - p5.width) / 2;
        // let y = (p5.windowHeight - p5.height) / 2;
        // xyz.position(x, y);
      
        p5.rectMode(p5.CENTER);

        for(let i = 0; i < num_rect; i ++){
            
            let x = p5.random(0, 1);
            let y = p5.random(0, 1);
            let temp_pos = new p5.createVector(x, y);
            let temp_size = new p5.createVector(p5.random(max_width), p5.random(max_height));
            let temp = new my_rectangle(p5, temp_pos, temp_size);

            my_rectangles.push(temp);
        }

        for(let i = 0; i < num_rect; i ++){
            my_rectangles[i].setup(p5);
        }
	};

	const draw = (p5) => {
		p5.background(255);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
        for(let i = 0; i < num_rect; i ++){
            my_rectangles[i].display(p5, i, noise_speed);    
        }
        noise_speed += speed;
    };
    
  function windowResized(p5) {
        // keep in mind, `p5` can be `undefined`
        // so check it before using
        if (p5) {
            page_max_width =  window.innerWidth*0.3;
            p5.resizeCanvas(page_max_width, window.innerHeight);
        }        
    }
      

    class my_rectangle{
  
        constructor(p5, pos, size){
            this.relative_pos = pos;
            this.my_col = p5.color(255, 165, 10, 100);
            this.size = size;
        }
      
        setup(p5){
        
            this.my_noise = new p5.createVector(0,0);
            this.my_size = new p5.createVector(0,0);
            this.my_pos = new p5.createVector(0,0);
            this.my_max_size = new p5.createVector(0,0);
        }
      
        display(p5, index, my_noise_speed){

            let padding = 5;
            this.my_max_size.x = p5.map(this.size .x, 0, max_width, 0, page_max_width/2);
            this.my_max_size.y = p5.map(this.size .y, 0, max_height, 0, window.innerHeight/2);

            this.my_pos.x = p5.map(this.relative_pos.x, 0, 1, 0, page_max_width*1.5);
            this.my_pos.y = p5.map(this.relative_pos.y, 0, 1, 0, window.innerHeight*1.5);

            if(this.my_pos.x - (this.my_max_size.x/2) <= 0) this.my_pos.x += (this.my_max_size.x/2) + padding;
            if(this.my_pos.x + (this.my_max_size.x/2) >= page_max_width) this.my_pos.x -= (this.my_max_size.x/2) - padding;
            if(this.my_pos.y - (this.my_max_size.y/2) <= 0) this.my_pos.y += (this.my_max_size.x/2) + padding;
            if(this.my_pos.y + (this.my_max_size.y/2) >= window.innerHeight) this.my_pos.y -= (this.my_max_size.y/2) - padding;
            

            this.my_noise.x = p5.noise((index*100)+my_noise_speed);
            this.my_noise.y = p5.noise((index*100)+my_noise_speed+1000);
      
            this.my_size.x = p5.map(this.my_noise.x,0,1,10,this.my_max_size.x)
            this.my_size.y = p5.map(this.my_noise.y,0,1,10,this.my_max_size.y)
            
            p5.fill(this.my_col);
            p5.stroke(255);
            // noStroke();
            p5.rect(this.my_pos.x, this.my_pos.y, this.my_size.x, this.my_size.y, 5);
        }
      }

	return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};