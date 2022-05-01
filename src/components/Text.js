import React from 'react';
import './styles.css';
import '../App.css';
import TextFileReader from './Extract_txt';
import bill from './image/bill.png'

let imgs = [];
function TextItem(props) {
  imgs[0] = bill;
  
    return (
      <>
        <div className='text_warp'>
            <h2 className='title_warp'>{props.title}</h2>
            <div className='background_col'>
              <hr></hr>
              <div className='body_warp'>
              <TextFileReader txt={props.text}/>
              {/* <img className='img_warp' 
                alt="img_1"
                src= {imgs[props.src]} 
            
                /> */}
              </div>
              <hr></hr>
            </div>
        </div>
     
      </>
    );
  }

export default TextItem;