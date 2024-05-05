import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiMail } from 'react-icons/ti';
import { motion } from 'framer-motion';




const Contact = () => {
    const FadeInAnimation = {
    initial: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      
    },
  }

  return (
    <section id="contact" className=" py-60"> 
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-4">You made it to the end!</h2>
        <div className="text-lg text-center">
          
          <p className="mt-20 text-white mb-20 text-3xl">Let's connect</p>
          
          <ul className="flex flex-col justify-center items-center lg:flex-row ">
            <motion.li className="my-4"
            >
              <a href="https://www.linkedin.com/in/rathansrivarathan" target="_blank" rel="noopener noreferrer" className="text-white "><FaLinkedin size={100} /></a>
            </motion.li>
            <li className=" my-4 lg:mx-6 lg:px-0">
              <a href="https://github.com/r-than" target="_blank" rel="noopener noreferrer" className="text-white "><FaGithub size={100} /></a>
            </li>
            <li className="lg:my-2">
              <a href="mailto:rathan_30@outlook.com" className="text-white  "><TiMail size={125} /></a>
            </li>
          </ul>
          
          <p className="mt-10"></p>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;




