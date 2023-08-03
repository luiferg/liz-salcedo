'use client'
import { ImageSlider, PageContainer, PageWrapper } from '@/components'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const page = () => {
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations('Industrialbox')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: '/digital-design/industrialbox-slide-2.webp',
    },
    {
      src: '/digital-design/industrialbox-slide-3.webp',
    },
  ]

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
    <PageWrapper>
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
          className='visible lg:invisible'
        >
          <div className='h-full w-screen relative'>
            <Image
              src='/digital-design/industrialbox-slide-1.webp'
              height={756}
              width={1344}
              unoptimized={true}
              priority
              alt='industrialbox be-graphic'
              className='object-left object-cover'
            />
            <div className='absolute bottom-2 flex flex-col justify-end font-primary text-[#000000]'>
              <div className='pl-8'>
                <div className='overflow-hidden'>
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: 'tween', delay: 0.4 }}
                    className='text-3xl md:text-5xl font-bold'
                  >
                    {t('title')}
                  </motion.h1>
                </div>
                <ul className='text-sm md:text-xl'>
                  <li className='overflow-hidden py-[2px]'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.6 }}
                    >
                      {t('li-1-1')}
                      <b>{t('li-1-2')}</b>
                    </motion.p>
                  </li>
                  <li className='overflow-hidden py-[2px]'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.9 }}
                    >
                      {t('li-2-1')}
                      <b>{t('li-2-2')}</b>
                    </motion.p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='bg-white flex p-8 justify-center items-center'>
            <div className='flex flex-col gap-2 w-90% md:w-[80%] text-center'>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: 'tween', delay: 1.3 }}
                  className='font-secondary text-blue-400 text-3xl md:text-5xl'
                >
                  {t('title')}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                <p className='font-primary text-black text-sm md:text-xl'>
                  {t('description-1')}
                  <b>{t('description-2')}</b>
                  {t('description-3')}
                </p>
                <p className='font-primary text-black text-sm md:text-xl'>
                  {t('description-4')}
                </p>
              </motion.div>
            </div>
          </div>
          <div className='aspect-video w-screen relative flex'>
            <ImageSlider images={images} />
          </div>
        </motion.div>
      ) : (
        <PageContainer>
          <div className='h-full w-screen relative'>
            <Image
              src='/digital-design/industrialbox-slide-1.webp'
              fill
              unoptimized={true}
              priority
              alt='industrialbox be-graphic'
              className='object-left object-cover'
            />
            <div className='h-full w-screen flex flex-col justify-end relative font-primary text-[#000000]'>
              <div className='pl-[10vw] pb-[10vh]'>
                <div className='overflow-hidden'>
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: 'tween', delay: 0.4 }}
                    className='text-8xl font-bold'
                  >
                    {t('title')}
                  </motion.h1>
                </div>
                <ul className='text-3xl 2xl:text-4xl'>
                  <li className='overflow-hidden py-1'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.6 }}
                    >
                      {t('li-1-1')}
                      <b>{t('li-1-2')}</b>
                    </motion.p>
                  </li>
                  <li className='overflow-hidden py-1'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.9 }}
                    >
                      {t('li-2-1')}
                      <b>{t('li-2-2')}</b>
                    </motion.p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            ref={ref}
            className='h-full w-screen bg-white flex p-28 justify-center items-center'
          >
            <div className='flex flex-col gap-6 text-center w-[60%] flex-wrap'>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : ''}
                  transition={{ duration: 0.3, type: 'tween', delay: 0.8 }}
                  className='font-secondary text-blue-400 text-7xl'
                >
                  {t('title')}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : ''}
                transition={{ durantion: 0.5, delay: 1.2 }}
                className='flex flex-col gap-6'
              >
                <p className='font-primary text-black text-2xl'>
                  {t('description-1')}
                  <b>{t('description-2')}</b>
                  {t('description-3')}
                </p>
                <p className='font-primary text-black text-2xl'>
                  {t('description-4')}
                </p>
              </motion.div>
            </div>
          </div>
          <div className='bg-white h-auto w-screen relative flex justify-center items-center'>
            <ImageSlider images={images} />
          </div>
        </PageContainer>
      )}
    </PageWrapper>
  )
}

export default page
