import './App.css'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import {Element} from 'react-scroll'
import { useContext } from 'react'
import B2BContextProvider, { B2BContext } from './contexts/B2BContext'
import ContactMe from './pages/ContactMe'
import SocialMediaSection from './components/SocialMediaSection'


function App() {
  const {contactVisible} = useContext(B2BContext);
  return (
    <div className='w-full flex flex-col gap-2 bg-gray-900 '>
     <ToastContainer/>
      <NavBar/>
      <SocialMediaSection/>
      {
        contactVisible ? <ContactMe/> : null
      }
      <Element name='/'><Home/></Element>
      <Element name='skills'> <Skills/></Element>
      <Element name='projects'> <Projects/></Element>  
      <Element name='about'><About/></Element>
    </div>
  )
}

export default App
