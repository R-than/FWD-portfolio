import React, { useEffect, useRef } from 'react';


function Blob() {
    const svgRef = useRef(null);
   
    useEffect(() => {
       const bigBlob = svgRef.current.querySelector('.bigBlob');
       const smallBlob1 = svgRef.current.querySelector('.smallBlob1');
       const smallBlob2 = svgRef.current.querySelector('.smallBlob2');
       const smallBlob3 = svgRef.current.querySelector('.smallBlob3');
       const smallBlob4 = svgRef.current.querySelector('.smallBlob4');
   
       if (bigBlob && smallBlob1 && smallBlob2) {
         bigBlob.style.animation = 'orbit 20s infinite linear';
         smallBlob1.style.animation = 'orbit 10s infinite linear';
         smallBlob2.style.animation = 'orbit 20s infinite linear reverse';
         smallBlob3.style.animation = 'orbit 30s infinite linear reverse';
         smallBlob4.style.animation = 'orbit 30s infinite linear reverse';
       }
    }, []);
   
    return (
       <div className="z-0" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',  }}>
         <svg ref={svgRef} className="blobCont " viewBox="0 0 1920 1000" preserveAspectRatio="xMidYMid slice">
           <defs>
             <filter id="gooey" height="130%">
               <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
               <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
             </filter>
           </defs>
           <g style={{ filter: 'url(#gooey)' }}>
             {/* Big blob 1 Puprle*/}
             <circle className="bigBlob  " cx="55%" cy="50%" r="150" fill="magenta" stroke="black " />
             {/* Big blob 1 Yellow*/}
             <circle className="smallBlob1 " cx="60%" cy="65%" r="50" fill="#FFFF00" stroke="black " />
             {/* Big blob 2 Green*/}
             <circle className="smallBlob2 " cx="40%" cy="35%" r="80" fill="#33FF00" stroke="black " />
             {/* Small blob 3 Cyan*/}
             <circle className="smallBlob3 blur-2x1" cx="40%" cy="65%" r="50" fill="cyan" stroke="black" />
             {/* Small blob 4 Red */}
             <circle className="smallBlob4  blur-2x1" cx="55%" cy="55%" r="30" fill="#FF3300" stroke="black" />
             
           </g>
         </svg>
       </div>
    );
   }
   

export default Blob;










