'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import Image from 'next/image'

interface Image {
  src: string
}

interface ImageSliderProps {
  images: Image[]
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images?.length || 0, page)
  const image = images && images[imageIndex]
  const src = image && image.src

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className='absolute h-full w-screen'
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Image
            src={src}
            alt='be-graphic'
            priority
            fill
            unoptimized={true}
            className='object-left object-cover'
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, type: 'spring' },
        }}
        whileTap={{
          scale: 1,
          transition: { duration: 0.2, type: 'spring' },
        }}
        onClick={() => paginate(1)}
        className='lg:bottom-4 max-lg:top-[calc(50%-20px)] absolute lg:absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-xl z-10 lg:right-[calc(40%-20px)] right-2'
      >
        <RxArrowRight />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, type: 'spring' },
        }}
        whileTap={{
          scale: 1,
          transition: { duration: 0.2, type: 'spring' },
        }}
        onClick={() => paginate(-1)}
        className='lg:bottom-4 max-lg:top-[calc(50%-20px)] absolute lg:absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-xl z-10 lg:left-[calc(40%-20px)] left-2'
      >
        <RxArrowLeft />
      </motion.div>
    </>
  )
}

export default ImageSlider
