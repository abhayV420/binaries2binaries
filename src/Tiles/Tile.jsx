import React from 'react'


function Tile({image,title,description}) {

  return (
   <div className=' text-white cursor-pointer' >
    <div className='overflow-hidden flex flex-col items-center gap-2'>
      <img className='hover:scale-105 transition ease-in-out w-60 sm:w-36' src={image} alt="" />
       <div className='flex flex-col items-center'>
         <p className='pt-3 pb-1 text-sm font-medium text-yellow-500'> {title} </p>
         <p className='text-sm font-light sm:w-full w-4/5 sm:w- text-start' >{description}</p>
       </div>
    </div>
    
   </div>
  )
}

export default Tile