import React from 'react'
import{motion , AnimatePresence }  from 'framer-motion'
import { useSpring, animated } from 'react-spring';
function Number({n}){
  const {number}=useSpring({
    from:{number:0},
    number:n,
    delay:200,
    config:{mass:1,tension:20,friction:10},
  });
  return<animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}


 const Hero = () => {


  const text = " Peace of mind that your events will go off without a hitch.".split(" ");
  return (
    <div id='Home' className='p-16  bg-gradient-to-br from-rose-400 to-white'>
      <div className='flex flex-col items-center'>
      <div className='text-5xl mt-24 font-semibold my-5 text-center w-[80%]'>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
      <p className='text-xl text-center'>Personalized implementation sessions, responsive live event support, and actionable feedback calls with our business leaders.</p>
      </div>
      <div className='flex justify-between'>
      <div className='mt-12'>
        <div className='w-52 h-44 flex flex-col bg-gradient-to-br from-rose-300 rounded-3xl shadow-2xl to-white  '>
        <div className='flex text-4xl p-2  font-semibold mt-8 bg justify-center'> 
        <Number n={100}/>%
        </div>
        <p className='text-center text-xl'>Support CSAT</p>
        </div>

        
      </div>   <div className='mt-12'>
        <div className='w-52 h-44 flex flex-col bg-gradient-to-br from-rose-300 rounded-3xl shadow-2xl to-white  '>
        <div className='flex text-4xl p-2  font-semibold mt-8 bg justify-center'> 
        <Number n={99.9}/>%
        </div>
        <p className='text-center text-xl'>Uptime</p>
        </div>

        
      </div>
      <div className='mt-12'>
        <div className='w-52 h-44 flex flex-col bg-gradient-to-br from-rose-300 rounded-3xl shadow-2xl to-white  '>
        <div className='flex text-4xl p-2  font-semibold mt-8 bg justify-center'> 
        <Number n={4}/>
        </div>
        <p className='text-center text-xl'>G2 Review</p>
        </div>

        
      </div>
      <div className='mt-12'>
        <div className='w-52 h-44 flex flex-col bg-gradient-to-br from-rose-300 rounded-3xl shadow-2xl to-white  '>
        <div className='flex text-4xl p-2  font-semibold mt-8 bg justify-center'> 
        <Number n={34}/> &nbsp;Sec
        </div>
        <p className='text-center text-xl'>Avg. live event support response time</p>
        </div>

        
      </div>
      </div>
    </div>
  )
}

export default Hero