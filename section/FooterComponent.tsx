import { socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
const FooterComponent = () => {
  return (
    <div className='flex p-4 mx-auto container flex-col items-center gap-4 py-12 sm:flex-row justify-between border-t-2 border-gray-600 mt-[50px]'>
        <div className="">
            <p className="font-bold text-white text-[14px] ">Metaversus</p>
        </div>
        <div className="">
            <p className="font-light text-white text-[12px] ">@copy 2023 copyrights all copies reserved</p>
        </div>
        <div className="flex flex-row gap-2">
             {socials.map((social,index) =>(
                <div className="" key={index}>
                    <a href={social.url}><Image src={social.url} alt="social" width={20} height={20} /></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterComponent