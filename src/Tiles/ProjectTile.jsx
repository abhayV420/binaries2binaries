import React from 'react'


function ProjectTile({image,title,description, id, link}) {

  return (
   <a target='_blank' href={`${link}`} className=' text-white cursor-pointer w-3/4' >
    <div className='overflow-hidden flex flex-col items-center gap-3 hover:outline-3 outline-purple-600 rounded-2xl'>
      <img className={`w-full ${id === 'passgen' ? 'sm:h-[250px] ' : '' }`} id={`${id}`} src={image} alt="" />
        <div className='flex flex-col items-center gap-2 p-4'>
           <p className='pt-3 pb-1 text-sm text-yellow-500 font-medium'> {title} </p>
           <p className='text-sm font-light' >{description}</p>
        </div>
    </div>
    
   </a>
  )
}

export default ProjectTile