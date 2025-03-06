import React, {useEffect} from 'react'
import { projects } from '../assets/projects'
import ProjectTile from '../Tiles/ProjectTile'
import Button from './Button'

function Projects() {
 
  return (
    <div className='flex flex-col items-center mt-20 mx-8'>
          <div className='flex flex-col lg:flex-row gap-16 items-center mt-20'>
        {
        projects.map((item, index)=>(
          <ProjectTile key={index} image={item.image} title={item.title} description={item.description} id={item.id} link={item.ref} />
        ))
      }
          </div>
    </div>
  )
}

export default Projects