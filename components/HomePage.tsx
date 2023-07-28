'use client'
import { useEffect, useState } from 'react'
import { PageContainer } from '.'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations('Home')
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
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
  return (
    <div>
      {isMobile ? (
        <div>is mobile</div>
      ) : (
        <PageContainer>
          <div className='h-full w-screen relative'>
            <div className='h-full w-screen'>
              <Image
                src='/aguda-navaja.webp'
                fill
                unoptimized={true}
                alt='aguda navaja be-graphic'
                className='object-left object-cover'
              />
            </div>
          </div>
          <div className='h-full w-screen bg-white flex p-28 justify-center items-center'>
            <div className='flex flex-col gap-6 text-center w-[60%] flex-wrap'>
              <p className='font-secondary text-blue-400 text-7xl'>
                {t('greetings')}
                <br />
                {t('name')}
              </p>
              <p className='font-primary text-black text-2xl'>
                <b>{t('introduction-1')}</b>
                {t('introduction-2')}
              </p>
              <p className='font-primary text-black text-2xl'>
                <strong>{t('welcome')} </strong>
              </p>
            </div>
          </div>
          <div className='h-full w-screen relative'>
            <div className='h-full w-screen'>
              <Image
                src='/gopass.webp'
                fill
                unoptimized={true}
                alt='gopass be-graphic'
                className='object-left object-cover'
              />
            </div>
          </div>
        </PageContainer>
      )}
    </div>
  )
}

export default HomePage
