import React from 'react'
import { skills } from '../assets/skills'
import Tile from '../Tiles/Tile'
import Button from './Button'

function Skills() {
 
  return (
    <div className='flex flex-col items-center mt-20 mx-8 py-4'>
    <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-60 gap-y-6 mt-20 text-center '>
      {
        skills.map((item, index)=>(
          <Tile key={index} image={item.image} title={item.title} description={item.description} />
        ))
      }
    </div>
    </div >
  )
}

export default Skills