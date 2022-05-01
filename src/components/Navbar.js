import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

// Update the sliding behaviour 
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Mereko Febbi   
   
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/Dissertation" className='nav-links' onClick={closeMobileMenu}>
                  Dissertation
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/Visuals" className='nav-links' onClick={closeMobileMenu}>
                  Visuals
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;