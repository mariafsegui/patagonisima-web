"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const honeyProduct = {
  id: 1,
  image: "/images/miel.jpg",
  video: "/images/miel.mp4",
  panel: "#EBDCE0",
  isNew: true,
}

// Máscara radial: los bordes de la foto se funden con el panel de color.
const featherMask =
  "radial-gradient(72% 72% at 50% 45%, #000 20%, rgba(0,0,0,0.75) 46%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.1) 84%, transparent 100%)"

export function HoneyProductsSection() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="miel" className="relative bg-background overflow-hidden" aria-labelledby="honey-title">
      {/* Panel de color con divisoria curva */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Desktop: curva vertical en S (mitad izquierda) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M48,0 C40,22 60,34 54,52 C49,68 34,74 42,100 L0,100 L0,0 Z"
            fill={honeyProduct.panel}
          />
        </svg>
        {/* Mobile: panel superior con curva inferior */}
        <svg
          className="md:hidden absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,50 C74,58 26,42 0,52 Z" fill={honeyProduct.panel} />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="pt-20 md:pt-28">
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary/60 font-light block mb-4">
            02 — Miel
          </span>
          <h2 id="honey-title" className="text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
            {t.honeyProducts.title}{" "}
            <em className="font-serif italic font-normal text-primary/80">{t.honeyProducts.titleHighlight}</em>
          </h2>
        </div>

        {/* Panel dividido */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-4 py-12 md:py-20 min-h-[560px] md:min-h-[600px]">
          {/* Imagen + video (aparece primero en mobile, izquierda en desktop) */}
          <div className="order-1 relative flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[360px] md:max-w-[440px]">
              {/* Foto difuminada */}
              <div
                className="absolute inset-0 -translate-y-8 md:-translate-y-10 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-left-12 duration-[900ms] ease-out"
                style={{ WebkitMaskImage: featherMask, maskImage: featherMask }}
              >
                <Image
                  src={honeyProduct.image}
                  alt={t.honeyProducts.items[0].name}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 440px"
                  className="object-cover"
                />
              </div>

              {/* Video superpuesto (picture-in-picture) */}
              <div className="absolute -bottom-10 md:-bottom-12 -right-2 md:-right-10 w-28 md:w-36 aspect-[3/4] overflow-hidden rounded-[999px] shadow-xl ring-4 ring-background animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
                <video
                  ref={videoRef}
                  src={honeyProduct.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-white/15 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? (
                    <VolumeX size={13} className="text-white" aria-hidden="true" />
                  ) : (
                    <Volume2 size={13} className="text-white" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 flex flex-col items-center md:items-start text-center md:text-left md:pl-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            {honeyProduct.isNew && (
              <span className="mb-6 inline-flex bg-primary text-primary-foreground text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-light">
                {t.honeyProducts.new}
              </span>
            )}
            <span className="font-serif italic text-5xl md:text-6xl text-primary/20 leading-none mb-4">01</span>
            <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.05] text-balance">
              {t.honeyProducts.items[0].name}
            </h3>
            <div className="h-px w-16 bg-primary/25 my-7" aria-hidden="true" />
            <p className="text-base md:text-lg text-primary/70 leading-relaxed font-light max-w-sm text-pretty">
              {t.honeyProducts.items[0].description}
            </p>

            <div className="flex items-center gap-4 mt-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary/60 font-light">
                Producto natural
              </span>
              <span className="w-6 h-px bg-accent" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-light">240g</span>
            </div>

            <Link
              href="#tienda"
              className="mt-9 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-primary/80 hover:text-primary transition-all duration-300 group font-light"
            >
              {t.honeyProducts.seeAll}
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="group-hover:translate-x-2 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="pb-20 md:pb-28" />
      </div>
    </section>
  )
}
