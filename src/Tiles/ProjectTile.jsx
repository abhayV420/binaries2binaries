import React from 'react'


function ProjectTile({image,title,description, link}) {

  return (
  <div className="group flex flex-col relative hover:scale-110 transition-all duration-500 text-[#F9F9F9] rounded cursor-pointer w-50 sm:w-1/3 md:w-2/6 lg:w-1/5">
      <a href={link}>

        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500 rounded-lg">
        </div>

        <img src={image} alt="" className="rounded-lg" />

          <div className="invisible group-hover:visible absolute right-4 bottom-5 transition-all duration-500 z-50 flex flex-col justify-center items-center">
            <p className="text-[18px] md:text-2xl"> {title} </p>
            <p className="text-[10px] md:text-[12px] text-start mx-3 sm:block hidden font-serif"> {description} </p>
          </div>
       </a>
   </div>
  )
}

export default ProjectTile