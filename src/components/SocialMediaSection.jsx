import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6"; 
import IconButton from "./IconButton";

function SocialMediaSection() {

  return (
    <>
      <div className="fixed left-2 top-85 z-2 hidden lg:block">

        <div className="mb-4">
           <IconButton text="Github">
             <FaGithub size={20}  />
           </IconButton>
        </div>
        
        
       <div className="mb-4">
          <IconButton text="Twitter" >
             <FaXTwitter size={20} />
          </IconButton>
       </div>

       <div>
        <IconButton text="LinkedIn">
            <FaLinkedin size={20}/>
        </IconButton>
       </div>
        
      </div>
    </>
  )
}

export default SocialMediaSection