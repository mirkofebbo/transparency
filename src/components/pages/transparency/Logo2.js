import React, {Component} from 'react';
import Sketch from "react-p5";


export default class Logo extends React.Component {

    constructor() {
        super();
        this.sectorColor     = [];
        this.data            = [];
        this.loadData        = {};

        this.size            = 20;
        this.center          = 0;
        this.col             = 0;

        this.startingAngle   = 0;
        this.endAngle        = 0;
        this.angle           = 0;
        this.radious         = 0;
        this.smallRadious    = 0;
        this.largeRadious    = 0;
        this.depth           = 0;
        
        this.min_radius      = 10;
        this.max_radius      = 500;
        this.random_speed    = [];

        this.companyName     = '';
    }

    preload(p5, data) {
        this.loadData =  data;
    }
    
    setup(p5){
        this.data[0] = [];
        this.data[1] = [];
        this.data[2] = [];
        this.data[3] = [];


        for(var key in this.loadData.company){
            this.data[0].push(this.loadData.company[key]);
        }
        for(var key in this.loadData.section){
            this.data[1].push(this.loadData.section[key]);
        }
        for(var key in this.loadData.area){
            this.data[2].push(this.loadData.area[key]);
        }
        for(var key in this.loadData.sentiment){
            this.data[3].push(this.loadData.sentiment[key]);
        }
        this.companyName = 
        this.size = this.loadData.length;
        this.center = p5.createVector(0, 0, -50);
        this.col = p5.color(0);
        
        this.sectorColor = [[204, 100, 100],
                            [36, 100, 100],
                            [111, 100, 100]
        ];    
    }
    
    display(p5, selection){

        let sector = 0;
        let area = 0;
        let sentiment = 0;
        this.depth = 0;
        let width = 0;
        let height = 0;
        

        for (var i = 0; i < this.data[0].length; i++) {

            if(i%3 === 0) this.depth += 20;
            if(this.data[1][i] === 'economic') sector = 0;
            else if(this.data[1][i] === 'social') sector = 1;
            else if(this.data[1][i] === 'environment') sector = 2;
            this.companyName = this.data[0][i];
            area = this.data[2][i];
            sentiment = this.data[3][i];
            var spacing = sector * 120;
            if(sentiment < 0){
                sentiment = (sentiment*-1)*0.01;
                width = area*(1+sentiment);
                height = area*sentiment;
                this.col[1] = p5.map(sentiment, 0, 1, 50, 100);
            } else {
                sentiment = (sentiment)*0.01;
                height = area*(1+sentiment);
                width = area*sentiment;
                this.col[2] = p5.map(sentiment, 0, 1, 50, 100);
            }
        
            if(selection == 'na'){
                this.col = this.sectorColor[sector];
            } else {
                this.col = [this.sectorColor[sector][0], 20, 100]
            }
            this.startingAngle = p5.map(p5.noise((p5.frameCount * 0.0005) + (i *1000)),0,1, spacing, spacing + 120 - width);
            this.endAngle = this.startingAngle + width;
            
            this.smallRadious = p5.map(p5.noise((p5.frameCount * 0.0005) + (i *6000)),0,1, this.min_radius, this.max_radius - height);
            this.largeRadious = this.smallRadious + height;

            this.shape(p5, i);
            
        }
    }
    
    shape(p5, index) {
        var x1, y1, z1;
        var x2, y2, z2;
        var x4, y4, z4;

        p5.colorMode(p5.HSB, 100, 100);

        p5.stroke(this.col[0], this.col[1], this.col[2]);
        // p5.fill(this.col[0], this.col[1], this.col[2], 100);
        p5.noFill();
        p5.strokeWeight(2);

        p5.beginShape();
        //no curveVertex for me 
        for (var a = this.startingAngle; a <= this.endAngle; a++) {
            x1 = this.center.x + this.smallRadious*p5.cos(p5.radians(a));
            y1 = this.center.y + this.smallRadious*p5.sin(p5.radians(a));
            z1 = this.center.z + this.depth;
            p5.vertex(x1, y1, z1);
        }

        for (var a = this.endAngle+1; a >= this.startingAngle; a--) {
            x2 = this.center.x + this.largeRadious*p5.cos(p5.radians(a));
            y2 = this.center.y + this.largeRadious*p5.sin(p5.radians(a));
            z2 = this.center.z +  this.depth;
            p5.vertex(x2, y2, z2);
        }

        // x3 = this.center.x + this.smallRadious*p5.cos(p5.radians(this.startingAngle));
        // y3 = this.center.y + this.smallRadious*p5.sin(p5.radians(this.startingAngle));
        // z3 = this.center.z +  this.depth;
        // p5.vertex(x3, y3, z3);

        x4 = this.center.x + this.largeRadious*p5.cos(p5.radians(this.startingAngle));
        y4 = this.center.y + this.largeRadious*p5.sin(p5.radians(this.startingAngle));
        z4 = this.center.z +  this.depth;
        p5.vertex(x4, y4, z4);

        // p5.line(x3, y3, z3, x4, y4, z4);
        p5.endShape(p5.CLOSE);

        // this.textScreen[index].text(this.companyName,10,10)

        // p5.push();
        // p5.drawingContext.disable(p5.drawingContext.DEPTH_TEST)
        // p5.drawingContext.enable(p5.drawingContext.BLEND)
        // // p5.rotateZ();
        // p5.translate(0, 0, z4);
        // p5.image(this.textScreen[index], x4, y4)
        // p5.drawingContext.enable(p5.drawingContext.DEPTH_TEST)

        // p5.pop();

    }
  }
