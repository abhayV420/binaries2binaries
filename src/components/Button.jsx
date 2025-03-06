import React from 'react';

function Button({text}){
  
  

  

  return (
<div className='relative group sm:w-[220px] '>
   <div className="absolute inset-0 bg-pink-600 rounded-lg blur-sm group-hover:blur-lg transition-all duration-500"></div>
   <button className='lg:w-[220px] sm:w-55 w-30 text-center lg:py-3 py-2 sm:text-2xl text-sm max-h-14 text-white  rounded-lg hover:border-purple-600 leading-none relative bg-black'> {text} </button>
</div> 
  );
}

export default Button;