'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const InteractiveLogo = () => {
  return (
    <div id='logo' className='relative h-[50%] w-[70%]'>
      <Image
        src='/be-graphic-colored.svg'
        alt='be-graphic-logo-blue'
        priority
        height={100}
        width={200}
        className='absolute w-full h-full'
        draggable={false}
      />
    </div>
  )
}

export default InteractiveLogo
