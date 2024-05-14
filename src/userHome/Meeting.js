import React from 'react'
import CreateMeeting from './Pages/createMeeting';

export const Meeting = () => {
  return (
    <div id='meeti'>
      <CreateMeeting/>
    </div>
  )
}


export default Meeting;











// import React from 'react'
// import {motion} from 'framer-motion'
// import About2 from '../assets/add-meeting.svg'
// import About3 from './join-meeting.svg'
// import About4 from './schedule.svg'

// const About = () => {
//   const abouts=[
   
//     {title:'New Meeting',Discription:'Start and instant Meeting',imgUrl:About2},
//     {title:'Join Meeting',Discription:'Via inviation link',imgUrl:About3},
//     {title:'Schedule Meeting',Discription:'Plan Your Meeting Schedule',imgUrl:About4}
//   ]
//   return (
//     <div className='px-10 mt-32  ' id='UMeeting'>
//       <div className='flex justify-center items-center text-3xl font-semibold'>
//       <h2 className='mb-16'>Digital Services we provide at Our Compony </h2></div>
//       <div className=' grid grid-cols-3 cursor-pointer text-white'>
// {abouts.map((About,index)=>(
//   <motion.div
//   whileInView={{opacity:1}}
//   whileHover={{scale:1.02}}
//   transition={{duration:0.5,type:'tween'}}
//   key={abouts.title +index}
//   className='w-[250px] h-48 bg-blue-400 mx-10 rounded-lg'  
//   >
//     <img className='bg-slate-500 p-2 m-2 rounded-xl' src={About.imgUrl} alt='about'/>
//     <div className='flex justify-center items-center'>
//     <h2 className='text-xl mt-8 font-semibold'>{About.title}</h2></div>
//     <div className='flex justify-center text-center	items-center'>
//     <h2>{About.Discription}</h2></div>
//   </motion.div>
// ))}
//       </div>
//     </div>
//   )
// }

// export default About