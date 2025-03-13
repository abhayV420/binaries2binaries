import React, {useEffect} from 'react'
import { projects } from '../assets/projects'
import ProjectTile from '../Tiles/ProjectTile'
import Button from './Button'

function Projects() {
 
  return (
    <div className='flex flex-col items-center mt-40 mx-8'>
      <div className="">
        <p className="inline text-2xl sm:text-3xl border-b-3 border-[#464643] font-medium py-3 text-gray-300">PROJECTS</p>
        </div>
          <div className='flex flex-col sm:flex-row gap-20 md:gap-40 justify-center items-center mt-20'>
        {
        projects.map((item, index)=>(
          <ProjectTile key={index} image={item.image} title={item.title} description={item.description} link={item.ref} />
        ))
      }
          </div>
    </div>
  )
}

export default Projects