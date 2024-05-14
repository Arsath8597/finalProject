import React, { useEffect, useState } from 'react'
import Logo from '../assets/Lg.png'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
import img1 from '../image/generic-user-icon-13.jpg'


 const Navbar = () => {

    const [isOpen ,setIsOpen]=useState(false);
    const [toggle,setToggle]=useState(false)
    const [isSticky, setIsSticky] = useState(false);

    const toggleDropDown=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 10); // Update state after 100vh scroll
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./login";
      };
  return (
    <div  className={`fixed top-0 left-0 w-full lg:px-4 py-2 transition duration-300 ease-in-out z-10 ${
      isSticky ? 'bg-gray-300  h-20 text-black shadow-md' : 'bg-transparent shadow-xl'
    }`}>
    <div className='flex w-[100vw] lg:px-10 justify-between items-center uppercase'>
      <a href='userhome'>
    <div className='cursor-pointer items-center flex'>
        <img className='w-[120px]' src={Logo} alt='Logo'/>
        <h1 className='text-3xl font-semibold text-white'>VS Platform</h1>
    </div></a>
    <ul className='lg:flex hidden   items-center mr- text-lg font-semibold'>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#UHome'>Home</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#UHeader'>About</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/userhome/meeti'>Meeting</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#UMeeting'>Project</a></li>
        <li className='mx-10 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#UContact'>Contact</a></li>
        <motion.button type='button' onClick={toggleDropDown} className='    mr-20 rounded-xl mx-10 transition duration-300 cursor-pointer'     whileTap={{ scale: 0.7 }}> <img
            src={img1} // Path to your user profile icon
            alt="User Profile"
            className="h-10 w-10 rounded-2xl"
          /></motion.button>

    </ul></div>
    {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Profile
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Settings
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    <div className='lg:hidden'>
                {toggle ? (
                    <motion.div
                        className='w-80'
                        whileInView={{x:[300,0]}}
                        transition={{duration:0.85,ease:"easeInOut"}}
                    >  
                       
                       <div className='flex w-[100vw] justify-between items-center uppercase'>
  
                       <ul className='flex justify-center items-center h-screen flex-col  bg-gray-200 rounded-2xl bg-opacity-90  font-semibold text-2xl'> 
    <div className='flex justify-end items-start mr-[350px] md:mr-[400px] mt-[-250px]'>
  <HiX className='text-white bg-slate-700 rounded-3xl p-1 w-9 h-9' onClick={() => setToggle(false)} />
</div>
        <li  className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#userHome'>Home</a></li>
        <li  className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/userHome/meet'>About</a></li>
        <li  className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/meeting'>Meeting</a></li>
        <li  className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/userhome#service'>Service</a></li>
        <li  className='mx-10 my-7 transition duration-300 cursor-pointer hover:text-blue-600'><a href='/#UContact'>Contact</a></li>
        <motion.button type='button' onClick={toggleDropDown} className=' mt-10  rounded-xl mx-10 transition duration-300 cursor-pointer'     whileTap={{ scale: 0.7 }}> <img
            src={img1} // Path to your user profile icon
            alt="User Profile"
            className="h-10 w-10 rounded-2xl"
          /></motion.button>

    </ul></div>
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