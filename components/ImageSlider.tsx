import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'

const images = [
  '/digital-design/industrialbox-slide-2.webp',
  '/digital-design/industrialbox-slide-3.webp',
]

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length
      )
    }
  }

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='relative w-full h-full overflow-hidden'>
        <AnimatePresence
          initial={false}
          onExitComplete={handleAnimationComplete}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Image ${currentImage}`}
            className='absolute top-0 left-0 w-full h-full object-cover'
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.2, type: 'tween' }}
          />
        </AnimatePresence>

        <button
          className='group absolute bottom-5 left-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'
          onClick={handlePrev}
        >
          <RxArrowLeft className='text-2xl group-hover:-translate-x-1 transition-all' />
        </button>
        <button
          className='group absolute bottom-5 right-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'
          onClick={handleNext}
        >
          <RxArrowRight className='text-2xl group-hover:translate-x-1 transition-all' />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
