import React , { useState } from 'react';
import Sketch from './transparency/Transparency';
import { Button } from '../Button';
// import './styles.css';
// import '../App.css';



function Visuals() {  

    let company_name = ['all','berkshire hathaway', 'microsoft', 'fedex', 'four seasons hotel', 
    'ups', 'canadian national railway', 'caterpillar inc', 
    'waste management', 'xbox', 'skype', 'linkedin', 'github' , 
    'bill and melinda gates foundation']

    const [data, setData] = useState('');

    const handleClick = value => () => {
      setData(value)
    }
    const listItems = company_name.map((name) =>
      <button className='comp_selection_btn' key={name} type="button" onClick={handleClick(name)}>{name}</button>
    );       
    return (
        <div>
          <div className='sketch_background'>
            <Sketch handleClick ={data}></Sketch>
          </div>
          <div className='button_container'> 
            <ul>{listItems}</ul>
          </div>
        </div>
    );
  }

export default Visuals;