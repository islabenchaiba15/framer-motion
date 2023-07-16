'use client'
import React, { useState } from 'react' 
import {motion} from "framer-motion"
import { exploreWorlds } from '@/constants'
import TypingText from '@/components/TypingText'
import ExploreCard from '@/components/ExploreCard'

const ExploreComponent = () => {
  const [active,setActive]=useState('world-2')
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className="mx-auto py-32 flex flex-col items-center">
        <TypingText title='|The World'/>
        <motion.p
        className="text-white mt-4 font-bold text-[24px] sm:text-[38px] text-center ">
            <span className="font-bold ">Metaverseus </span> adipisicing elit. <br/>
              Laboriosam dolor eos eius <br/>
        </motion.p>
        <div className="my-[50px] flex md:flex-row flex-col gap-5 md:w-full px-32 h-[70vh] ">
            {exploreWorlds.map((world,index)=>(
                <ExploreCard key={world.id} 
                {...world} index={index} active={active} handleClick={setActive} />
            ))}
        </div>
    </motion.section>
  )
}

export default ExploreComponent