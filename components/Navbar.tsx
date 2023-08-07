'use client'

import React, { useEffect, useState } from 'react'
import { DesktopNavbar, MobileNavbar } from '.'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

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

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>
}

export default Navbar
