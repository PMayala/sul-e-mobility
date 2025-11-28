import { useState, useEffect } from 'react'

export function useAutoSlide(length: number, interval: number = 5000) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length)
    }, interval)

    return () => clearInterval(timer)
  }, [length, interval])

  return current
}
