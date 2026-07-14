"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HoneySection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <div className="order-2 lg:order-1">
            <span className="text-xs tracking-[0.3em] text-primary/70 mb-4 block">
              {t.honey.label}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              {t.honey.title}{" "}
              <span className="italic">{t.honey.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.honey.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-2 border-accent pl-4">
                <span className="font-serif text-3xl text-primary">{t.honey.stat1}</span>
                <p className="text-sm text-muted-foreground">{t.honey.stat1Label}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <span className="font-serif text-3xl text-primary">{t.honey.stat2}</span>
                <p className="text-sm text-muted-foreground">{t.honey.stat2Label}</p>
              </div>
            </div>

            <Link
              href="#tienda"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              {t.honey.cta}
            </Link>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miel-calafate-RWb6E2t7huN9fgUALe03hObK82W1QE.png"
                alt="Miel y Calafate - Untable a base de miel y calafate"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
