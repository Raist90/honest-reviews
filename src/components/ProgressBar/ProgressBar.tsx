'use client'
import { useReadingProgress } from "@/utils"
import { usePathname } from "next/navigation"

export const ProgressBar = () => {
  const progress = useReadingProgress()
  const usePathName = usePathname()

  /** Only show progress bar on posts route */
  if (!usePathName.startsWith('/posts')) return null

  return (
    <div className="sticky top-0 z-50">
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${progress - 100}%)`,
        }}
        className={`absolute w-full transition-transform duration-150 h-1 bg-[--primary-color] `}
      />
    </div>
  )
}
