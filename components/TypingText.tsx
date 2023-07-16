'use client'
import React from 'react'
import {motion} from 'framer-motion'
interface Props{
    title : string
}

const heading={
    hidden:{
        opacity:0,
        x:-200
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            type:'tween',
            ease:'easeIn'
        }
    }

}
const typing={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:0.7,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
}
const TypingText = ({title}:Props) => {
  return (
    <div>
        <motion.p 
        variants={typing}
        initial="hidden"
        whileInView="show"
        className="opacity-0">
            {Array.from(title).map((letter,index)=>(
                <motion.span 
                variants={heading}
                className='text-white text-[16px] ' key={index}>
                    {letter===' '  ? '\u00A0' :letter}
                </motion.span>
            ))}
        </motion.p>
    </div>
  )
}

export default TypingText