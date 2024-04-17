import React from 'react';
import Blob from './Blob';

const Home = () => {
  return (
    <section id="home" className="bg-black text-white py-0 min-h-screen flex justify-center items-center relative">
      {/* Absolute positioning for the background */}
      <div className="bg-black absolute top-0 left-0 right-0 bottom-0"></div> 

      <div className="container mx-auto max-w-6xl text-center flex flex-col justify-center items-center relative z-10 ">
        <div className="heading-container absolute top-0 left-0 right-0 text-center flex flex-col justify-center items-center">
          <h1 className="text-9xl md:text-10xl lg:text-17xl font-bold mb-4 bg-blend-multiply hover:bg-blend-darken">Rathan</h1>
          <h2 className="text-7x1 md:text-7xl lg:text-7x1 font-bold mb-4 bg-blend-difference">Srivarathan</h2>
          <h3 className="text-3xl md:text-4xl lg:text-4xl bg-blend-difference">Front-End Web Developer</h3>
        </div>
      </div>
        <div>
          <Blob/>
        </div>
      {/* Reset the margin and padding on the body and html elements */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
}

export default Home;














