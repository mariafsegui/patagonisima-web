"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesBar() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useLanguage()

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let rafId: number
    let position = 0
    const speed = 0.4

    const animate = () => {
      if (!isPaused) {
        position += speed
        const halfWidth = container.scrollWidth / 2
        if (position >= halfWidth) position = 0
        container.scrollLeft = position
      }
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isPaused])

  const features = t.features

  return (
    <div 
      className="bg-primary py-5 overflow-hidden border-y border-primary"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      role="marquee"
      aria-label="Brand features"
    >
      <div 
        ref={scrollRef}
        className="flex items-center gap-12 whitespace-nowrap overflow-hidden"
      >
        {[...features, ...features, ...features].map((feature, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/90 font-light">
              {feature}
            </span>
            <span className="w-1 h-1 bg-accent" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
