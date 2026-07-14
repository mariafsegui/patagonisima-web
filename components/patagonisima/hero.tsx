"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function Hero() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState<"photo" | "reveal" | "complete">("photo")

  useEffect(() => {
    // La foto se muestra 5s, luego hace fade suave y aparece el logo
    const timer1 = setTimeout(() => setPhase("reveal"), 5000)
    const timer2 = setTimeout(() => setPhase("complete"), 7000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const words = t.hero.title.split(" ")

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Grid decorativa de fondo */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(13)].map((_, i) => (
            <div 
              key={i} 
              className={`border-l border-primary/[0.03] ${i === 12 ? 'border-r' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Imagen del glaciar - aparece primero, luego hace fade suave */}
      <div 
        className={`absolute inset-0 z-10 transition-all ease-out duration-[2500ms] ${
          phase === "photo" 
            ? "opacity-100" 
            : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <Image
          src="/images/hero-caja.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        {/* Texto sobre el glaciar durante la fase inicial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/80 text-[10px] tracking-[0.5em] uppercase font-light">
            Patagonia Argentina
          </p>
        </div>
      </div>

      {/* Imagen del glaciar como fondo sutil despues de la transicion */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ${
          phase === "complete" ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <Image
          src="/images/hero-caja.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/85 via-[#F5F0E8]/70 to-[#F5F0E8]/90" />
      </div>

      {/* Esquinas decorativas doradas */}
      <div 
        className={`absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-accent/40 transition-all duration-1000 ${
          phase === "complete" ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{ transitionDelay: "400ms" }}
        aria-hidden="true" 
      />
      <div 
        className={`absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-accent/40 transition-all duration-1000 ${
          phase === "complete" ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{ transitionDelay: "500ms" }}
        aria-hidden="true" 
      />
      <div 
        className={`absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-accent/40 transition-all duration-1000 ${
          phase === "complete" ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{ transitionDelay: "600ms" }}
        aria-hidden="true" 
      />
      <div 
        className={`absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-accent/40 transition-all duration-1000 ${
          phase === "complete" ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{ transitionDelay: "700ms" }}
        aria-hidden="true" 
      />

      {/* Contenido principal */}
      <div 
        className={`max-w-5xl mx-auto px-8 text-center relative z-20 transition-all ease-out duration-[1200ms] ${
          phase !== "photo" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Location badge */}
        <div 
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            phase === "complete" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="w-16 h-px bg-accent/50" aria-hidden="true" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-light">
            {t.hero.location}
          </span>
          <span className="w-16 h-px bg-accent/50" aria-hidden="true" />
        </div>

        {/* Logo grande */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 ${
            phase !== "photo" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <Image
            src="/images/logo.png"
            alt="Patagonisima - Sabor de Origen"
            width={800}
            height={320}
            priority
            className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto"
          />
        </div>

        {/* Linea decorativa dorada */}
        <div 
          className={`flex justify-center mb-10 transition-all duration-700 ${
            phase === "complete" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <span className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
        </div>

        {/* Tagline con palabras animadas */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-[1.2] mb-6 tracking-tight">
            {words.map((word, i) => (
              <span 
                key={i}
                className={`inline-block mr-[0.3em] transition-all duration-700 ${
                  phase === "complete" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                {word}
              </span>
            ))}
            <em 
              className={`italic text-accent block mt-2 transition-all duration-700 ${
                phase === "complete" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${400 + words.length * 100 + 100}ms` }}
            >
              {t.hero.titleHighlight}
            </em>
          </h1>
          <p 
            className={`text-sm text-primary/50 leading-relaxed max-w-lg mx-auto font-light transition-all duration-700 ${
              phase === "complete" ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {t.hero.description}
          </p>
        </div>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16 transition-all duration-700 ${
            phase === "complete" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <Link
            href="#galletitas"
            className="group relative bg-primary text-primary-foreground px-12 py-4 text-[10px] tracking-[0.3em] uppercase font-light overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link
            href="#historia"
            className="group inline-flex items-center gap-3 text-sm text-primary/60 hover:text-primary transition-all duration-300"
          >
            <span className="font-serif italic">{t.hero.ourStory}</span>
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`flex flex-col items-center gap-3 transition-all duration-700 ${
            phase === "complete" ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" aria-hidden="true" />
          <p className="text-[9px] tracking-[0.4em] uppercase text-primary/30 font-light">
            {t.hero.scroll}
          </p>
        </div>
      </div>
    </section>
  )
}
