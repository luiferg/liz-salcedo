'use client'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageWrapper, StarIcon } from '@/components'
import { BsFileEarmarkPerson, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const page = () => {
  const t = useTranslations('About')

  const hola = ['¡', 'H', 'o', 'l', 'a', '!']
  const soy = ['S', 'o', 'y']
  const lizeth = ['L', 'i', 'z', 'e', 't', 'h']
  const salcedo = ['S', 'a', 'l', 'c', 'e', 'd', 'o']
  const hi = ['H', 'i', '!']
  const im = ['I', `'`, 'm']
  const locale = useLocale()
  const colors = [
    '#35bcaf',
    '#f4b645',
    '#ef7742',
    '#f4d0c2',
    '#f4b645',
    '#ed9e99',
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const letterAnimation = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <PageWrapper>
      <div className='lg:w-screen lg:h-screen flex flex-col lg:flex-row bg-[#f4eeed]'>
        <div className='lg:h-full lg:w-[53vw] lg:pl-[8vw] lg:pr-[2vw] p-8 flex flex-col justify-center items-center'>
          <div>
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              className='pb-2 lg:pb-6 2xl:pb-8'
            >
              <motion.p
                variants={letterAnimation}
                className={`text-blue-400 font-secondary text-2xl lg:text-3xl 2xl:text-4xl flex flex-row top-0 ${
                  locale === 'en' ? 'pl-9 lg:pl-10' : ''
                }`}
              >
                {locale === 'es' ? (
                  <>
                    {hola.map((letter, index) => (
                      <motion.span key={index}>{letter}</motion.span>
                    ))}
                  </>
                ) : (
                  <>
                    {hi.map((letter, index) => (
                      <motion.span key={index}>{letter}</motion.span>
                    ))}
                  </>
                )}
              </motion.p>
              <motion.div
                variants={letterAnimation}
                className='-mt-6 lg:-mt-7 2xl:-mt-8'
              >
                <Image
                  src='/liz-salcedo.webp'
                  alt='Liz Salcedo be-graphic'
                  priority
                  width={1000}
                  height={1200}
                  className='h-auto w-44 lg:w-60 2xl:w-64'
                />
              </motion.div>
              <div className='-mt-9 text-center'>
                <p className='text-white font-secondary text-xl lg:text-2xl 2xl:text-3xl flex flex-row justify-center lg:leading-[20px] 2xl:leading-[30px]'>
                  <>
                    {locale === 'es' ? (
                      <>
                        {soy.map((letter, index) => (
                          <motion.span
                            key={index}
                            variants={letterAnimation}
                            whileHover={{ scale: 1.2, translateY: -5 }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </>
                    ) : (
                      <>
                        {im.map((letter, index) => (
                          <motion.span
                            key={index}
                            variants={letterAnimation}
                            whileHover={{ scale: 1.2, translateY: -5 }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </>
                    )}
                  </>
                </p>
                <p className='text-blue-400 font-secondary text-4xl lg:text-5xl 2xl:text-6xl flex flex-row justify-center lg:leading-[40px] 2xl:leading-[50px]'>
                  {lizeth.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      whileHover={{
                        scale: 1.2,
                        translateY: -5,
                      }}
                      style={{ color: colors[index % colors.length] }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
                <p className='text-blue-400 font-secondary text-4xl lg:text-5xl 2xl:text-6xl flex flex-row justify-center lg:leading-[45px] 2xl:leading-[55px]'>
                  {salcedo.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      whileHover={{
                        scale: 1.2,
                        translateY: -5,
                      }}
                      style={{ color: colors[index % colors.length] }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2.6 } }}
            className='font-primary text-black gap-2 lg:gap-3 2xl:gap-5 flex flex-col overflow-hidden sm:w-[80%]'
          >
            <h1 className='text-lg lg:text-xl 2xl:text-2xl text-center font-medium'>
              {t('title')}
            </h1>
            <div className='text-sm md:text-xl lg:text-xl flex-wrap'>
              <p>{t('description')}</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 2.9 } }}
          className='bg-blue-400 lg:h-full lg:w-[47vw] p-8'
        >
          <div className='font-primary text-white flex flex-col h-full justify-center lg:px-[calc(10%)]'>
            <div className='flex flex-col gap-2 lg:gap-3 2xl:gap-5 text-sm md:text-xl lg:text-xl'>
              <h2 className='font-secondary text-xl md:text-2xl lg:text-3xl'>
                {t('experience')}
              </h2>
              <div className='flex flex-row gap-2'>
                <div>
                  <StarIcon className='h-auto w-5' />
                </div>
                <div>
                  <h3 className='font-bold text-lg md:text-xl lg:text-2xl'>
                    {t('ul')} 2021-2023
                  </h3>
                  <h4 className='font-semibold text-base md:text-lg lg:text-xl'>
                    Funlab Experience Design
                  </h4>
                  <ul className='list-disc list-inside marker:text-yellow'>
                    <li>{t('li-1-1')}</li>
                    <li>{t('li-1-2')}</li>
                    <li>{t('li-1-3')}</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <div>
                  <StarIcon className='h-auto w-5' />
                </div>
                <div>
                  <h3 className='font-bold text-lg md:text-xl lg:text-2xl'>
                    {t('ul')} 2020-2021
                  </h3>
                  <h4 className='font-semibold text-base md:text-lg lg:text-xl'>
                    Sophia Extensa
                  </h4>
                  <ul className='list-disc list-inside marker:text-yellow'>
                    <li>{t('li-2-1')}</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <div>
                  <StarIcon className='h-auto w-5' />
                </div>
                <div>
                  <h3 className='font-bold text-lg md:text-xl lg:text-2xl'>
                    {t('ul')} 2019-2020
                  </h3>
                  <h4 className='font-semibold text-base md:text-lg lg:text-xl'>
                    Triada Group
                  </h4>
                  <ul className='list-disc list-inside marker:text-yellow'>
                    <li>{t('li-3-1')}</li>
                    <li>{t('li-3-2')}</li>
                    <li>{t('li-3-3')}</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row gap-[calc(20%-5px)] w-full px-8 justify-center lg:justify-normal py-4'>
                <a
                  href='https://wa.me/34666615881'
                  className='bg-white p-2 lg:p-3 rounded-full text-yellow text-xl md:text-2xl lg:text-3xl lg:hover:scale-110 transition-all active:scale-100 duration-300'
                  rel='nofollow'
                  target='_blank'
                >
                  <BsWhatsapp />
                </a>
                <a
                  href='https://www.linkedin.com/in/lizeth-salcedo-vergara-755644160/'
                  className='bg-white p-2 lg:p-3 rounded-full text-pink text-xl md:text-2xl lg:text-3xl lg:hover:scale-110 transition-all active:scale-100 duration-300'
                  rel='nofollow'
                  target='_blank'
                >
                  <FaLinkedinIn />
                </a>
                <Link
                  href={t('cv-link')}
                  className='bg-white p-2 lg:p-3 rounded-full text-orange text-xl md:text-2xl lg:text-3xl lg:hover:scale-110 transition-all active:scale-100 duration-300'
                  rel='nofollow'
                  target='_blank'
                >
                  <BsFileEarmarkPerson />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default page
