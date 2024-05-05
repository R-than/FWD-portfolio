import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



const Work = () => {
  const [showVideo, setShowVideo] = useState(false);

  const FadeInAnimation = {
    initial: {
      opacity: 0,
      x: -300,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
  }

  
  
  const handleScroll = () => {
    const ticTacToeSection = document.getElementById("tic-tac-toe-section");
    if (ticTacToeSection) {
      const bounding = ticTacToeSection.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setShowVideo(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <section id="work" className="text-white py-8 min-h-screen ">
      <div className="container mx-auto" >
        <h2 className="text-3xl md:text5x1 font-bold text-center mb-4 ">Work</h2>
        <div className="flex flex-col items-center mx-2 ">
          {/* Project 1 */}
          
          <motion.div 
          variants={FadeInAnimation}
           initial="initial"
           whileInView="animate"
           transition={{ type: "bounce",  duration: 1.5 }}
           viewport={{
            once: true,
           }}>
          <div className="flex flex-col md:flex-row items-center mb-6  "  >
            <div className="w-full  md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="/images/TBA.jpg" alt="Froth image" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-5xl font-semibold mb-4">Froth</h3>
              <p className="text-white mb-6">This is the Capstone wordpress project based on a Matcha cafe. It is currently in development.</p>
              <Link to="/Froth" className="flex justify-center md:justify-start text-base md:text-2xl text-orange-300 py-2">View Project</Link>
              <div className="flex flex-wrap mt-2">
                <i className="fab fa-php text-purple-500 fa-3x mr-4"></i>
                <i className="fab fa-gulp text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-git-alt text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-github text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-wordpress text-blue-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div
          variants={FadeInAnimation}
           initial="initial"
           whileInView="animate"
           transition={{ type: "bounce",  duration: 1.5 }}
           viewport={{
            once: true,
           }}>
          <div className="flex flex-col md:flex-row items-center mb-6  ">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="../images/Clippr.png" alt="Clippr image" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-5xl font-semibold mb-4">Clippr</h3>
              <p className="text-white mb-6">This is a movie database. Developed using React with the help of an API.</p>
              <Link to="/Clippr" className="flex justify-center md:justify-start text-base md:text-2xl text-orange-300 py-2">View Project</Link>
              
              <div className="flex mt-2">
                <i className="fab fa-react text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-sass text-pink-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-git-alt text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-github text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          </motion.div>
          {/* Project 3 */}
          <motion.div
          variants={FadeInAnimation}
           initial="initial"
           whileInView="animate"
           transition={{ type: "bounce",  duration: 1.5 }}
           viewport={{
            once: true,
           }}>
          <div className="flex flex-col md:flex-row items-center mb-6  " id="tic-tac-toe-section">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              {showVideo ? (
                <video src="videos/tic-tac-toe-clip.mov" alt="Tic-Tac-Toe video" className="w-full h-full object-cover rounded-lg" autoPlay muted loop />
              ) : (
                <img src="/images/tic-tac-toe.jpg" alt="Tic-Tac-Toe image" className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-5xl font-semibold mb-4">Tic-Tac-Toe</h3>
              <p className="text-white mb-6">This is my first Javascript game I developed.</p>
              <Link to="/TicTacToe" className="flex justify-center md:justify-start text-base md:text-2xl text-orange-300 py-2">View Project</Link>
              <div className="flex mt-2">
                <i className="fab fa-js text-yellow-500 fa-3x mr-4 "></i>
                <i className="fab fa-css3-alt text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;