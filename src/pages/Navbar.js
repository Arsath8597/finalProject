import React, { useEffect, useState } from 'react'
import Logo from '../assets/Lg.png'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'


 const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 100); // Update state after 100vh scroll
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

  return (
    <div  className={`fixed top-0 left-0 w-full px-4 py-2 transition duration-300 ease-in-out z-10 ${
        isSticky ? 'bg-gray-800  h-20 text-white shadow-md' : 'bg-transparent shadow-xl'
      }`}>
    <div className='flex w-[100vw] justify-between items-center uppercase'>
    <div className='justify-center items-center flex'>
        <img className='w-[120px]' src={Logo} alt='Logo'/>
        <h1 className='text-3xl font-semibold text-white'>VS Platform</h1>
    </div>
    <ul className='lg:flex hidden   items-center mr- text-lg font-semibold'>
        {/* {['Home','About','Project','Hero','Work'].map((item)=>(
            <li className='mx-10 hover:text-blue-600' key={`link-${item}`}>
                
                <div/>
                <a className=' transition duration-300' href={`#${item}`}>{item}</a>
            </li>
        ))} */}
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Home'>Home</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Header'>About</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Meeting'>Meeting</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/'>Project</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#Contact'>Contact</a></li>
        <motion.button className='bg-blue-600 uppercase  py-3 px-5 rounded-xl mx-10 transition duration-300 cursor-pointer text-white hover:text-white hover:bg-black'     whileTap={{ scale: 0.7 }}><a href='/login'> SingIn</a></motion.button>
    </ul></div>
    <div className='lg:hidden'>
                {toggle ? (
                    <motion.div
                        className='w-80'
                        whileInView={{x:[300,0]}}
                        transition={{duration:0.85,ease:"easeInOut"}}
                    >  <HiX className='ml-16  text-white  bg-slate-700 rounded-3xl p-1 w-9 h-9' onClick={()=>setToggle(false)}/>
                       
                        <ul className='list-none w-80 h-100 mb-40 p-10 bg-gray-200 rounded-2xl ml-10 z-50 text-xl  font-semibold absolute'> {/* Apply list-none class to remove default list styling */}
                      
                            {/* {['Home','About','Project','Hero','Work'].map((item) => (
                                <li className=' my-10 ' key={item}>
                                    <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
                                </li>
                                
                            ))} */}

                            <li>Home</li>
        
                        </ul>
                    </motion.div>
                ) : (
                    <HiMenuAlt4 className='mr-5 text-white  bg-slate-700 rounded-3xl p-1 w-9 h-9' onClick={()=>setToggle(true)}/>
                )}
            </div>
  </div>
  )
}

export default Navbar