'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PageWrapper = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

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
    <>
      {' '}
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className='bg-white'
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -600 }}
          className='bg-white'
        >
          {children}
        </motion.div>
      )}
    </>
  )
}

export default PageWrapper
