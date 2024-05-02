import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [showNewNav, setShowNewNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1000) { 
        setShowNewNav(true);
      } else {
        setShowNewNav(false);
      }

      // Determine the active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust as needed
        const sectionHeight = section.clientHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`py-4 z-50 ${showNewNav ? 'hidden' : 'bg-transparent text-white shadow-md'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#home">Rathans</a>
          </h1>
          <nav>
            <ul className="flex">
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'home' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#home">Home</a></li>
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'work' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#work">Work</a></li>
              <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'about' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#about">About</a></li>
              <li className={`transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'contact' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <nav className={`py-4 z-50 fixed top-0 w-full ${showNewNav ? 'bg-transparent' : 'bg-gray-800 text-white shadow-md'} text-white shadow-md transform transition-transform duration-300  ${showNewNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#home">Rathans</a>
          </h1>
          <ul className="flex">
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'home' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#home">Home</a></li>
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'work' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#work">Work</a></li>
            <li className={`mr-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'about' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#about">About</a></li>
            <li className={`transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 rounded-md py-1 px-3 ${showNewNav ? 'outline-none' : ''} ${activeSection === 'contact' ? 'bg-gray-700 text-gray-200' : ''}`}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;









