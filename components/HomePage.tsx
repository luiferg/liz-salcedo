'use client'
import { useEffect, useState } from 'react'
import { PageContainer, ProjectButton } from '.'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations('Home')
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
  return (
    <div>
      {isMobile ? (
        <div className='visible lg:invisible'>
          <div className='relative'>
            <Image
              src='/aguda-navaja.webp'
              height={1344}
              width={756}
              priority
              unoptimized={true}
              alt='aguda navaja be-graphic'
              className='h-auto w-screen'
            />
            <div className='absolute bottom-4 right-4 z-10'>
              <ProjectButton link='/agudanavaja' />
            </div>
          </div>
          <div className='bg-white flex p-8 justify-center items-center'>
            <div className='flex flex-col gap-3 w-90% md:w-[80%] text-center'>
              <p className='font-secondary text-blue-400 text-3xl md:text-5xl'>
                {t('greetings')}
                <br />
                {t('name')}
              </p>
              <p className='font-primary text-black text-sm md:text-xl'>
                <b>{t('introduction-1')}</b>
                {t('introduction-2')}
              </p>
              <p className='font-primary text-black text-sm md:text-xl'>
                <strong>{t('welcome')} </strong>
              </p>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/gopass.webp'
              height={1344}
              width={756}
              unoptimized={true}
              alt='gopass be-graphic'
              className='h-auto w-screen'
            />
            <div className='absolute bottom-4 right-4 z-10'>
              <ProjectButton link='/gopass' />
            </div>
          </div>
        </div>
      ) : (
        <PageContainer>
          <div className='lg:h-screen w-screen relative'>
            <div className='lg:h-screen w-screen relative'>
              <Image
                src='/aguda-navaja.webp'
                fill
                unoptimized={true}
                priority
                alt='aguda navaja be-graphic'
                className='object-left object-cover'
              />
              <div className='absolute bottom-12 right-12'>
                <ProjectButton link='/agudanavaja' />
              </div>
            </div>
          </div>
          <div className='lg:h-screen w-screen bg-white flex p-28 justify-center items-center'>
            <div className='flex flex-col gap-6 text-center w-[50%] flex-wrap'>
              <p className='font-secondary text-blue-400 text-7xl'>
                {t('greetings')}
                <br />
                {t('name')}
              </p>
              <p className='font-primary text-black text-xl'>
                <b>{t('introduction-1')}</b>
                {t('introduction-2')}
              </p>
              <p className='font-primary text-black text-xl'>
                <strong>{t('welcome')} </strong>
              </p>
            </div>
          </div>
          <div className='lg:h-screen w-screen relative'>
            <div className='lg:h-screen w-screen relative'>
              <Image
                src='/gopass.webp'
                fill
                unoptimized={true}
                alt='gopass be-graphic'
                className='object-left object-cover'
              />
              <div className='absolute bottom-12 right-12'>
                <ProjectButton link='/gopass' />
              </div>
            </div>
          </div>
        </PageContainer>
      )}
    </div>
  )
}

export default HomePage
