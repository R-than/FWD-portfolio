import { style } from 'motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HamburgerTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

    <div className='fixed z-10'>
        <h1 className="text-2xl font-bold mx-4 w-full text-center py-10">
            <Link to={'/'} href="home" className='text-white'>Rathans</Link>
          </h1>
    <div className={`open ${isOpen ? 'oppenned' : ''}`} onClick={toggleMenu}>
      <span className="cls"></span>
      <span>
        <ul className="sub-menu my-4 text-4xl absolute h-0 w-0 top-0 right-0 rounded-full z-20 overflow-hidden">
          <li className='block float-right clear-both h-auto'>
            <Link to={'/'} title="home" className='text-white no-underline text-27px w-full block float-left leading-16'>Go Back</Link>
          </li>
          <li className='block float-right clear-both h-auto'>
            <a href="#" title="work" onClick="scrollToTop()" className='text-white no-underline text-27px w-full block float-left leading-16'>Detail</a>
          </li>
          {/* <li className='block float-right clear-both h-auto'>
            <a href="#about" title="about" className='text-white no-underline text-27px w-full block float-left leading-14'> About</a>
          </li> */}
          <li className='block float-right clear-both h-auto'>
            <a href="#contact" title="contact" className='text-white no-underline text-20px w-full block float-left leading-16'>Contact</a>
          </li>
        </ul>
      </span>
      <span className="cls"></span>
    </div>
    </div>
  );
};


export default HamburgerTwo;