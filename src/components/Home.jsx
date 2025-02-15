import React from 'react';
import Blob from './Blob';

const Home = () => {
  return (
    <section id="home" className=" text-white py-0 min-h-screen flex justify-center items-center relative ">
      
      <div className=" absolute top-0 left-0 right-0 bottom-0"></div> 

      <div className="container mx-auto max-w-6xl text-center flex flex-col justify-center items-center relative z-10 ">
        
        <div className="heading-container absolute top-0 left-0 right-0 text-center flex flex-col justify-center items-center">
           
          <h1 className="outline-text text-6xl md:text-10xl lg:text-9xl font-bold mb-4 bg-blend-multiply ">Rathan</h1>
          <h2 className="outline-text text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-blend-difference">Srivarathan</h2>
          <h3 className="outline-text text-3xl md:text-3xl lg:text-5xl font-bold bg-blend-difference">Front-End Web Developer</h3>
        </div>
        
      </div>
        <div>
         <Blob />
        </div>
    </section>
  );
}

export default Home;