'use client';
import TypingText from '@/components/TypingText'
import React from 'react'
import {motion} from'framer-motion'
import StartSteps from '@/components/StartSteps';
import { startingFeatures } from '@/constants';
import Image from 'next/image';
import { planetVariants } from '@/utils/motion';

export const planet=(direction:any) =>({
    hidden:{
        x:direction==='left' ? '-100%': '100%',
        rotate:120
    },
    show:{
        x:0,
        rotate:0,
        transition:{
            type:'spring',
            ease:'easeIn',
            delay:0.3,
            duration:2
        }
    }
})
const GetStarted = () => {
  return (
    <div className=' container mx-auto px-6 sm:py-32 flex flex-col-reverse sm:flex-row-reverse'>
        <div className="sm:w-1/2 mx-auto">
            <div className="">
                <TypingText title='|get started'/>
            </div>
            <div className="">
                <motion.p
                    className="text-white mt-4 font-bold text-[30px] sm:text-[46px] text-left ">
                    <span className="font-bold ">Metaverseus XXXX</span> adipisicing elit. <br/>
                    
                </motion.p>
            </div>
            <div className="flex flex-col gap-5 pt-6">
                {startingFeatures.map((feature,index)=>(
                    <StartSteps key={index} feature={feature} index={index + 1}/>
                ))}
            </div>
        </div>
        <motion.div 
        variants={planet('left')}
        initial="hidden"
        whileInView="show"
        className="sm:w-1/2 mx-auto">
            <Image src="/get-started.png" alt='dd' width={400} height={(400)} />
        </motion.div>
    </div>
  )
}

export default GetStarted