import React from 'react'
import{motion}  from 'framer-motion'


const Project = () => {
  return (
    <div className='mt-16 h-[70vh]'  id='Contact'>
      
      <motion.div
        whileInView={{y:[-50,0],opacity:[0,1]}}
        transition={{duration:0.5}
        
      } className='text-center w-full flex flex-col items-center'
        >
        <h1 className='mt-10 text-center text-4xl font-semibold uppercases  border-b-2 border-red-500'>GET IN TOUCH</h1>
        <div className='w-[60%] my-4'><p className=''>We Thrive when coming innovative ideas but also understand that a smart concept should be supported with measurable result</p></div>
        </motion.div>
<motion.div    whileInView={{y:[-50,0],opacity:[0,1]}}
        className='my-10 flex px-16 mt-10 justify-evenly'
        transition={{duration:1.1}
      }>
  <div >
    <motion.div  className=''>
      <h1 className='text-xl font-semibold mb-3'>Office Adddress</h1>
      <p>4455,galle road ,colombo<br/>
      343,Pettah,Colombo 11</p>
    </motion.div >
    <motion.div className='my-10 '>
      <h1 className='text-xl font-semibold mb-3'>Email</h1>
      <p>arsath@gmail.com</p>
    </motion.div>
    <motion.div className='my-10'>
      <h1 className='text-xl font-semibold mb-3'>Phone</h1>
      <p>+94 0112233443</p>
    </motion.div>
  </div>
      
        <div>
          <div>
            <input className='py-3 px-10  bg-gray-50' type='text' placeholder='Enter Your Name'/>
            <input className='py-3 px-10 bg-gray-50 mx-5' type='text' placeholder='Enter Your Email'/>
          </div>
          <div>
            <input  className='py-3 px-44 my-16 bg-gray-50' placeholder='Enter Your Subject'/>
          </div>
          <div>
          <textarea className='py-3 px-44  bg-gray-50' type="text" placeholder="enter Your Message"/></div>
          <div className='flex justify-end'><motion.button className='bg-red-400 text-white py-3 mt-8  px-5 rounded-xl '>Send Message</motion.button></div>
        </div>
        </motion.div>
      

    </div>
  )
}

export default Project