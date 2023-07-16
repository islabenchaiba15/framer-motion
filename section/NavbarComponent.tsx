'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { navVariants } from '@/utils/motion'

const NavbarComponent = () => {
  return (
    <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='container mx-auto p-4 flex flex-row justify-between items-center'>
        <Image src="/search.svg" alt='oo' width={20} height={20}/>
        <h2 className="font-bold text-white text-[18px]">
            MetaVerse
        </h2>
        <Image src="/menu.svg" alt='oo' width={20} height={20}/>
    </motion.nav>
  )
}

export default NavbarComponent