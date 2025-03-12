import React from 'react';
import bg_video from '../assets/video'
import { Link } from 'react-scroll';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Home() {

  const [text] = useTypewriter({
    words: [' frontend web developer'],
    loop: {},
  });
 
  return (
    <section className="relative h-screen">
      <video id='bg_video' className='opacity-5 absolute inset-0 w-full h-full object-cover z-0' autoPlay loop muted playsInline>
        <source src={bg_video}/>
      </video>
      <div className="text-center w-full h-[100%] absolute text-white top-0 flex flex-col justify-center items-center ">

        <div className="max-w-3xl ml-4 ">
          <h1 className="text-2xl font-medium text-gray-300 mb-2 text-start">
            Hi, my name is
          </h1>
          
           <p className="text-4xl md:text-4xl font-bold text-purple-600 mb-1 text-start">
             Abhay Vashishth
          </p>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-300 mb-4 text-start">
             I'm a 
             <span className='font-bold text-yellow-500'>
              {text}
              </span>
             <span style={{color:'red'}}>
             <Cursor/>
             </span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            A frontend web developer creating modern and responsive web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to='projects' smooth={true} duration={500} className="bg-gray-200 hover:bg-gray-300 text-black cursor-pointer font-bold py-3 px-6 rounded-full"
            >
              View My Work
            </Link>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default Home;