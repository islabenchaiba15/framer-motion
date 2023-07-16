'use client'
import TypingText from '@/components/TypingText'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { staggerContainer } from '@/utils/motion'


const motio={
    hidden:{
        opacity:0,
        y:100
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'tween',
            duration:1,
            ease:"easeInOut",
            delay:0.5
        }
    }
} 

const moo={
    hidden:{
        opacity:0,
        y:150
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'tween',
            duration:1,
            ease:"easeInOut",
            delay:0.5
        }
    }
} 

const AboutComponent = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    className='mx-auto container flex flex-col items-center py-10 gap-10'>
        <div className="">
            <TypingText title="| About Metaversus" />
        </div>
        <motion.p
        variants={motio}
        initial="hidden"
        whileInView="show"
        className="text-white text-[18px] sm:text-[24px] text-center font-light">
            <span className="font-bold ">Metaverseus </span> dolor, sit amet consectetur xxx <br/>
             adipisicing elit. Laboriosam dolor eos eius <br/>
            ipsam eum, hic <span className="font-bold ">Metaverseus </span> delectus xxx<br/>
             maxime in odio. Dolores veritatis explicabo<br/>
             officiis modi sunt pariatur <span className="font-bold ">Metaverseus </span> nemo <br/>
        </motion.p>
        <motion.div className='py-4' variants={moo} initial="hidden" whileInView="show">
            <Image src="/arrow-down.svg" alt='arrow' width={18} height={28}/>

        </motion.div>
    </motion.div>
  )
}

export default AboutComponent