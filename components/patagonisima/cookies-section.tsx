"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

// Cada variedad define el color del panel (aproximado al fondo de su foto)
// para que la imagen se funda sin bordes duros.
const cookies = [
  {
    id: 1,
    image: "/images/galletita-calafate.jpg",
    panel: "#E9D2CC",
    isNew: true,
  },
  {
    id: 2,
    image: "/images/galletita-mantecada.jpg",
    panel: "#F0C4B8",
    isNew: false,
  },
  {
    id: 3,
    image: "/images/galletita-cookie.jpg",
    panel: "#F0D9C3",
    isNew: false,
  },
]

// Máscara radial: los bordes de la foto se funden con el panel de color.
const featherMask =
  "radial-gradient(72% 72% at 50% 45%, #000 20%, rgba(0,0,0,0.75) 46%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.1) 84%, transparent 100%)"

export function CookiesSection() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Dispara la entrada cuando la sección aparece en pantalla.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const total = cookies.length
  const go = (dir: number) => {
    setDirection(dir)
    setActive((prev) => (prev + dir + total) % total)
  }
  const goTo = (i: number) => {
    setDirection(i >= active ? 1 : -1)
    setActive(i)
  }

  const current = cookies[active]
  const item = t.cookies.items[active]
  const slideIn = direction >= 0 ? "slide-in-from-right-16" : "slide-in-from-left-16"

  return (
    <section
      ref={sectionRef}
      id="galletitas"
      className="relative bg-background overflow-hidden"
      aria-labelledby="cookies-title"
    >
      {/* Panel de color con divisoria curva — entra junto con la foto */}
      {inView && (
        <div
          key={`panel-${active}`}
          className={`absolute inset-0 pointer-events-none animate-in fade-in duration-[900ms] ease-out ${slideIn}`}
          aria-hidden="true"
        >
          {/* Desktop: curva vertical en S (mitad derecha) */}
          <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M52,0 C60,22 40,34 46,52 C51,68 66,74 58,100 L100,100 L100,0 Z" fill={current.panel} />
          </svg>
          {/* Mobile: panel superior con curva inferior */}
          <svg className="md:hidden absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,50 C74,58 26,42 0,52 Z" fill={current.panel} />
          </svg>
        </div>
      )}

      {/* Intro full-bleed: foto a todo el ancho con título superpuesto */}
      <div className="relative z-10 w-full h-[52vh] min-h-[360px] md:h-[62vh] md:min-h-[480px] overflow-hidden">
        <Image
          src="/images/productos.jpg"
          alt="Surtido de galletitas, untable y caja Patagonisima"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Velos para legibilidad y para fundir la base con el fondo crema */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(60,40,32,0.34) 0%, rgba(60,40,32,0.12) 42%, transparent 72%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 md:h-56"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background) 96%)",
          }}
          aria-hidden="true"
        />

        {/* Título sobre el banner */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12">
            <h2
              id="cookies-title"
              className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md"
            >
              {t.shop.title}{" "}
              <em className="font-serif italic font-normal text-white/90">{t.shop.titleHighlight}</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Encabezado de galletitas */}
        <div className="pt-16 md:pt-24">
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary/60 font-light block mb-4">
            01 — {t.cookies.titleHighlight}
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
            {t.cookies.title}{" "}
            <em className="font-serif italic font-normal text-primary/80">{t.cookies.titleHighlight}</em>
          </h3>
        </div>

        {/* Panel dividido */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-4 py-8 md:py-14 min-h-[560px] md:min-h-[600px]">
          {/* Imagen (aparece primero en mobile, derecha en desktop) */}
          <div className="order-1 md:order-2 relative flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[360px] md:max-w-[420px]">
              {inView && (
                <div
                  key={`img-${current.id}`}
                  className={`absolute inset-0 overflow-hidden animate-in fade-in zoom-in-95 duration-[900ms] ease-out ${slideIn}`}
                  style={{ WebkitMaskImage: featherMask, maskImage: featherMask }}
                >
                  <Image
                    src={current.image}
                    alt={item.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Texto */}
          {inView && (
            <div
              key={`text-${current.id}`}
              className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left md:pr-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
            >
              {current.isNew && (
                <span className="mb-6 inline-flex bg-primary text-primary-foreground text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 font-light">
                  {t.cookies.new}
                </span>
              )}
              <span className="font-serif italic text-5xl md:text-6xl text-primary/20 leading-none mb-4">
                {`0${active + 1}`}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.05] text-balance">
                {item.name}
              </h3>
              <div className="h-px w-16 bg-primary/25 my-7" aria-hidden="true" />
              <p className="text-base md:text-lg text-primary/70 leading-relaxed font-light max-w-sm text-pretty">
                {item.description}
              </p>

              <Link
                href="#tienda"
                className="mt-9 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-primary/80 hover:text-primary transition-all duration-300 group font-light"
              >
                {t.cookies.seeAll}
                <ArrowRight
                  size={13}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Controles: puntos + flechas */}
        <div className="relative flex items-center justify-between pb-20 md:pb-28">
          <div className="flex items-center gap-3">
            {cookies.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver ${t.cookies.items[i].name}`}
                aria-current={i === active}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border border-primary/25 text-primary/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full border border-primary/25 text-primary/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
