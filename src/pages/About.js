import React from 'react'
import {motion} from 'framer-motion'
import image from '../assets/animation.gif'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Header = () => {


    // const handleClick = () => {
    //     alert("first ");
    //     setTimeout(() => {
    //         window.location.href = '/login'; // Replace '/another-page' with the URL of the page you want to redirect to
    //       },); 
    //   };

    const handleClick = () => {
        
        confirmAlert({
          title: 'Alert',
          message: 'First, you have to Sing in',
          buttons: [
            {
              label: 'Sing in',
              onClick: () => {
              
                // Redirect to another page after clicking "OK"
                window.location.href = '/Login';
              }
              
            },
            {
              label: 'Cancel',
              onClick: () => {}
            }
          ]
        });
        
      };
  return  (
    <div className='flex justify-between mb-10 px-16' id='Header'>
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:1}}
        >
           <div>
            <div className='w-[80%] mt-20'>
                <h1 className='text-4xl font-semibold mb-5'>"Connect via video with colleagues <span className='text-[red]'>worldwide."</span></h1>
                <div>
                    <p className='text-lg font-medium '>Stay connected and collaborate seamlessly with your colleagues, whether you're in the office or working remotely. Whether you're hosting team meetings, training sessions</p>
                    <button className='bg-[#B0C4DE] px-10 py-3 font-semibold text-2xl mt-8 rounded-xl hover:bg-black hover:text-white' onClick={handleClick}>Join Meeting</button>
            
                </div>
            </div>
          
            </div>  
        </motion.div>
        <motion.div
        whileInView={{x:[100,0],opacity:[0,1]}}
        transition={{duration:0.8}}
        className='w-[1200px]'
        >
            <img src={image}/>
            {/* <motion.img
             whileInView={{x:[100,0],scale:[0,1]}}
             transition={{duration:0.8,ease:'easeInOut'}}
             src={bg}
             alt='profile'
            >

            </motion.img> */}
        </motion.div>
     
    </div>
  )
}

export default Header