import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiMail } from 'react-icons/ti';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-400 py-60"> {/* Increased vertical padding */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">You made it to the end!</h2>
        <div className="text-lg text-center">
          
          <p className="mt-20 mb-20 text-3xl">Let's connect</p> {/* Added margin below */}
          
          <ul className="flex justify-center items-center mt-100">
            <li className="mr-12">
              <a href="https://www.linkedin.com/in/rathansrivarathan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><FaLinkedin size={100} /></a>
            </li>
            <li className="mr-12">
              <a href="https://github.com/r-than" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><FaGithub size={100} /></a>
            </li>
            <li>
              <a href="mailto:rathan_30@outlook.com" className="text-blue-500 hover:underline"><TiMail size={100} /></a>
            </li>
          </ul>
          
          <p className="mt-10"></p> {/* Added margin above */}
          
        </div>
      </div>
    </section>
  );
}

export default Contact;




