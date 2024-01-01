import { motion } from 'framer-motion'
import React from 'react'
import { useEffect, useState } from 'react'

function FadeDown({ children, duration, delay }) {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const scrollThreshold = 100

      setIsVisible(currentScrollPos < scrollThreshold || currentScrollPos < prevScrollPos)

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return isVisible ? (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  ) : null
}

export default FadeDown
