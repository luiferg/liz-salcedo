'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RxHamburgerMenu, RxCross1, RxArrowRight } from 'react-icons/rx'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '.'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuSpan =
    'block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'
  const ulStyle = 'list-none text-base md:text-xl flex flex-col gap-[2px]'
  const openMenu = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden'
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflowY = 'auto'
  }, [])

  const t = useTranslations('Navbar')

  return (
    <header>
      <AnimatePresence>
        <nav className='visible lg:invisible z-10'>
          <div className='bg-white w-screen px-10 py-3'>
            <div className='flex flex-row h-full w-full lg:flex-col justify-between items-center'>
              <LanguageSwitcher />
              <Link href='/'>
                <Image
                  src='/logo.svg'
                  priority
                  width={60}
                  height={60}
                  alt='Be Graphic logo'
                  className='static'
                />
              </Link>
              <div>
                <motion.button
                  whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.2, type: 'spring' },
                  }}
                  className='h-12 w-12 bg-white rounded-full flex flex-col justify-center items-center'
                  onClick={openMenu}
                  type='button'
                >
                  <RxHamburgerMenu className='text-blue-400 text-3xl' />
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
        {isOpen && (
          <motion.div key='menuMobile' className='absolute top-0 z-20'>
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
                className='fixed h-[100svh] w-screen z-20 bg-blue-400 p-10 shadow-[2px_0_5px_0_rgba(0,0,0,0.3)] flex flex-col justify-center font-primary'
              >
                <div className='flex flex-col max-h-[100svh] flex-wrap gap-1'>
                  <Link href='/' onClick={closeMenu}>
                    <Image
                      src='/white-logo.svg'
                      height={100}
                      width={220}
                      alt='Be Graphic logo'
                      className='h-14 w-auto'
                    />
                  </Link>
                  <div className='text-white'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      {t('digital-design')}
                    </h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link
                          href='/industrialbox'
                          className='group max-w-fit inline-block'
                          onClick={closeMenu}
                        >
                          IndustrialBOX
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/gopass'
                          className='group max-w-fit inline-block'
                          onClick={closeMenu}
                        >
                          Gopass
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/aurora'
                          className='group max-w-fit inline-block'
                          onClick={closeMenu}
                        >
                          Aurora
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/compensar'
                          className='group max-w-fit inline-block'
                          onClick={closeMenu}
                        >
                          Compensar
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      {t('graphic-design')}
                    </h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link
                          href='/teaspoon'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Teaspoon
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/leaobranco'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Leao Branco
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/tonaypepo'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Toña y Pepo
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      {t('editorial-design')}
                    </h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link
                          href='/agudanavaja'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          La Aguda Navaja de Algo que No Era Amor
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/goyn'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Corona Goyn
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/aptuno'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Aptuno
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      {t('brand-identity')}
                    </h3>
                    <ul className={`${ulStyle}`}>
                      <li>
                        <Link
                          href='/bumbox'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          BumBox
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/arbitramentos'
                          onClick={closeMenu}
                          className='group max-w-fit inline-block'
                        >
                          Arbitramentos
                          <span className={`${menuSpan}`}></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='text-white flex flex-row items-center gap-1 group'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      <Link
                        href='/about'
                        onClick={closeMenu}
                        className='group max-w-fit inline-block'
                      >
                        {t('about-me')}
                        <span className={`${menuSpan}`}></span>
                      </Link>
                    </h3>
                    <RxArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
                  </div>
                  <div className='text-white flex flex-row items-center gap-1 group'>
                    <h3 className='text-xl md:text-3xl font-bold'>
                      <Link
                        href='/contact'
                        onClick={closeMenu}
                        className='group max-w-fit inline-block'
                      >
                        {t('contact-me')}
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

export default MobileNavbar
