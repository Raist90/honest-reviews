'use client'
import { useEffect, useState } from "react"

export const useReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollProgress = window.scrollY

      let scrollHeight = document.body.scrollHeight - window.innerHeight

      if (scrollHeight) {
        setProgress(Number((currentScrollProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return progress
}
