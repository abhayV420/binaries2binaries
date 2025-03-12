import React from 'react';
import Line from './Line';
import Footer from './Footer';

function About() {
  return (
    <section id="about" className="py-20 bg-transparent flex flex-col justify-between items-center gap-16 mt-24 mx-8">

      <Line/>

      <div className="container px-4 mt-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-white mb-3">
            Hello! I'm Abhay Vashishth, a passionate and enthusiastic frontend web developer eager to kickstart my career. As a self-taught developer, I'm excited to apply my knowledge and skills to build impactful and user-friendly web applications.
          </p>
          <p className='w-1/2 h-1 bg-purple-400 mb-3 mx-auto rounded-full'></p>
          <p className="text-lg text-white mb-3">
            I have a solid foundation in HTML, CSS, and JavaScript, and I'm comfortable working with React.js and Tailwind CSS. I'm a quick learner, and I'm always looking for opportunities to expand my skillset.
          </p>
        
          <p className='w-1/2 h-1 bg-purple-400 mb-3 mx-auto rounded-full'></p>
          <p className="text-lg text-white">
            Let's build something amazing together!
          </p>
        </div>
      </div>

      <Footer/>

    </section>
  );
}

export default About;