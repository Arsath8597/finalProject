import React, { useEffect, useState } from 'react'
import Logo from '../assets/Lg.png'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'


 const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 100); 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

  return (
    <div  className={`fixed top-0 left-0 w-full lg:px-4 py-2 transition duration-300 ease-in-out z-10 ${
        isSticky ? 'bg-gray-300  h-20 text-black shadow-md' : 'bg-transparent shadow-xl'
      }`}>
     
    <div className='flex w-[100vw] lg:px-10 justify-between items-center uppercase'>
    <a href='/'>  <div className=' items-center flex'>
        <img className='w-[120px]' src={Logo} alt='Logo'/>
        <h1 className='text-3xl font-semibold text-white'>VS Platform</h1>
    </div></a>
    <ul className='lg:flex hidden   items-center mr- text-lg font-semibold'>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Home'>Home</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Header'>About</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Meeting'>Meeting</a></li>
   
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Contact'>Contact</a></li>
        <motion.button className='bg-gray-600 uppercase  py-3 px-5 rounded-xl mx-10 transition duration-300 cursor-pointer text-white hover:text-white hover:bg-black'     whileTap={{ scale: 0.7 }}><a href='/login'> SingIn</a></motion.button>
    </ul></div>
    <div className='lg:hidden'>
                {toggle ? (
                    <motion.div
                    className=''
                        whileInView={{x:[300,0]}}
                        transition={{duration:0.85,ease:"easeInOut"}}
                    >  
                       
                        <ul className='flex justify-center  items-center h-screen flex-col  bg-gray-200 rounded-2xl bg-opacity-90  font-semibold text-2xl'> 
                        <div className='flex justify-end items-start mr-[300px] md:mr-[400px] mt-[-300px]'>
  <HiX className='text-white bg-slate-700 rounded-3xl p-1 w-9 h-9' onClick={() => setToggle(false)} />
</div>
<li className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Home' onClick={() => setToggle(false)}>Home</a></li>
        <li onClick={() => setToggle(false)} className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Header'>About</a></li>
        <li onClick={() => setToggle(false)} className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Meeting'>Meeting</a></li>
   
        <li onClick={() => setToggle(false)} className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Contact'>Contact</a></li>
        <motion.button className='bg-gray-600 uppercase  py-3 px-5 rounded-xl mx-10 transition duration-300 cursor-pointer text-white hover:text-white hover:bg-black'     whileTap={{ scale: 0.7 }}><a href='/login'> SingIn</a></motion.button>
        
                        </ul>
                    </motion.div>
                ) : (
                    <div className='flex justify-end'>
                    <HiMenuAlt4 className='mr-5 justify-end absolute mt-[-60px] text-white  bg-slate-700 rounded-3xl p-1 w-9 h-9' onClick={()=>setToggle(true)}/></div>
                )}
            </div>
  </div>
  )
}

export default Navbar