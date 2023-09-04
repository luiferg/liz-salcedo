'use client'
import { PageContainer, PageWrapper } from '@/components'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const page = () => {
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations('Leaobranco')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <PageWrapper>
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
          className='visible lg:invisible'
        >
          <div className='h-full w-screen max-w-[1920px] max-h-[1080px] relative'>
            <Image
              src='/web-design/leaobranco-slide-1.webp'
              height={756}
              width={1344}
              unoptimized={true}
              priority
              alt='leaobranco be-graphic'
              className='object-center object-cover'
            />
            <div className='h-full w-screen max-w-[1920px] max-h-[1080px] absolute top-0 flex flex-col font-primary text-white'>
              <div className='flex flex-col pt-2 sm:pt-4 pl-6 sm:pl-10'>
                <div className='overflow-hidden'>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: 'tween', delay: 0.4 }}
                  >
                    <Image
                      src={'/web-design/leaobranco-logo.svg'}
                      width={300}
                      height={100}
                      alt='leaobranco-logo be-graphic'
                      className='h-8 md:h-14 w-auto'
                    />
                  </motion.div>
                </div>
                <ul className='text-sm md:text-xl w-[50%]'>
                  <li className='overflow-hidden py-[2px]'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.6 }}
                      className='text-[#000000] font-light'
                    >
                      {t('li-1-1')}
                      <b className='font-medium'>{t('li-1-2')}</b>
                      {t('li-1-3')}
                    </motion.p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='bg-white flex p-8 justify-center items-center'>
            <div className='flex flex-col gap-3 w-90% md:w-[80%] text-center'>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: 'tween', delay: 1.3 }}
                  className='font-secondary text-pink text-3xl md:text-5xl'
                >
                  {t('title')}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className='flex flex-col gap-3'
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
          <div className='h-full w-screen max-w-[1920px] max-h-[1080px] relative'>
            <Image
              src='/web-design/leaobranco-slide-2.webp'
              height={756}
              width={1344}
              unoptimized={true}
              priority
              alt='leaobranco be-graphic'
              className='object-left object-cover'
            />
          </div>
        </motion.div>
      ) : (
        <PageContainer>
          <div className='h-full w-screen max-w-[1920px] max-h-[1080px] relative'>
            <Image
              src='/web-design/leaobranco-slide-1.webp'
              fill
              unoptimized={true}
              priority
              alt='leaobranco be-graphic'
              className='object-center object-cover'
            />
            <div className='h-full w-screen max-w-[1920px] max-h-[1080px] flex flex-col justify-start items-start relative font-primary text-white'>
              <div className='flex flex-col ml-[10vw] pt-[4vh] 2xl:pt-[6vh]'>
                <div className='overflow-hidden'>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: 'tween', delay: 0.4 }}
                  >
                    <Image
                      src={'/web-design/leaobranco-logo.svg'}
                      width={700}
                      height={200}
                      alt='leaobranco-logo be-graphic'
                      className='h-24 2xl:h-28 w-auto'
                    />
                  </motion.div>
                </div>
                <ul className='text-3xl 2xl:text-4xl -mt-1 w-[50%]'>
                  <li className='overflow-hidden'>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, type: 'tween', delay: 0.6 }}
                      className='text-[#000000] py-4 font-light'
                    >
                      {t('li-1-1')}
                      <b className='font-medium'>{t('li-1-2')}</b>
                      {t('li-1-3')}
                    </motion.p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            ref={ref}
            className='h-full w-screen max-w-[1920px] max-h-[1080px] bg-white flex p-28 justify-center items-center'
          >
            <div className='flex flex-col gap-6 text-center w-[50%] flex-wrap'>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : ''}
                  transition={{ duration: 0.3, type: 'tween', delay: 0.8 }}
                  className='font-secondary text-pink text-7xl'
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
                <p className='font-primary text-black text-xl'>
                  {t('description-1')}
                  <b>{t('description-2')}</b>
                  {t('description-3')}
                </p>
                <p className='font-primary text-black text-xl'>
                  {t('description-4')}
                </p>
              </motion.div>
            </div>
          </div>
          <div className='h-full w-screen max-w-[1920px] max-h-[1080px] relative'>
            <Image
              src='/web-design/leaobranco-slide-2.webp'
              fill
              unoptimized={true}
              priority
              alt='leaobranco be-graphic'
              className='object-left object-cover'
            />
          </div>
        </PageContainer>
      )}
    </PageWrapper>
  )
}

export default page
