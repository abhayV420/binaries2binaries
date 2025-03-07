import React, { useContext} from 'react'
import { useState } from 'react'
import {assets} from "../assets/assets"
import { Link, animateScroll } from 'react-scroll'
import { B2BContext } from '../contexts/B2BContext'






const Navbar= () => {
  
const [visible, setVisible] = useState(false);
const [navVisible, setNavVisible] = useState(false);
const {setContactVisible} = useContext(B2BContext)

  




  return (
   <header className='fixed left-0 right-0 z-50 bg-transparent py-4 flex gap-2 items-center justify-between font-bold mx-8'>
       
         
      {/* Left Part */}
      <Link to="/" className='sm:ml-2 lg:ml-6 ml-1 cursor-pointer rounded-full'> <img className='sm:w-15 w-12' src={assets.b2b_logo} alt="" /> </Link>

      {/* Middle Part */}
      <ul className='hidden sm:flex lg:gap-12 sm:gap-5 gap-4 lg:text-2xl text-sm text-white'>

      <Link to="/" smooth={true} duration={500} className='flex flex-col items-center gap-1 group cursor-pointer hover:text-white text-yellow-400'>
      <p>HOME</p>
      </Link>

      <Link to='skills' smooth={true} duration={500} className='flex flex-col items-center gap-1 group cursor-pointer hover:text-white text-yellow-400'>
      <p>SKILLS</p>
      </Link>

      <Link to='projects' smooth={true} duration={500} className='flex flex-col items-center gap-1 group cursor-pointer hover:text-white text-yellow-400'>
      <p>PROJECTS</p>
      </Link>

      <Link to='about' smooth={true} duration={500} className='flex flex-col items-center gap-1 group cursor-pointer hover:text-white text-yellow-400'>
      <p>ABOUT</p>
      </Link>

</ul>
        {/* Social Media */}

  <div className='flex gap-4 items-center'>

     <div className='lg:flex gap-2 hidden'>

        <a target='_blank' href='https://www.linkedin.com/in/abhay-vashishth-422917349?'  className='sm:w-6 lg:w-7'><img className=' rounded-full w-full hover:scale-105 transition ease-in-out' src={assets.ln_icon} alt="" /> </a>

        <a target='_blank' href='https://x.com/abhayvashishthh?t=r_pKK4bjaI8Sd0OtuPH_-A&s=03'  className='sm:w-7 lg:w-8'><img className=' rounded-full w-full hover:scale-105 transition ease-in-out' src={assets.x_icon} alt="" /> </a>

        <a target='_blank' href='https://github.com/abhayV420'  className='sm:w-6 lg:w-7'>
            <img src={assets.github_icon} className=' rounded-full w-full hover:scale-105 transition ease-in-out  ' alt="" />
            {/* <p className='absolute text-[12px] text-center right-[-5px] bottom-[-5px] w-4 leading-4 bg-red-500 text-white aspect-square rounded-full s '> </p> */}
            </a>

     </div>

{/* for smaller acreens */}

<div className='w-8 min-w-6 lg:hidden block bg-white rounded-full border hover:border-purple-600'>
    <div onClick={()=>{
    setVisible(!visible);
    setNavVisible(false);
    setContactVisible(false)
    }}><img className='w-full cursor-pointer' src={visible ? assets.cross_icon : assets.more_icon} alt="" /></div>
  <div className={`${visible ? 'flex' : 'hidden'} absolute dropdown-menu pt-6 flex-col gap-5`}>

       <a onClick={()=>setVisible(false)} href='https://www.linkedin.com/in/abhay-vashishth-422917349?' target='_blank'  className='text-white flex items-center gap-5 group cursor-pointer'>
       <img className='w-8 border group-hover:border-purple-600 rounded-full' src={assets.ln_icon} alt="" />
       <p className='w-2/3 group-hover:text-yellow-500'>LINKED IN</p>
       </a>

       <a onClick={()=>setVisible(false)} href='https://x.com/abhayvashishthh?t=r_pKK4bjaI8Sd0OtuPH_-A&s=03' target='_blank' 
        className='text-white flex items-center gap-5 group cursor-pointer'>
       <img className='w-8 border group-hover:border-purple-600 rounded-full' src={assets.x_icon} alt="" />
       <p className='w-2/3 group-hover:text-yellow-500'>X</p>
       </a>

       <a onClick={()=>setVisible(false)} href='https://github.com/abhayV420' target='_blank'  className='text-white flex items-center gap-5 group cursor-pointer'>
       <img className='w-8 border group-hover:border-purple-600 rounded-full' src={assets.github_icon} alt="" />
       <p className='w-2/3 group-hover:text-yellow-500'>GITHUB</p>
       </a>
  </div>

</div>

<div className='relative group '>
<div className="absolute inset-0 bg-pink-600 rounded-lg blur-sm group-hover:blur-lg transition-all duration-500"></div>
<button onClick={()=>{
  setContactVisible(true);
  setVisible(false);
  setNavVisible(false)
}} className='lg:w-[170px] sm:w-36 w-20 text-center lg:py-3 py-2 sm:text-2xl text-sm max-h-14 text-white rounded-lg hover:border-purple-600 leading-none relative bg-black'>CONTACT</button>
</div>

<div className='bg-white border hover:border-purple-700 rounded-full'> <img onClick={()=>{
setNavVisible(!navVisible);
setVisible(false);
setContactVisible(false)
}} src={assets.dropdown_icon} className='w-9 min-w-6 cursor-pointer sm:hidden hover:bg-white transition-all duration-500 rounded-full' alt="" /></div>
</div>

{/* SideBar menu for Smaller screens */}
<div className={`fixed right-0 z-50 py-0 sideBar top-14 bottom-0 overflow-hidden bg-transparent transition-all ${navVisible ? 'w-1/2': 'w-0'}`}>

<div className='flex flex-col text-white lg:hidden pt-3'>
<div onClick={()=>{setNavVisible(false)}} className='flex items-center gap-4 p-3 group hover:cursor-pointer'>
<img className='h-6 rotate-180 bg-white border hover:border-purple-700 rounded-full' src={assets.dropdown_icon} alt="" />
</div>
<div className='flex flex-col gap-3'>
<Link onClick={()=>{setNavVisible(false)}} className='py-3 border text-center hover:border-purple-600 hover:text-white rounded-lg cursor-pointer' to='/' smooth={true} duration={500} >HOME</Link>
<Link onClick={()=>{setNavVisible(false)}} className='py-3 border text-center hover:border-purple-600 hover:text-white rounded-lg cursor-pointer' to='skills' smooth={true} duration={500} >SKILLS</Link>
<Link onClick={()=>{setNavVisible(false)}} className='py-3 border text-center hover:border-purple-600 hover:text-white rounded-lg cursor-pointer' to='projects' smooth={true} duration={500} >PROJECTS</Link>
<Link onClick={()=>{setNavVisible(false)}} className='py-3 border text-center hover:border-purple-600 hover:text-white rounded-lg cursor-pointer' to='about' smooth={true} duration={500} >ABOUT</Link>
</div>
</div>

</div>


    </header>
  )
}

export default Navbar