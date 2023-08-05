'use client'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageWrapper } from '@/components'

const page = () => {
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
      <div className='lg:w-screen lg:h-screen flex lg:flex-row'>
        <div className='bg-[#f4eeed] lg:h-full lg:w-[53vw] pl-[8vw] pr-[2vw] flex flex-col justify-center items-center'>
          <div>
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              className='pb-8'
            >
              <motion.p
                variants={letterAnimation}
                className='text-blue-400 font-secondary text-4xl flex flex-row top-0'
              >
                {hola.map((letter, index) => (
                  <motion.span key={index}>{letter}</motion.span>
                ))}
              </motion.p>
              <motion.div variants={letterAnimation} className='-mt-8'>
                <Image
                  src='/liz-salcedo.webp'
                  alt='Liz Salcedo be-graphic'
                  priority
                  width={1000}
                  height={1200}
                  className='h-auto w-64'
                />
              </motion.div>
              <div className='-mt-9 text-center'>
                <p className='text-white font-secondary text-xl flex flex-row justify-center leading-[30px]'>
                  {soy.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      whileHover={{ scale: 1.2, translateY: -5 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
                <p className='text-blue-400 font-secondary text-6xl flex flex-row justify-center leading-[50px]'>
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
                <p className='text-blue-400 font-secondary text-6xl flex flex-row justify-center leading-[55px]'>
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
            className='font-primary text-black gap-5 flex flex-col overflow-hidden'
          >
            <h1 className='text-2xl text-center font-medium'>
              DISEÑADORA GRÁFICA
            </h1>
            <div className='text-sm md:text-xl lg:text-xl flex-wrap'>
              <p>
                Soy graduada de la Escuela de Artes y Letras en Bogotá en el año
                2020. Apasionada de la literatura, el diseño y el interiorismo,
                disfruto de plasmar ideas en diferentes espacios. Me considero
                una persona creativa, entusiasta y proactiva. Me encanta conocer
                las tendencias y trabajar de la mano de ellas para lograr
                resultados dinámicos y con carácter.
              </p>
            </div>
          </motion.div>
        </div>
        <div className='bg-blue-400 lg:h-full lg:w-[47vw]'></div>
      </div>
    </PageWrapper>
  )
}

export default page
