import React from 'react';
import './styles.css';
import '../App.css';

function HeaderItem(props) {
    return (
      <>
        <div className='header_wrap'>
            <hr></hr>
            <h1>{props.title}</h1>
            <hr></hr>
            <div className='sub_title_warp'>
              <p>{props.sub_title}</p>
            </div>
        </div>
     
      </>
    );
  }

export default HeaderItem;