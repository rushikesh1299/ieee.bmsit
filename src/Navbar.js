import React from 'react';
import './style.css';
import 'tachyons';




function Navbar() {
  return (
    <div className=' navcontainer ba br--bottom b--light-blue w-100 h-4 flex flex-column' >
      <img alt='navlogo' className='h4 w-60 br3' src={require('./lionart.png')} />
      <ul className=' navbarlist tc flex w-100'>
        <li className='ph4 br-pill  link dim black b grow '>Home</li>
        <li className='ph4 br-pill  link dim black b grow '>Submit Paper</li>
        <li className='ph4 br-pill  link dim black b grow '>Schedule</li>
        <li className='ph4 br-pill  link dim black b grow '>Contact Info</li>
      </ul>
      
      

    </div>
  );
}

export default Navbar;
/*import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

*/