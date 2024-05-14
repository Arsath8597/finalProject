import React from 'react'
import{motion}  from 'framer-motion'


const Project = () => {
  return (
    <div><div className='flex lg:hidden '><div className="min-h-screen bg-gray-100 flex lg: items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">GET IN TOUCH</h1>
        <p className="mt-2 text-gray-600">
          We Thrive when coming innovative ideas but also understand that a smart concept should be supported with measurable result
        </p>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Enter Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Enter Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Enter Your Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Enter Your Message</label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 text-center grid">
        <p className="text-gray-700">
          <strong>Office Address:</strong> 4455, Galle Road, Colombo 343, Pettah, Colombo 11
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> arsath@gmail.com
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Phone:</strong> +94 0112233443
        </p>
      </div>
    </div>
  </div></div>
    <div className='mt-16 h-[70vh] lg:block hidden'  id='Contact'>
      
      <motion.div
        whileInView={{y:[-50,0],opacity:[0,1]}}
        transition={{duration:0.5}
        
      } className='text-center w-full flex flex-col items-center'
        >
          
        <h1 className='mt-10 text-center text-4xl font-semibold uppercases  border-b-2 border-red-500'>GET IN TOUCH</h1>
        <div className='w-[60%] my-4'><p className=''>We Thrive when coming innovative ideas but also understand that a smart concept should be supported with measurable result</p></div>
        </motion.div>
        <div className='flex flex-col'>
<motion.div    whileInView={{y:[-50,0],opacity:[0,1]}}
        className='my-10 flex px-16 mt-10 justify-evenly'
        transition={{duration:1.1}
      }>
  <div className=''>
    <motion.div  className=' lg:flex hidden'>
      <h1 className='text-xl font-semibold mb-3'>Office Adddress</h1>
      <p>4455,galle road ,colombo<br/>
      343,Pettah,Colombo 11</p>
    </motion.div >
    <motion.div className='my-10  grid lg:flex'>
      <h1 className='text-xl font-semibold mb-3'>Email</h1>
      <p>arsath@gmail.com</p>
    </motion.div>
    <motion.div className='my-10 grid lg:flex'>
      <h1 className='text-xl font-semibold mb-3'>Phone</h1>
      <p>+94 0112233443</p>
    </motion.div>
  </div>
      
        <div>
          <div className='grid '>
            <input className='py-3 w-full px-10  bg-gray-50' type='text' placeholder='Enter Your Name'/>
            <input className='py-3 px-10 bg-gray-50 mx-5' type='text' placeholder='Enter Your Email'/>
          </div>
          <div className='grid lg:flex'>
            <input  className='py-3 lg:px-44 my-16 bg-gray-50' placeholder='Enter Your Subject'/>
          </div>
          <div className='grid lg:flex'>
          <textarea className='py-3 lg:px-44  bg-gray-50' type="text" placeholder="enter Your Message"/></div>
          <div className='flex lg:justify-end'><motion.button className='bg-red-400 text-white py-3 mt-8  lg:px-5 rounded-xl '>Send Message</motion.button></div>
        </div>
        </motion.div>
        </div>
      

    </div></div>
  )
}

export default Project