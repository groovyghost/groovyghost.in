import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import FadeDown from './animations/FadeDown'
import FadeRight from './animations/FadeRight'
import FadeUp from './animations/FadeUp'
import { renderCanvas } from './renderCanvas'
import { ScrollContext } from './ScrollObserver'
import CustomLink from '@/components/Link'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0
  const elContainer = ref.current

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <AnimatePresence>
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <FadeUp duration={0.6}>
                  <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                    ABCD
                  </h1>
                </FadeUp>
                <FadeUp duration={0.6} delay={0.2}>
                  <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
                    XXXX XXXX Engineer.
                  </h2>
                </FadeUp>
                <FadeRight>
                  <CustomLink
                    href="/about"
                    className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
                  >
                    Read more about me &rarr;
                  </CustomLink>
                </FadeRight>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div role="presentation" className="flex flex-col items-center justify-center">
                  <FadeDown duration={1} delay={1.2}>
                    <HiOutlineArrowNarrowDown size={20} />
                  </FadeDown>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  )
}
