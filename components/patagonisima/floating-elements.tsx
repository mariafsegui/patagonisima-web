"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface FloatingElement {
  id: number
  type: "berry" | "bee"
  x: number
  y: number
  size: number
  duration: number
  delay: number
  direction: "left" | "right"
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Create random floating elements
    const newElements: FloatingElement[] = []
    
    // Add berries
    for (let i = 0; i < 6; i++) {
      newElements.push({
        id: i,
        type: "berry",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 25,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * 15,
        direction: Math.random() > 0.5 ? "left" : "right",
      })
    }
    
    // Add bees
    for (let i = 6; i < 10; i++) {
      newElements.push({
        id: i,
        type: "bee",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 25 + Math.random() * 20,
        duration: 20 + Math.random() * 15,
        delay: Math.random() * 10,
        direction: Math.random() > 0.5 ? "left" : "right",
      })
    }
    
    setElements(newElements)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute opacity-40 hover:opacity-60 transition-opacity"
          style={{
            top: `${el.y}%`,
            left: el.direction === "right" ? "-50px" : "auto",
            right: el.direction === "left" ? "-50px" : "auto",
            width: el.size,
            height: el.size,
            animation: `float-${el.direction} ${el.duration}s linear ${el.delay}s infinite`,
          }}
        >
          <Image
            src={el.type === "berry" ? "/images/calafate-berry.png" : "/images/bee.png"}
            alt=""
            width={el.size}
            height={el.size}
            className={`object-contain ${el.type === "bee" ? "animate-wiggle" : ""}`}
          />
        </div>
      ))}
    </div>
  )
}
