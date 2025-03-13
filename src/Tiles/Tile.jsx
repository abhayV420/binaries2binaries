import React from 'react'


function Tile({image,title}) {
 

  return (
 <div className="group w-20 h-20 md:w-30 md:h-30 bg-transparent ">
    <img className='w-full h-full mb-3' src={image} alt="" />
      <div className="text-yellow-400">
        {title}
      </div>
  </div>
  )
}

export default Tile