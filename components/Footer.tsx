'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BsFileEarmarkPerson, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { RxArrowRight } from 'react-icons/rx'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023)
    }

    if (typeof window !== 'undefined') {
      handleResize() // Initial check
      window.addEventListener('resize', handleResize) // Listen for resize events
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize) // Clean up the listener
      }
    }
  }, [])

  const t = useTranslations('Footer')
  return isMobile ? (
    <footer className='h-fit p-8 flex flex-col justify-center w-screen font-primary bg-pink text-white text-sm md:text-base lg:text-xl'>
      <div className='flex flex-row w-full h-full justify-center gap-7 sm:gap-16 items-center'>
        <div className='flex flex-col gap-3 sm:gap-6 h-full w-[50%] sm:w-fit'>
          <Link href='/'>
            <Image
              src='/fullwhite-logo.svg'
              width={200}
              height={100}
              alt='be-graphic footer logo'
              className='w-32 h-auto lg:w-52'
            />
          </Link>
          <Link
            href='/contact'
            className='group px-2 py-1 bg-white font-primary text-sm md:text-base lg:text-xl rounded-full hover:scale-110 transition-all active:scale-100 duration-300 text-pink font-medium flex flex-row items-center gap-1 lg:gap-2 w-fit'
          >
            {t('contact-btn')}
            <RxArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
          </Link>
        </div>
        <div className='w-[40%] sm:w-fit'>
          <ul className='flex flex-col gap-2 sm:gap-4'>
            <li>
              <Link href='/'>{t('home')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('about')}</Link>
            </li>
            <li>
              {t('developer')}
              <a href='https://github.com/luiferg' className='font-bold'>
                Luis Gomez
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-1 sm:gap-2 w-[10%] sm:w-fit'>
          <a
            href='https://wa.me/34666615881'
            className=' p-2 lg:p-3 rounded-full text-white text-xl md:text-2xl lg:text-3xl hover:scale-110 transition-all active:scale-100 duration-300'
            rel='nofollow'
            target='_blank'
          >
            <BsWhatsapp />
          </a>
          <a
            href='https://www.linkedin.com/in/lizeth-salcedo-vergara-755644160/'
            className='p-2 lg:p-3 rounded-full text-white text-xl md:text-2xl lg:text-3xl hover:scale-110 transition-all active:scale-100 duration-300'
            rel='nofollow'
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://be-graphic.net/docs/CV-2023-Liz-Salcedo.pdf'
            className='p-2 lg:p-3 rounded-full text-white text-xl md:text-2xl lg:text-3xl hover:scale-110 transition-all active:scale-100 duration-300'
            rel='nofollow'
            target='_blank'
          >
            <BsFileEarmarkPerson />
          </a>
        </div>
      </div>
      <div className='flex flex-row w-full justify-center text-center'>
        Copyright &copy; 2023 Be-Graphic.{t('rights')}
      </div>
    </footer>
  ) : (
    ''
  )
}

export default Footer
