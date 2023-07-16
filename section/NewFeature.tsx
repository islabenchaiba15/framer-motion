'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { planet } from './GetStarted'
import TypingText from '@/components/TypingText'
import FeatureComponent from '@/components/FeatureComponent'
import { newFeatures } from '@/constants'
const NewFeature = () => {
  return (
    <div className='flex flex-col sm:flex-row-reverse px-6 sm:justify-end lg:ml-[10%] py-32 gap-8 mx-auto container'>
        <motion.div className="sm:w-1/2 mx-auto"
         variants={planet('right')}
         initial="hidden"
         whileInView="show"
         >
            <Image src="/whats-new.png" alt='dd' width={400} height={(400)}/>
        </motion.div>
        <div className="sm:w-1/2">
            <div className="">
                <TypingText title='|how metaversus woks' />
            </div>
            <div className="py-6">
                <motion.p
                    className="text-white mt-4 font-bold text-[30px] sm:text-[46px] text-left ">
                    <span className="font-bold ">Metaverseus XXXX</span> adipisicing elit. <br/>
                    
                </motion.p>
            </div>
            <div className="flex flex-row gap-5">
                {newFeatures.map((feature,index) =>(
                    <FeatureComponent key={index} title={feature.title} imgUrl={feature.imgUrl} subtitle={feature.subtitle}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewFeature