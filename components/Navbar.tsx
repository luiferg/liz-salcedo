'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [src, setSrc] = useState('')
  const openMenu = () => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <header>
      <AnimatePresence>
        <nav className='fixed z-10'>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ durantion: 1, damping: 40 }}
            className='bg-white w-screen lg:w-[6vw] px-10 py-3 lg:px-0 lg:py-16 lg:h-screen'
          >
            <div className='flex flex-row h-full w-full lg:flex-col justify-between items-center'>
              <Image
                src='/logo.svg'
                priority
                width={70}
                height={70}
                alt='Be Graphic logo'
                className='static'
              />
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, type: 'spring' },
                }}
                className='h-12 w-12 bg-blue-400 rounded-full flex flex-col justify-center items-center'
                onClick={openMenu}
                type='button'
              >
                <RxHamburgerMenu className='text-white text-3xl' />
              </motion.button>
            </div>
          </motion.div>
        </nav>
        {isOpen && (
          <motion.div key='menu' className='flex flex-row'>
            <div>
              <motion.div
                initial={{ x: -2000 }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    type: 'spring',
                    mass: 2,
                  },
                }}
                exit={{
                  x: -2000,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    delay: 0.4,
                    type: 'spring',
                    mass: 2,
                  },
                }}
                className='fixed h-screen w-[50vw] z-20 bg-blue-600'
              />
              <motion.div
                initial={{ x: -2000 }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    delay: 0.1,
                    type: 'spring',
                    mass: 2,
                  },
                }}
                exit={{
                  x: -2000,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    delay: 0.3,
                    type: 'spring',
                    mass: 2,
                  },
                }}
                className='fixed h-screen w-[50vw] z-20 bg-blue-500'
              />
              <motion.div
                initial={{ x: -2000 }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    delay: 0.2,
                    type: 'spring',
                    mass: 2,
                  },
                }}
                exit={{
                  x: -2000,
                  transition: {
                    duration: 0.3,
                    damping: 30,
                    type: 'spring',
                    mass: 2,
                    delay: 0.2,
                  },
                }}
                className='fixed h-screen w-[50vw] z-20 bg-blue-400 p-10'
              >
                <div>
                  <Link href='/'>
                    <Image
                      src='white-logo.svg'
                      height={100}
                      width={220}
                      alt='Be Graphic logo'
                      className=''
                    />
                  </Link>
                  <div className='text-white'>
                    <h3 className='text-2xl font-bold'>Diseño Digital</h3>
                    <ul className='list-none text-xl'>
                      <li>
                        <Link
                          href='/'
                          onMouseEnter={() =>
                            setSrc(
                              '/menu-highlights/industrialbox-highlight.jpg'
                            )
                          }
                          onMouseLeave={() => setSrc('')}
                          className='group max-w-fit inline-block'
                        >
                          IndustrialBOX
                          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Gopass
                          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Aurora
                          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Compensar
                          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <motion.button
                  initial={{ rotateZ: 200, scale: 0.5, opacity: 0 }}
                  whileInView={{
                    rotateZ: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  exit={{
                    rotateZ: 200,
                    scale: 0.5,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                  className='group absolute top-10 right-10'
                  onClick={closeMenu}
                  type='button'
                >
                  <RxCross1 className='group-hover:scale-125 text-white text-3xl transition-all' />
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1.2 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className='fixed w-screen h-screen bg-blue-400 bg-opacity-20 backdrop-blur-sm z-[8]'
            >
              <div id='projects' className='absolute flex right-0 w-1/2 h-full'>
                <Image
                  src={src}
                  fill
                  className='object-left object-cover'
                  unoptimized={true}
                  alt=''
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
