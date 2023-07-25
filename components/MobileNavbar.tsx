'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RxHamburgerMenu, RxCross1, RxArrowRight } from 'react-icons/rx'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuSpan =
    'block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'
  const ulStyle = 'list-none text-base flex flex-col gap-[2px]'
  const openMenu = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden'
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflowY = 'auto'
  }, [])

  return (
    <header>
      <AnimatePresence>
        <nav className='fixed z-10'>
          <div className='bg-white w-screen lg:w-[6vw] px-10 py-3 lg:px-0 lg:py-16 lg:h-screen'>
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
          </div>
        </nav>
        {isOpen && (
          <motion.div key='menuMobile'>
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
                className='fixed h-[100svh] w-screen z-20 bg-blue-600'
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
                className='fixed h-[100svh] w-screen z-20 bg-blue-500'
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
                className='fixed h-[100svh] w-screen z-20 bg-blue-400 p-10 shadow-[2px_0_5px_0_rgba(0,0,0,0.3)] flex flex-col justify-center'
              >
                <div className='flex flex-col max-h-[100svh] flex-wrap gap-1'>
                  <Link href='/'>
                    <Image
                      src='white-logo.svg'
                      height={100}
                      width={220}
                      alt='Be Graphic logo'
                      className='h-14 w-auto'
                    />
                  </Link>
                  <div className='text-white'>
                    <h3 className='text-xl font-bold'>Diseño Digital</h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          IndustrialBOX
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Gopass
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Aurora
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Compensar
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl font-bold'>Diseño Web</h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Teaspoon
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Leao Branco
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Toña y Pepo
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl font-bold'>Diseño Editorial</h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          La Aguda Navaja de Algo que No Era Amor
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Corona Goyn
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Aptuno
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl font-bold'>Identidad de Marca</h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          BumBox
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link href='/' className='group max-w-fit inline-block'>
                          Arbitramentos
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white flex flex-row items-center gap-1 group'>
                    <h3 className='text-xl font-bold'>
                      <Link href='/' className='group max-w-fit inline-block'>
                        Sobre Mí
                        <span className={`${menuSpan}`}></span>
                      </Link>
                    </h3>
                    <RxArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
                  </div>
                  <div className='text-white flex flex-row items-center gap-1 group'>
                    <h3 className='text-xl font-bold'>
                      <Link href='/' className='group max-w-fit inline-block'>
                        Contacto
                        <span className={`${menuSpan}`}></span>
                      </Link>
                    </h3>
                    <RxArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
