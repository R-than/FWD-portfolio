import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';



const Work = () => {
  const [showVideo, setShowVideo] = useState(false);
  const slideInRef = useRef(null);

  useEffect(() => {
    
    const handleSlideIn = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${0.2 * index}s`;
          entry.target.classList.add('slide-in'); // Add slide-in class when in view
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    };

    const observer = new IntersectionObserver(handleSlideIn, {
      threshold: 0.5
    });

    const slideInElement = slideInRef.current;
    if (slideInElement) {
      observer.observe(slideInElement);
    }

    return () => {
      if (slideInElement) {
        observer.unobserve(slideInElement);
      }
    };
  }, []);

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
    <section id="work" className="bg-gray-200 py-8 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Work</h2>
        <div className="flex flex-col items-center mx-2">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center mb-6  slide-in">
            <div className="w-full  md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="public/images/TBA.jpg" alt="Froth" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Capstone</h3>
              <p className="text-gray-700 mb-6">Capstone Description.</p>
              <Link to="/Froth" className="text-blue-500">View Project</Link>
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
          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center mb-6  slide-in">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="../images/Clippr.png" alt="Clippr" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Clippr</h3>
              <p className="text-gray-700 mb-6">Clippr Description.</p>
              <Link to="/Clippr" className="text-blue-500">View Project</Link>
              
              <div className="flex mt-2">
                <i className="fab fa-react text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-sass text-pink-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-git-alt text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-github text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center mb-6  slide-in" id="tic-tac-toe-section">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              {showVideo ? (
                <video src="videos/tic-tac-toe-clip.mov" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" autoPlay muted loop />
              ) : (
                <img src="public/images/tic-tac-toe.jpg" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Tic-Tac-Toe</h3>
              <p className="text-gray-700 mb-6">Tic-Tac-Toe Description.</p>
              <Link to="/TicTacToe" className="text-blue-500">View Project</Link>
              <div className="flex mt-2">
                <i className="fab fa-js text-yellow-500 fa-3x mr-4 "></i>
                <i className="fab fa-css3-alt text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;













