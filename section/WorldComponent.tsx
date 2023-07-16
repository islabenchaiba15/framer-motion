'use client';
import TypingText from '@/components/TypingText'
import React from 'react'
import{motion} from 'framer-motion'
import Image from 'next/image';
const people={
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      delayChildren:0.5,
      staggerChildren: 0.5
    }
  }
}
export const homme=(direction:any) =>({
  hidden:{
      x:direction==='left' ? '-1000px': '1000px',
  },
  show:{
      x:0,
      transition:{
          type:'spring',
          ease:'easeIn',
          duration:2
      }
  }
})
const WorldComponent = () => {
  return (
    <div className='flex flex-col gap-6 py-32 '>
        <div className="mx-auto">
            <TypingText title="|People On The World"/>
        </div>
        <motion.p
             className="text-white mt-4 sm:px-64 px-8 font-bold text-[30px] sm:text-[46px] text-center ">
           Track friends around you and invite them to play together in the same world
        </motion.p>
        <motion.div
        variants={people}
        initial="hidden"
        whileInView="show"
        className="relative mx-auto w-full sm:w-[70%] max-h-[550px]">
            <Image src="/map.png" alt='ggg'  width={1000} height={500} objectFit='cover' className='mx-auto'/>
            <motion.div 
           variants={homme('left')}
            className="absolute sm:w-[50px] sm:h-[50px] w-[20px]  rounded-full p-1 bg-gray-400 h-[20px] top-[4%] left-[12%]">
              <Image src="/people-01.png" alt='ggg'  width={400} height={400} objectFit='cover'  className='w-full h-full'/>
            </motion.div>
            <motion.div 
            variants={homme('left')}
            className="absolute sm:w-[50px] sm:h-[50px] w-[20px]  rounded-full p-1 bg-gray-400 h-[20px] sm:top-[18%] top-[8%] left-[37%]">
              <Image src="/people-03.png" alt='ggg'  width={400} height={400} objectFit='cover'  className='w-full h-full'/>
            </motion.div>
            <motion.div 
             variants={homme('right')}
            className="absolute sm:w-[50px] sm:h-[50px] rounded-full p-1 bg-gray-400 w-[20px] h-[20px] top-[2%] right-[40%]">
              <Image src="/people-01.png" alt='ggg'  width={400} height={400} objectFit='cover'  className='w-full h-full'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default WorldComponent