import React from 'react'
import { skills } from '../assets/skills'
import Tile from '../Tiles/Tile'
import Button from './Button'

function Skills() {
 
  return (
    
    <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-60 gap-30 sm:gap-y-6 mt-40 text-center mx-8 lg:mx-30 '>
      {
        skills.map((item, index)=>(
          <Tile key={index} image={item.image} title={item.title} description={item.description} />
        ))
      }
    </div>
    
  )
}

export default Skills