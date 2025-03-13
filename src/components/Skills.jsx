import React from 'react'
import { skills } from '../assets/skills'
import Tile from '../Tiles/Tile'
import Button from './Button'

function Skills() {
 
  return (
    <div className='flex flex-col items-center mt-30 mb-10 mx-8 py-4'>
      <div className="">
        <p className="inline text-2xl sm:text-3xl border-b-3 border-[#464643] font-medium py-3 text-gray-300">SKILLS</p>
        </div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-20 md:gap-60 mt-20 text-center '>
      {
        skills.map((item, index)=>(
          <Tile key={index} image={item.image} title={item.title} />
        ))
      }
    </div>
    </div >
  )
}

export default Skills