import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import Logo from './Logo2';
import p5 from 'p5'
import { useLocation } from 'react-router-dom'

// import DataController from "./data-controller"

let max_width = 200;
let max_height = 200;
let page_max_width = 200;
let myLogo = new Logo();
let companyNames = ['berkshire hathaway', 'microsoft', 'fedex', 'four seasons hotel', 
                    'ups', 'canadian national railway', 'caterpillar inc', 
                    'waste management', 'xbox', 'skype', 'linkedin', 'github' , 
                    'bill and melinda gates foundation'];
var data = require('./data/test_df.json'); // forward slashes will depend on the file location

// function HeaderView() {
//     const location = useLocation();
//     console.log(location.pathname);
//     return <span>Path : {location.pathname}</span>
//   }

export default (props) => {
    const [p5, setP5] = useState();
    const location = useLocation();
    // state = {
    //     color: 'white'
    //   }
    
    //   listenScrollEvent = e => {
    //     if (window.scrollY > 400) {
    //       setState({color: 'black'})
    //     } else {
    //        setState({color: 'white'})
    //     }
    //   }
    // Just register event as mounted
    useEffect(() => {
        window.addEventListener("resize", windowResized);
        return () => {
            window.removeEventListener("resize", windowResized);
        }
    }, []);

    
    const preload = (p5) => {
        myLogo.preload(p5, data);
    }

    const setup = (p5,canvasParentRef) => {
        setP5(p5)
  
        p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(canvasParentRef);
        
        myLogo.setup(p5);
    }

    const draw = (p5) => {
        p5.background(255);
        p5.normalMaterial();

        if(location.pathname == '/Visuals'){
            p5.orbitControl();
        } else {
            p5.rotateZ(p5.frameCount * 0.0002 + 100);
            p5.rotateX(p5.frameCount * 0.0002 + 500);
            p5.rotateY(p5.frameCount * 0.0002);
        }

        myLogo.display(p5, 'na');
    

    }

    function windowResized(p5) {
        // keep in mind, `p5` can be `undefined`
        // so check it before using
        if (p5) {
            page_max_width =  window.innerWidth;
            p5.resizeCanvas(page_max_width, window.innerHeight);
        }        
    }
      
    return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized}/>;

}
