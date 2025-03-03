'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import gsap from 'gsap'
import classname from 'classnames'
import { ProjectType } from '@/utils/types'

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
}

function Modal({
  modal,
  projects,
}: {
  modal: {
    active: boolean
    index: number
  }
  projects: ProjectType[]
}) {
  const { active, index } = modal
  const containerRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorLabelRef = useRef(null)

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    })
    const moveContainerY = gsap.quickTo(containerRef.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    })
    const moveCursorX = gsap.quickTo(cursorRef.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    })
    const moveCursorY = gsap.quickTo(cursorRef.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    })
    const moveCursorLabelX = gsap.quickTo(cursorLabelRef.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    })
    const moveCursorLabelY = gsap.quickTo(cursorLabelRef.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    })

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      moveContainerX(clientX)
      moveContainerY(clientY)
      moveCursorX(clientX)
      moveCursorY(clientY)
      moveCursorLabelX(clientX)
      moveCursorLabelY(clientY)
    })
  }, [])

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'enter' : 'closed'}
        className='h-[350px] w-[400px] absolute flex items-center justify-center overflow-hidden bg-white  pointer-events-none '
      >
        <div
          style={{ top: index * -100 + '%' }}
          className='h-full w-full absolute transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)]'
        >
          {projects.map((project, i) => {
            const { src, color } = project
            return (
              <div
                style={{ backgroundColor: `${color}` }}
                key={`modal_${i}`}
                className={classname(
                  'h-full w-full flex items-center justify-center [&_img]:h-auto '
                )}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt='image'
                />
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursorRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'enter' : 'closed'}
        className='w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white absolute z-2 flex items-center justify-center text-[14px] font-light pointer-events-none '
      ></motion.div>
      <motion.div
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'enter' : 'closed'}
        className='w-[80px] h-[80px] rounded-[50%] bg-transparent text-white absolute z-2 flex items-center justify-center text-[14px] font-light pointer-events-none '
      >
        View
      </motion.div>
    </>
  )
}

export default Modal
