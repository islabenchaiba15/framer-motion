'use client'
import TypingText from '@/components/TypingText'
import React from 'react'
import  {motion} from 'framer-motion'
import InsightElement from '@/components/InsightElement'
import { insights } from '@/constants'
const InsightsComponent = () => {
  return (
    <div className='flex flex-col gap-4 '>
        <div className="mx-auto">
            <TypingText title='|Insights'/>
        </div>
        <div className="mx-auto">
        <motion.p
        className="text-white mt-4 font-bold text-[30px] sm:text-[46px] text-left ">
            Insights about metaverse
        </motion.p>
        </div>
        <div className="flex flex-col gap-8">
            {insights.map((insight,index)=>(
                <InsightElement key={index} {...insight}/>
            ))}
            
        </div>
    </div>
  )
}

export default InsightsComponent