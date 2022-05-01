import React from 'react';
import Sketch from './transparency/Transparency';
import HeaderItem from '../Header';
import TextItem from '../Text';
import YoutubeEmbed from "../YoutubeEmbed";
import '../../App.css';

//image imports 
import bill from '../image/bill.png'
import map from '../image/therminology_map.png'
import subsidy from '../image/subsidy.png'
import query from '../image/query.png'
import tot from '../image/tot_text.png'
import model_selection from '../image/model_selection.png'
import T_SNE from '../image/T_SNE.png'
import PCA from '../image/PCA.png'
import bandwidth from '../image/bandwidth.jpeg'
import coxcomb from '../image/coxcomb.jpeg'
import tot_user from '../image/tot_user.png'
import general from '../image/general.png'
import pay from '../image/pay.png'
import info from '../image/info.png'
// import bandwidth from '../image/bandwidth.jpeg'
// import bandwidth from '../image/bandwidth.jpeg'

// text imports
var intro = require("../Texts/intro.txt");
var literature = require("../Texts/literature.txt")
var methodology = require("../Texts/methodology.txt")
var data1 = require("../Texts/data1.txt")
var data2 = require("../Texts/data2.txt")
var data3 = require("../Texts/data3.txt")
var data4 = require("../Texts/data4.txt")
var sentiment = require("../Texts/sentiment.txt")
var visualisation1 = require("../Texts/visualisation1.txt")
var visualisation2 = require("../Texts/visualisation2.txt")
var visualisation3 = require("../Texts/visualisation3.txt")
var survey1 = require("../Texts/survey1.txt")
var survey2 = require("../Texts/survey2.txt")
var survey3 = require("../Texts/survey3.txt")
var survey4 = require("../Texts/survey4.txt")
var survey5 = require("../Texts/survey5.txt")

var conclusion = require("../Texts/conclusion.txt")
var bibliography = require("../Texts/bibliography.txt")

function Dissertation() {  

    return (
      <>
      <div className='sketch_background'>
        <Sketch ></Sketch>
      </div>
    
      <HeaderItem title = 'Visually Interpreting Hyper-humans' sub_title = 'Hyper-human terminology is tredmark'></HeaderItem>
      <TextItem title = 'Intoduction' text = {intro}></TextItem>

      <HeaderItem title = 'Literature Review' sub_title = 'Conceptual research'></HeaderItem>
      <TextItem title = '' text = {literature}></TextItem>
      <img className='img_warp' src= {map} alt="map"/>

      <HeaderItem title = 'Methodology' sub_title = 'Techniques and tools'></HeaderItem>
      <TextItem title = '' text = {methodology} ></TextItem>
      <img className='img_warp' src= {bill} alt="bill"/>
      <TextItem title = 'Data' text = {data1} ></TextItem>
      <img className='img_warp' src= {subsidy} alt="data_sub"/>
      <TextItem title = '' text = {data2} ></TextItem>
      <img className='img_warp' src= {query} alt="data_sub"/>
      <TextItem title = '' text = {data3} ></TextItem>
      <YoutubeEmbed embedId="AjcRvkq-lZw " />
      <div className='clearfix'>
          <img src= {tot} className='img_container' alt="tot"  />
          <img src= {model_selection} className='img_container' alt="models"  />
      </div>
      <TextItem title = '' text = {data4} ></TextItem>
      <div className='clearfix'>
          <img src= {T_SNE} className='img_container' alt="tot"  />
          <img src= {PCA} className='img_container' alt="models"  />
      </div>
      <TextItem title = 'Sentiment Analysis' text = {sentiment} ></TextItem>
      <TextItem title = 'Visualisation' text = {visualisation1} ></TextItem>
      <img className='img_warp' src= {bandwidth} alt="data_sub"/>
      <TextItem title = '' text = {visualisation2} ></TextItem>
      <img className='img_warp' src= {coxcomb} alt="data_sub"/>
      <TextItem title = '' text = {visualisation3} ></TextItem>


      <HeaderItem title = 'Finding' sub_title = 'Results'></HeaderItem>
      <TextItem title = 'survey' text = {survey1} ></TextItem>
      <img className='img_warp' src= {tot_user} alt="data_sub"/>
      <TextItem title = '' text = {survey2} ></TextItem>
      <img className='img_warp' src= {general} alt="data_sub"/>
      <TextItem title = '' text = {survey3} ></TextItem>
      <img className='img_warp' src= {pay} alt="data_sub"/>
      <TextItem title = '' text = {survey4} ></TextItem>
      <img className='img_warp' src= {info} alt="data_sub"/>
      <TextItem title = '' text = {survey5} ></TextItem>

      <HeaderItem title = 'Conclusion' sub_title = ''></HeaderItem>
      <TextItem title = '' text = {conclusion} ></TextItem>

      <HeaderItem title = 'Bibliography' sub_title = ''></HeaderItem>
      <TextItem title = '' text = {bibliography} ></TextItem>

      </>
    );
  }

export default Dissertation;