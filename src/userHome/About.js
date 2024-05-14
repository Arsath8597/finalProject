import React from 'react'
import {motion} from 'framer-motion'
import image from '../assets/animation.gif'
import bg from '../assets/circle.svg'


const Header = () => {


  return (
    <div className='lg:flex justify-between mb-10 px-16' id='UHeader'>
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:1}}
        >
           <div>
            <div className='w-[80%] mt-20'>
                <h1 className='text-4xl font-semibold mb-5'>"Connect via video with colleagues <span className='text-[red]'>worldwide."</span></h1>
                <div>
                    <p className='text-lg font-medium '>Stay connected and collaborate seamlessly with your colleagues, whether you're in the office or working remotely. Whether you're hosting team meetings, training sessions</p>
                    <button className='bg-[#B0C4DE] px-10 py-3 font-semibold text-2xl mt-8 rounded-xl hover:bg-black hover:text-white'><a href='/Meeting'>Join Meeting</a></button>
                </div>
            </div>
          
            </div>  
        </motion.div>
        <motion.div
        whileInView={{x:[100,0],opacity:[0,1]}}
        transition={{duration:0.8}}
        className='lg:w-[1200px]'
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