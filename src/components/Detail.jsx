import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';



const Detail = ({project}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []
)
    return (
        <div className="flex flex-col items-center justify-center p-8 md:mx-auto z-150">
            <h1 className="text-6x1 md:text-6xl font-bold mb-8 text-center text-yellow-400" >{project.name}</h1>
            
                <img className="mb-4 md:mb-8 w-164 h-auto " src={`/images/${project.heroimg}`} alt="Clippr image" />
                
            <div className="flex flex-wrap mt-2">
                {project.icon.map((el,i)=> { 
                    return (
                        <i key={i} className={`fab ${el} fa-3x md:fa-5x mr-4`}></i>
                    )
                })}
              </div>

            <p className="text-base md:text-lg text-white mb-6 py-3" >{project.desc}</p>
            <div className='flex flex-col w-full items-center justify-center md:flex-row md:w-164'>
                <img className="mb-6 w-100 px-2" src={`/images/${project.img1}`} alt="Clippr Detail page" />

                <img className="mb-6 w-100 px-2" src={`/images/${project.img2}`} alt="Clippr Favourite page" />
            </div>

            <p className="text-base md:text-lg text-white mb-6 py-3" >{project.info}</p>
            <button><a className='text-yellow-400 font-bold text-5xl hover:scale-110' href={project.live}>Go to {project.name}</a></button>
            
        </div>
    );
}

export default Detail