import React, { useEffect, useRef } from 'react';


function Blob() {
    const svgRef = useRef(null);
   
    useEffect(() => {
       const bigBlob = svgRef.current.querySelector('.bigBlob');
       const smallBlob1 = svgRef.current.querySelector('.smallBlob1');
       const smallBlob2 = svgRef.current.querySelector('.smallBlob2');
   
       if (bigBlob && smallBlob1 && smallBlob2) {
         bigBlob.style.animation = 'orbit 20s infinite linear';
         smallBlob1.style.animation = 'orbit 15s infinite linear';
         smallBlob2.style.animation = 'orbit 10s infinite linear reverse';
       }
    }, []);
   
    return (
       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', mixBlendMode: 'difference' }}>
         <svg ref={svgRef} className="blobCont" viewBox="0 0 1920 1000" preserveAspectRatio="xMidYMid slice">
           <defs>
             <filter id="gooey" height="130%">
               <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
               <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
             </filter>
           </defs>
           <g style={{ filter: 'url(#gooey)' }}>
             {/* Big bob 1 */}
             <circle className="bigBlob " cx="55%" cy="60%" r="150" fill="magenta" stroke="black " />
             {/* Big bob 2 */}
             <circle className="smallBlob2 " cx="50%" cy="75%" r="80" fill="bisque" stroke="black " />
             {/* Small bob 1 */}
             <circle className="smallBlob1 blur-2x1" cx="40%" cy="65%" r="50" fill="cyan" stroke="black" />
             {/* Small bob 2 */}
             <circle className="smallBlob2 blur-2x1" cx="50%" cy="45%" r="40" fill="Orange" stroke="black" />
           </g>
         </svg>
       </div>
    );
   }
   

export default Blob;










