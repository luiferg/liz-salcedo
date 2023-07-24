'use client'

import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

const PageContainer = () => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 80 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className='fixed left-0 right-0 will-change-transform'>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className='relative h-screen w-[94vw] flex items-center'
        >
          <div className='relative flex h-full'>
            <div className='h-full w-[100vw] relative flex'>
              <div className='h-full w-full'>
                <Image
                  src='/aguda-navaja.webp'
                  fill
                  unoptimized={true}
                  alt='aguda navaja'
                  className='h-full w-full'
                />
              </div>
            </div>
            <div className='h-full w-[94vw] bg-yellow' />
            <div className='h-full w-[94vw] bg-blue' />
            <div className='h-full w-[94vw] bg-pink' />
            <div className='h-full w-[94vw] bg-blue' />
            <div className='h-full w-[94vw] bg-black' />
          </div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className='w-screen'
      />
    </>
  )
}

export default PageContainer
