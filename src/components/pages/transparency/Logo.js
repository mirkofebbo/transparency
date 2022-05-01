import React, {Component} from 'react';
import Sketch from "react-p5";

let loadData;


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
        
        this.min_radius      = 50;
        this.max_radius      = 350;
        this.random_speed    = [];
    }

    preload(p5, data) {
        this.loadData =  data;
    }
    
    setup(p5){
      this.data[0] = this.loadData.ecomnomy;
      this.data[1] = this.loadData.social;
      this.data[2] = this.loadData.ecology;
      
      this.size = this.loadData.length;
      this.center = p5.createVector(0, 0, -50);
      this.col = p5.color(0);
      

      var alpha = 255;
      this.sectorColor = [p5.color(0, 155, 255, alpha),
                          p5.color(255, 155, 0, alpha),
                          p5.color(35, 155, 15, alpha)
      ];    

      for(let i = 0; i < this.data.length; i++){
        this.random_speed[i] = [];
        for(let j = 0; j < this.data[i].length; j++){
          this.random_speed[i][j] = p5.random(0.5);
        }
      }
    }
    
    display(p5){

      for (var sector = 0; sector < 3; sector++) {
        this.depth = 0;

        for (var index = 0; index < this.data[sector].length; index++) {

          this.col = this.sectorColor[sector];
          var score = this.data[sector][index];
          var spacing = sector * 120;
          this.startingAngle = p5.map(score, p5.min(this.data[sector]), p5.max(this.data[sector]), spacing, spacing +120, true);
          this.endAngle = p5.map(score, p5.max(this.data[sector]), p5.min(this.data[sector]), this.startingAngle, spacing +120, true);
          this.smallRadious = p5.map(score, p5.min(this.data[sector]), p5.max(this.data[sector]), this.min_radius, this.max_radius, true);
          this.largeRadious = p5.map(score*2, p5.min(this.data[sector]), p5.max(this.data[sector]), this.min_radius, this.max_radius, true);
          this.depth = index*10;

          // this.startingAngle =  p5.round(this.startingAngle + p5.frameCount*this.random_speed[sector][index], 2);
          // this.endAngle =  p5.round(this.endAngle + p5.frameCount*this.random_speed[sector][index], 2);
          
          this.shape(p5);
        }
      }
    }
    
     shape(p5) {
      var x1, y1, z1;
      var x2, y2, z2;
      var x3, y3, z3;

      p5.stroke(this.col);
      p5.noFill();
      p5.strokeWeight(1);
  
      p5.beginShape();
      //no curveVertex for me 
      for (var a = this.startingAngle; a <= this.endAngle; a++) {
        x1 = this.center.x + this.smallRadious*p5.cos(p5.radians(a));
        y1 = this.center.y + this.smallRadious*p5.sin(p5.radians(a));
        z1 = this.center.z + this.depth;
        p5.vertex(x1, y1, z1);
      }
      for (var a3 = this.endAngle; a >= this.startingAngle; a--) {
        x2 = this.center.x + this.largeRadious*p5.cos(p5.radians(a));
        y2 = this.center.y + this.largeRadious*p5.sin(p5.radians(a));
        z2 = this.center.z +  this.depth;
        p5.vertex(x2, y2, z2);
      }
      x3 = this.center.x + this.smallRadious*p5.cos(p5.radians(this.startingAngle));
      y3 = this.center.y + this.smallRadious*p5.sin(p5.radians(this.startingAngle));
      z3 = this.center.z +  this.depth;


      p5.vertex(x3, y3, z3);

      p5.endShape();
    }
  }
