import React from 'react'
import {motion} from 'framer-motion'
import About1 from '../assets/about01.png'
import About2 from '../assets/about02.png'
import About3 from '../assets/about03.png'
import About4 from '../assets/about04.png'

const About = () => {
  const abouts=[
    {title:'WEB ',Discription:'Website planning, designing, and building web applications',imgUrl:About1 ,link: '/login' },
    {title:'VR ',Discription:'AR/VR video/app production and accompanying QA (Quality Assurance)',imgUrl:About2},
    {title:'VIDEO ',Discription:'Video and CG production from shooting to editing and adding narration',imgUrl:About3},
    {title:'APP ',Discription:'Mobile, Tablet, iOS, Android',imgUrl:About4}
  ]
  return (
    <div  className='lg:px-16 mt-32  ' id='Service'>
      <div className='flex justify-center items-center text-3xl font-semibold'>
      <h2 className='mb-16'>Digital Services we provide at Our Compony </h2></div>
      <div className=' grid lg:grid-cols-3  grid-cols-1'>
{abouts.map((About,index)=>(
  <motion.div
  whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5,type:'tween'}}
  key={abouts.title +index}
  className='w-[300px] mx-10 my-10' 
  ><a href={About.link}>
    <img className='' src={About.imgUrl} alt='about'/>
    <div className='flex justify-center items-center'>
    <h2 className='text-xl font-semibold'>{About.title}</h2></div>
    <div className='flex justify-center text-center	items-center'>
    <h2>{About.Discription}</h2></div></a>
  </motion.div>
))}
      </div>
    </div>
  )
}

export default About