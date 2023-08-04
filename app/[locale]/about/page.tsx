'use client'
import { useLocale } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const page = () => {
  const hola = ['¡', 'H', 'o', 'l', 'a', '!']
  const soy = ['S', 'o', 'y']
  const lizeth = ['L', 'i', 'z', 'e', 't', 'h']
  const salcedo = ['S', 'a', 'l', 'c', 'e', 'd', 'o']
  const hi = ['H', 'i', '!']
  const im = ['I', `'`, 'm']
  const locale = useLocale()

  return (
    <div className='lg:w-screen lg:h-screen flex lg:flex-row'>
      <div className='bg-[#f4eeed] lg:h-full lg:w-[53vw] relative'>
        <div className='absolute right-[calc(30%-18px)] flex flex-col justify-center text-center'>
          <div className='relative'>
            <p className='text-blue-400 font-secondary text-4xl absolute z-[1]'>
              {hola.map((letter) => (
                <span>{letter}</span>
              ))}
            </p>
            <div>
              <Image
                src='/liz-salcedo.webp'
                alt='Liz Salcedo be-graphic'
                width={1000}
                height={1200}
                className='h-auto w-[18vw] z-[2] absolute'
              />
            </div>
            <div className=''>
              <p className='text-white font-secondary text-2xl'>
                {soy.map((letter) => (
                  <span>{letter}</span>
                ))}
              </p>
              <p className='text-blue-400 font-secondary text-6xl'>
                {lizeth.map((letter) => (
                  <span>{letter}</span>
                ))}
              </p>
              <p className='text-blue-400 font-secondary text-6xl'>
                {salcedo.map((letter) => (
                  <span>{letter}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blue-400 lg:h-full lg:w-[47vw]'></div>
    </div>
  )
}

export default page
