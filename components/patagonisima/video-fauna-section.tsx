"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const PHOTO_URL = "/images/fauna-patagonia.jpeg"

export function VideoFaunaSection() {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = useCallback(() => setIsExpanded(true), [])
  const collapse = useCallback(() => setIsExpanded(false), [])

  return (
    <section
      className={`relative w-full cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isExpanded ? "h-[70vh] md:h-[85vh]" : "h-[180px] md:h-[220px]"
      }`}
      onClick={!isExpanded ? expand : undefined}
      aria-label="Fauna y ovejas de la Patagonia"
    >
      <Image
        src={PHOTO_URL}
        alt="Ovejas en la Patagonia"
        fill
        sizes="100vw"
        className="object-cover grayscale brightness-110 contrast-90"
      />

      {/* Collapsed overlay */}
      {!isExpanded && (
        <>
          <div className="absolute inset-0 bg-primary/15" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex items-center gap-6">
              <span className="hidden md:block w-16 h-px bg-white/50" aria-hidden="true" />
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-white tracking-tight drop-shadow-md">
                {t.videoFauna.title}{" "}
                <em className="italic text-white/90">{t.videoFauna.titleHighlight}</em>
              </h3>
              <span className="hidden md:block w-16 h-px bg-white/50" aria-hidden="true" />
            </div>
          </div>
          {/* Degradados para una transicion suave entre secciones */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
        </>
      )}

      {/* Expanded controls */}
      {isExpanded && (
        <div className="absolute top-8 right-8 z-20 flex gap-4">
          <button
            onClick={collapse}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Cerrar"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  )
}
