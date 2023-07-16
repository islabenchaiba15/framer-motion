import Image from 'next/image'
import React from 'react'
interface Props{
    imgUrl:string
    title:string
    subtitle:string
}
const FeatureComponent = ({imgUrl,title,subtitle}:Props) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className="w-[70px] h-[70px] rounded-2xl bg-[#323f5d] flex flex-none  items-center justify-center">
            <Image src={imgUrl} alt='poo' width={30} height={30}/>
        </div>
        <p className="text-white font-bold text-[18px]">
            {title}
        </p>
        <p className="text-white text-[14px] opacity-60">{subtitle}</p>
    </div>
  )
}

export default FeatureComponent