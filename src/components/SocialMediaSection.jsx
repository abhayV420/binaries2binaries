import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaUser} from "react-icons/fa"; 
import IconButton from "./IconButton";

function SocialMediaSection() {

  return (
    <>
      <div className="fixed left-2 top-85 z-2 hidden lg:block">

        <div className="mb-4">
           <a href="https://github.com/abhayV420">
             <IconButton text="Github">
               <FaGithub size={18}  />
             </IconButton>
           </a>
        </div>
        
        
       <div className="mb-4">
         <a href="https://x.com/abhayvashishthh?t=r_pKK4bjaI8Sd0OtuPH_-A&s=03">
            <IconButton text="Twitter" >
               <FaXTwitter size={18} />
            </IconButton>
         </a>
       </div>

       <div className="mb-4">
          <a href="https://www.linkedin.com/in/abhay-vashishth-422917349?">
            <IconButton text="LinkedIn">
              <FaLinkedin size={18}/>
            </IconButton>
          </a>
       </div>

       <div className="mb-4">
         <a href="https://medium.com/@abhayvashishthh">
           <IconButton text="Medium">
             <FaMedium size={18}/>
           </IconButton>
         </a>
       </div>
       
       <div className="mb-4">
          <a href="">
            <IconButton text="LinkedIn">
              <FaUser size={18}/>
            </IconButton>
          </a>
       </div>
        
      </div>
    </>
  )
}

export default SocialMediaSection