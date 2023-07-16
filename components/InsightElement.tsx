import Image from 'next/image';
import React from 'react'
interface insight{
    imgUrl:string;
    title:string
    subtitle:string
}
const InsightElement = (insight:insight) => {
  return (
    <div className='flex flex-row sm:gap-10 gap-5 sm:w-[80%] px-8 mx-auto justify-between items-start'>
        <div className="relative min-w-[150px] h-[150px]">
            <Image src={insight.imgUrl} alt='oo' layout='fill' className='rounded-2xl  ' objectFit="cover" />
        </div>
        <div className="flex flex-col gap-2">
            <div className="">
                <p className="font-semibold text-white sm:text-[28px] text-[16px] ">
                    {insight.title}
                </p>
            </div>
            <div className="">
                <p className="font-light text-white sm:text-[13px] text-[10px]">
                    {insight.subtitle}
                </p>
            </div>
        </div>
        <div className="border-[2px] bg-transparent sm:w-24 sm:h-24 hidden  flex-none rounded-full sm:flex justify-center items-center">
            <Image src="/arrow.svg" alt='oo' width={20} height={20} objectFit='cover' />
        </div>
    </div>
  )
}

export default InsightElement