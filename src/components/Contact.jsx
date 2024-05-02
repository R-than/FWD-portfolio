import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiMail } from 'react-icons/ti';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-400 py-60"> 
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">You made it to the end!</h2>
        <div className="text-lg text-center">
          
          <p className="mt-20 mb-20 text-3xl">Let's connect</p>
          
          <ul className="flex flex-col justify-center items-center lg:flex-row ">
            <li className="my-4">
              <a href="https://www.linkedin.com/in/rathansrivarathan" target="_blank" rel="noopener noreferrer" className="text-blue-500 "><FaLinkedin size={100} /></a>
            </li>
            <li className=" my-4 lg:mx-6 lg:px-0">
              <a href="https://github.com/r-than" target="_blank" rel="noopener noreferrer" className="text-blue-500 "><FaGithub size={100} /></a>
            </li>
            <li className="lg:my-2">
              <a href="mailto:rathan_30@outlook.com" className="text-blue-500  "><TiMail size={125} /></a>
            </li>
          </ul>
          
          <p className="mt-10"></p>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;




