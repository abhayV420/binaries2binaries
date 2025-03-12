import React from 'react'


function ProjectTile({image,title,description, link}) {

  return (
  <div class="group flex flex-col relative hover:scale-110 transition-all duration-500 text-[#F9F9F9] rounded cursor-pointer w-3/4 sm:1/2 md:w-2/5 lg:w-1/4">
      <a href={link}>

        <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500 rounded-lg">
        </div>

        <img src={image} alt="" class="rounded-lg" />

          <div class="invisible group-hover:visible absolute right-4 bottom-5 transition-all duration-500 z-50 flex flex-col justify-center items-center">
            <p class="text-[18px] md:text-2xl"> {title} </p>
            <p class="text-[10px] md:text-[12px] text-start mx-3 sm:block hidden font-serif"> {description} </p>
          </div>
       </a>
   </div>
  )
}

export default ProjectTile