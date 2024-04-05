import React, { useState, useEffect } from 'react';

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
          <div className="max-w-6xl bg-white rounded-lg shadow-lg p-8 mb-6 flex items-center">
            <div className="w-96 h-72 bg-gray-300 mr-8 rounded-lg">
              <img src="your-image-url.jpg" alt="Capstone" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Capstone</h3>
              <p className="text-gray-700 mb-6">Description of Project 1</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="max-w-6xl bg-white rounded-lg shadow-lg p-8 mb-6 flex items-center">
            <div className="w-96 h-72 bg-gray-300 mr-8 rounded-lg">
              <img src="your-image-url.jpg" alt="Clippr" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Clippr</h3>
              <p className="text-gray-700 mb-6">Description of Project 2</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="max-w-6xl bg-white rounded-lg shadow-lg p-8 flex items-center" id="tic-tac-toe-section">
            <div className="w-96 h-72 bg-gray-300 mr-8 rounded-lg">
              {showVideo ? (
                <video src="videos/tic-tac-toe-clip.mov" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" autoPlay muted loop />
              ) : (
                <img src="tic-tac-toe-placeholder.jpg" alt="Tic-Tac-Toe" className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tic-Tac-Toe</h3>
              <p className="text-gray-700 mb-6">Description of Project 3</p>
              <a href="#" className="text-blue-500">View Project</a>
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








