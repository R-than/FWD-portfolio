import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [showNewNav, setShowNewNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) { // Adjust the offset value as needed
        setShowNewNav(true);
      } else {
        setShowNewNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`py-4 z-50 ${showNewNav ? 'hidden' : 'bg-gray-800 text-white shadow-md'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#home">Rathans</a>
          </h1>
          <nav>
            <ul className="flex">
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#home">Home</a></li>
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#work">Work</a></li>
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#about">About</a></li>
              <li className={`transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <nav className={`py-4 z-50 fixed top-0 w-full ${showNewNav ? 'bg-transparent' : 'bg-gray-800 text-white shadow-md'} text-white shadow-md transform transition-transform duration-300 ${showNewNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#home">Rathans</a>
          </h1>
          <ul className="flex">
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#home">Home</a></li>
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#work">Work</a></li>
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#about">About</a></li>
            <li className={`transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''}`}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;








