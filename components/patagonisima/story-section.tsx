"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function StorySection() {
  const { t } = useLanguage()

  return (
    <section
      id="historia"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      aria-labelledby="story-title"
    >
      {/* Foto full-screen de fondo */}
      <Image
        src="/images/abuela.png"
        alt="Manos de una abuela amasando masa de pan"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Velo para legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,16,14,0.78) 0%, rgba(20,16,14,0.55) 40%, rgba(20,16,14,0.15) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-24 md:py-36">
        <div className="max-w-xl">
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/70 mb-6 block font-light">
            {t.story.label}
          </span>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8"
          >
            {t.story.title}{" "}
            <em className="italic text-white/90">{t.story.titleHighlight}</em>
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed mb-10 font-light">
            <p className="text-lg lg:text-xl">{t.story.description1}</p>
            {t.story.description2 && <p className="text-lg lg:text-xl">{t.story.description2}</p>}
          </div>
          <Link href="#calafate" className="group inline-flex items-center gap-4">
            <span className="font-serif italic text-lg text-white/90 group-hover:text-white transition-colors duration-300">
              {t.story.cta}
            </span>
            <span className="w-12 h-px bg-white/40 group-hover:w-16 group-hover:bg-accent transition-all duration-300" aria-hidden="true" />
            <ArrowRight size={16} strokeWidth={1.5} className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
