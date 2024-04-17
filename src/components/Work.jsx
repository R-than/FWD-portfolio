import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Work = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="work" className="bg-gray-200 py-8 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Work</h2>
        <div className="flex flex-col items-center">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center mb-6 px-4 slide-in">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0 ">
              <img src="images/TBA.jpg" alt="Capstone" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Capstone</h3>
              <p className="text-gray-700 mb-6">Capstone Description.</p>
              <a href="#" className="text-blue-500">View Project</a>
              <div className="flex mt-2">
                <i className="fab fa-php text-purple-500 fa-3x mr-4"></i>
                <i className="fab fa-gulp text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-git text-grey-500 fa-3x mr-4"></i>
                <i className="fab fa-github text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-wordpress text-blue-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center mb-6 px-4 slide-in">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="../images/Clippr.png" alt="Clippr" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Clippr</h3>
              <p className="text-gray-700 mb-6">Clippr Description.</p>
              <a href="#" className="text-blue-500">View Project</a>
              <div className="flex mt-2">
                <i className="fab fa-react text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-sass text-pink-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
                <i className="fab fa-git text-grey-500 fa-3x mr-4"></i>
                <i className="fab fa-github text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center px-4 slide-in" id="tic-tac-toe-section">
            <div className="w-full md:w-1/2 mr-0 md:mr-8 mb-4 md:mb-0">
              {showVideo ? (
                <video src="videos/tic-tac-toe-clip.mov" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" autoPlay muted loop />
              ) : (
                <img src="images/tic-tac-toe-placeholder.jpg" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Tic-Tac-Toe</h3>
              <p className="text-gray-700 mb-6">Tic-Tac-Toe Description.</p>
              <a href="#" className="text-blue-500">View Project</a>
              <div className="flex mt-2">
                <i className="fab fa-js text-yellow-500 fa-3x mr-4 "></i>
                <i className="fab fa-css3-alt text-blue-500 fa-3x mr-4"></i>
                <i className="fab fa-html5 text-red-500 fa-3x mr-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Projects */}
      <div className="container mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-4">More Projects</h3>
        <p className="text-gray-700 mb-6">Explore more of our projects on our portfolio page.</p>
        <a href="#" className="text-blue-500">View Portfolio</a>
      </div>
    </section>
  );
}

export default Work;













