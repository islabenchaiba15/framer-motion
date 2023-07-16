import React from 'react'
import {motion} from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import Image from 'next/image'
interface Props{
    id : string
    imgUrl : string
    title : string
    active:any
    handleClick:any
    index:number
}
const motio=(delay:any) => ({
    hidden:{
        opacity:0,
        x:-100
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            type:'tween',
            duration:1,
            ease:"easeInOut",
            delay
        }
    }
} )
const ExploreCard = ({id,imgUrl,title,index,active,handleClick}:Props) => {
  return (
        <motion.div 
            variants={motio(index * 0.4)}
            className={`relative ${active===id ? 'md:flex-[3.5] flex-[10]' :
             'md:flex-[0.5] flex-[2]'} 
            flex items-center justify-center min-w-[280px] md:min-w-[120px]
             h-[600px] cursor-pointer transition-[flex] duration[0.7s] 
             ease-out-flex`}
            onClick={()=>handleClick(id)}
        >
            <Image src={imgUrl} alt='oo' objectFit='cover' layout="fill" className='absolute rounded-[24px]'/>
            {active!==id && (
                <h3 className="text-white font-semibold md:text-[30px] text-[10px] mt-[20px] absolute 
                z-10 md:bottom-16 md:rotate-[-90deg]">{title}</h3>
            )}
        </motion.div>
  )
}

export default ExploreCard