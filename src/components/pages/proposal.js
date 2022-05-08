import React from 'react';
import Sketch from './transparency/Transparency';
import HeaderItem from '../Header';
import TextItem from '../Text';
import YoutubeEmbed from "../YoutubeEmbed";
import '../../App.css';


// Load the image 
import map from '../image/therminology_map.png';
import bill from '../image/bill.png'

// Load the text 
var abstract = require("../Texts/Proposal/abstract.txt");
var literature = require("../Texts/Proposal/literature.txt");
var questions = require("../Texts/Proposal/questions.txt");
var methods = require("../Texts/Proposal/methods.txt");
var significance = require("../Texts/Proposal/significance.txt");
var timeline = require("../Texts/Proposal/timeline.txt");
var bibliography = require("../Texts/Proposal/bibliography.txt");



function Proposal() {  

    return (
      <div>
      <div className='sketch_background'>
        <Sketch ></Sketch>
      </div>
    
      <HeaderItem title = 'UAL PHD Proposal' sub_title = 'Ongoing'></HeaderItem>
      <TextItem title = 'Abstract' text_file = {abstract}></TextItem>
        
      <TextItem title = 'Literature Review' text_file = {literature}></TextItem>
      <img className='img_warp' src= {map} alt="map"/>

      <TextItem title = 'Research Questions' text_file = {questions}></TextItem>
      <img className='img_warp' src= {bill} alt="bill"/>

      <TextItem title = 'Research Methods' text_file = {methods}></TextItem>
      <YoutubeEmbed embedId="VAftJCLrUbU" />

      <TextItem title = 'Significance' text_file = {significance}></TextItem>
      
      <TextItem title = 'Timeline' text_file = {timeline}></TextItem>

      <TextItem title = 'Bibliography' text_file = {bibliography}></TextItem>

      </div>
    );
  }

export default Proposal;