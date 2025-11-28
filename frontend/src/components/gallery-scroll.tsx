'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface GalleryScrollProps {
  images: string[]
}

export function GalleryScroll({ images }: GalleryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const x = useTransform(scrollXProgress, [0, 1], ['0%', '-50%'])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div 
        style={{ x }} 
        className="flex gap-4 min-w-max px-4"
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

