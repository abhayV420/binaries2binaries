import React, {useContext, useRef} from 'react';
import { assets } from '../assets/assets';
import { B2BContext } from '../contexts/B2BContext';;
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const {setContactVisible} = useContext(B2BContext);

   //  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pbjmbcc', 'template_3ftwiov', e.target, {
          publicKey: 'K86EThwl10cTSK_yY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    };


  return (
    <div className="bg-gray-100 lg:py-7 fixed top-20 right-5 rounded-xl z-2 sm:min-w-[500px] min-w-3/4 max-h-[60%] sm:max-h-[55%] lg:min-w-[670px] lg:max-h-[60%] border-1 border-black">
      <button onClick={()=>setContactVisible(false)} className='absolute top-1 left-1 cursor-pointer'><img className='w-7 ' src={assets.cross_icon_2} alt="" /></button>
       <form onSubmit={sendEmail} className='px-4 py-3 w-full flex flex-col sm:items-center sm:gap-10 gap-2'>
          <h1 className='font-extrabold text-3xl w-full text-center'>Contact Me</h1>
          
          <div className='flex flex-col gap-3 w-3/4 mr-8'>
            
             <div className='flex flex-col gap-1'>
                <label className='ml-1 font-medium' htmlFor="name">Name</label>
                <input className='px-1 py-1 rounded-lg' placeholder='Your Name' name='from name' id='name' type="text" required />
             </div>

             <div className='flex flex-col gap-1'>
                <label className='ml-1 font-medium' htmlFor="email">Email</label>
                <input className='px-1 py-1 rounded-lg' placeholder='you@example.com' name='from email' id='email' type="email" required />
             </div>

             <div className='flex flex-col gap-1'>
                 <label className='ml-1 font-medium' htmlFor="message">Message</label>
                 <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full sm:text-sm border-gray-300 px-1 py-1 rounded-lg h-20"
                  placeholder="Your Message"
                  required
                />
             </div>

          </div>
          <button className='bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-xl text-center text-white p-3 mb-5 md:mb-0' type="submit">Send Messsage</button>
       </form>
    </div>
  );
};

export default ContactMe;