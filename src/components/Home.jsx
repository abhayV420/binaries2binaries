import React, {useState} from 'react';
import bg_video from '../assets/video'

function Home() {

  return (
    <section className="">
      <video id='bg_video' className='opacity-20' autoPlay loop muted playsInline>
        <source src={bg_video}/>
      </video>
      <div className="containe text-center w-full h-[100%] absolute text-white top-0 flex flex-col justify-center items-center ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm Abhay Vashishth
          </h1>
          <p className="text-lg text-white mb-8">
            A passionate web developer creating modern and responsive web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects" 
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full"
            >
              View My Work
            </a>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default Home;