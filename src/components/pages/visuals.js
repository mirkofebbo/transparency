import React from 'react';
import { Link } from 'react-router-dom';
import Sketch from './transparency/Transparency';
import HeaderItem from '../Header';
import TextItem from '../Text';
import { Button } from '../Button';

var abstracttxt = require("../Texts/abstract.txt");

function Visuals() {  

    return (
        <>
        <div className='sketch_background'>
          <Sketch ></Sketch>
        </div>
  
        {/* <HeaderItem title = 'Transparency' sub_title = 'The dissertation'></HeaderItem>
        <TextItem title = 'Abstract' text = {abstracttxt}></TextItem> */}
        </>
    );
  }

export default Visuals;